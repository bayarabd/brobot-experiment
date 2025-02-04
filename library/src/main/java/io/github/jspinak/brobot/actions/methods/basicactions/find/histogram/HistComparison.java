package io.github.jspinak.brobot.actions.methods.basicactions.find.histogram;

import io.github.jspinak.brobot.actions.actionExecution.actionLifecycle.ActionLifecycleManagement;
import io.github.jspinak.brobot.datatypes.primitives.image.Image;
import io.github.jspinak.brobot.datatypes.primitives.match.MatchObject;
import io.github.jspinak.brobot.datatypes.primitives.region.Region;
import io.github.jspinak.brobot.datatypes.state.stateObject.stateImageObject.StateImageObject;
import io.github.jspinak.brobot.reports.Report;
import org.bytedeco.opencv.opencv_core.Mat;
import org.bytedeco.opencv.opencv_core.MatVector;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.IntStream;

import static org.bytedeco.opencv.global.opencv_core.hconcat;
import static org.bytedeco.opencv.global.opencv_imgproc.CV_DIST_L2;
import static org.bytedeco.opencv.global.opencv_imgproc.EMD;

@Component
public class HistComparison {

    private GetHistograms getHistograms;
    private ActionLifecycleManagement actionLifecycleManagement;

    public HistComparison(GetHistograms getHistograms, ActionLifecycleManagement actionLifecycleManagement) {
        this.getHistograms = getHistograms;
        this.actionLifecycleManagement = actionLifecycleManagement;
    }

    /**
     * Returns the Wasserstein metric (Earth Mover's Distance) as a measure of histogram similarity.
     * @param histRegs1 the first collection of histogram to compare.
     * @param histRegs2 the second collection of histogram to compare.
     * @param indexedColumn This is a column of 1,2,3... to size of the histogram, used
     *                      to construct a Mat necessary for the OpenCV EMD function.
     * @return the ChiSqr score.
     */
    public double compare(HistogramRegions histRegs1, HistogramRegions histRegs2, Mat indexedColumn) {
        double sim = 0;
        sim += getSimScore(histRegs1.getTopLeft().getHistogram(), histRegs2.getTopLeft().getHistogram(), indexedColumn);
        sim += getSimScore(histRegs1.getTopRight().getHistogram(), histRegs2.getTopRight().getHistogram(), indexedColumn);
        sim += getSimScore(histRegs1.getBottomLeft().getHistogram(), histRegs2.getBottomLeft().getHistogram(), indexedColumn);
        sim += getSimScore(histRegs1.getBottomRight().getHistogram(), histRegs2.getBottomRight().getHistogram(), indexedColumn);
        sim += getSimScore(histRegs1.getEllipse().getHistogram(), histRegs2.getEllipse().getHistogram(), indexedColumn);
        return sim;
    }

    private double getSimScore(Mat hist1, Mat hist2, Mat indexedColumn) {
        Mat h1 = addIndexedColumn(hist1, indexedColumn);
        Mat h2 = addIndexedColumn(hist2, indexedColumn);
        return EMD(h1, h2, CV_DIST_L2);
    }

    private Mat setIndexedColumn(int totalBins) {
        int[] a = IntStream.range(0, totalBins).toArray();
        return new Mat(a);
    }

    private Mat addIndexedColumn(Mat mat, Mat indexedColumn) {
        indexedColumn.convertTo(indexedColumn, mat.type());
        MatVector mv = new MatVector(indexedColumn, mat);
        Mat result = new Mat();
        hconcat(mv, result);
        return result;
    }

    /**
     * Compare the Image histogram with the histograms of the regions.
     * @param stateImageObject the image to use for histogram comparison
     * @param regions the regions in which to search
     * @param sceneHSV the HSV version of the scene
     * @param actionId the action id, used to determine the action duration
     * @return the best score per region.
     */
    public List<MatchObject> compareAll(StateImageObject stateImageObject, List<Region> regions,
                                                    Mat sceneHSV, int actionId) {
        Image image = stateImageObject.getImage();
        HistogramRegions histogramRegions = getHistograms.getHistogramsHSV(image);
        Mat indexedColumn = setIndexedColumn(getHistograms.getHueBins()); // only the hue bins are considered //imageRegionsHistograms.getTotalBins());
        List<MatchObject> matchObjects = new ArrayList<>();
        double bestScore = -1;
        for (Region reg : regions) {
            Mat maskOnScene = new Mat(sceneHSV, reg.getJavaCVRect());
            HistogramRegions sceneHistRegs = getHistograms.getHistogramFromRegion(maskOnScene);
            double score = compare(sceneHistRegs, histogramRegions, indexedColumn);
            if (bestScore == -1) bestScore = score;
            if (score < bestScore) bestScore = score;
            try {
                MatchObject matchObject = new MatchObject(reg.toMatch(), stateImageObject,
                        actionLifecycleManagement.getCurrentDuration(actionId).getSeconds());
                matchObject.setHistogram(sceneHistRegs.getCombined().getHistogram());
                matchObject.setScore(score);
                matchObjects.add(matchObject);
            } catch (Exception e) {
                Report.println("Error creating MatchObject: " + e.getMessage());
            }
        }
        return matchObjects.stream().sorted(Comparator.comparing(MatchObject::getScore)).toList();
    }

}
