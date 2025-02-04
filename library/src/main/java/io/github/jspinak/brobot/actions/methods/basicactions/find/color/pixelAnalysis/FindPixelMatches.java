package io.github.jspinak.brobot.actions.methods.basicactions.find.color.pixelAnalysis;

import io.github.jspinak.brobot.actions.actionOptions.ActionOptions;
import io.github.jspinak.brobot.actions.methods.MatchOps;
import io.github.jspinak.brobot.actions.methods.basicactions.find.SelectRegions;
import io.github.jspinak.brobot.actions.methods.basicactions.find.color.profiles.ColorSchema;
import io.github.jspinak.brobot.actions.methods.basicactions.find.contours.Contours;
import io.github.jspinak.brobot.datatypes.primitives.match.Matches;
import io.github.jspinak.brobot.datatypes.primitives.region.Region;
import io.github.jspinak.brobot.imageUtils.MatOps;
import io.github.jspinak.brobot.imageUtils.MatVisualize;
import io.github.jspinak.brobot.imageUtils.ShowScoring;
import io.github.jspinak.brobot.reports.Report;
import org.bytedeco.opencv.opencv_core.Mat;
import org.bytedeco.opencv.opencv_core.Rect;
import org.sikuli.script.Match;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

import static io.github.jspinak.brobot.actions.methods.basicactions.find.color.pixelAnalysis.SceneAnalysis.Analysis.BGR_FROM_INDICES_2D;
import static io.github.jspinak.brobot.actions.methods.basicactions.find.color.profiles.ColorCluster.ColorSchemaName.BGR;
import static io.github.jspinak.brobot.actions.methods.basicactions.find.color.profiles.ColorCluster.ColorSchemaName.HSV;
import static org.bytedeco.opencv.global.opencv_imgproc.boundingRect;

@Component
public class FindPixelMatches {

    private SelectRegions selectRegions;
    private MatchOps matchOps;
    private ShowScoring showScoring;

    public FindPixelMatches(SelectRegions selectRegions, MatchOps matchOps, ShowScoring showScoring) {
        this.selectRegions = selectRegions;
        this.matchOps = matchOps;
        this.showScoring = showScoring;
    }

    /**
     * Returns matches from the SCORE_DIST_BELOW_THRESHHOLD matrix, search regions, and action options.
     *
     * @param sceneAnalysis contains the classification matrix and the scene
     * @param actionOptions the action configuration
     * @return the matches
     */
    public Matches find(SceneAnalysis sceneAnalysis, ActionOptions actionOptions) {
        List<Region> searchRegions = new ArrayList<>();
        sceneAnalysis.getStateImageObjects().forEach(sio -> searchRegions.addAll(selectRegions.getRegions(actionOptions, sio)));
        Contours contours = new Contours.Builder()
                .setBgrFromClassification2d(sceneAnalysis.getAnalysis(BGR, BGR_FROM_INDICES_2D))
                .setSearchRegions(searchRegions)
                .setMinArea(actionOptions.getMinArea())
                .setMaxArea(actionOptions.getMaxArea())
                .build();
        List<Match> matchList = contours.getMatches();
        if (contours.getContours().size() > 0) showScoring(contours, sceneAnalysis);
        Matches matches = new Matches();
        sceneAnalysis.setContours(contours);
        matchOps.addMatchListToMatches(matchList, matches, sceneAnalysis.getStateImageObjects().get(0), actionOptions); //the matches will not have the correct StateImageObject if there is more than one
        return matches;
    }

    private void showScoring(Contours contours, SceneAnalysis sceneAnalysis) {
        Mat contour = contours.getMatchAsMatInScene(0, sceneAnalysis.getAnalysis(HSV, SceneAnalysis.Analysis.SCENE));
        Mat firstPixel = new Mat(contour, new Rect(0,0,1,1));
        ColorSchema colorSchema = sceneAnalysis.getStateImageObjects().get(0).getColorCluster().getSchema(HSV);
        showScoring.showPixelAndMean(firstPixel, colorSchema);
    }


}
