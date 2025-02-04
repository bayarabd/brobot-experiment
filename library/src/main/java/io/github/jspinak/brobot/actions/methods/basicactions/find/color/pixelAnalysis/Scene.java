package io.github.jspinak.brobot.actions.methods.basicactions.find.color.pixelAnalysis;

import io.github.jspinak.brobot.datatypes.primitives.region.Region;
import lombok.Getter;
import org.bytedeco.opencv.opencv_core.Mat;

import static org.bytedeco.opencv.global.opencv_imgproc.COLOR_BGR2HSV;
import static org.bytedeco.opencv.global.opencv_imgproc.cvtColor;

@Getter
public class Scene {

    private String name = "";
    private String filename = "";
    private Mat bgr;
    private Mat hsv;

    public Scene(String filename, Mat bgr, Mat hsv) {
        this.filename = filename;
        this.name = filename.substring(0, filename.lastIndexOf("."));
        this.bgr = bgr;
        this.hsv = hsv;
    }

    public Scene(String filename, Mat bgr) {
        this.filename = filename;
        this.name = filename.substring(0, filename.lastIndexOf("."));
        this.bgr = bgr;
        this.hsv = new Mat();
        if (!bgr.empty()) cvtColor(bgr, hsv, COLOR_BGR2HSV);
    }

    public Scene() {
        int height = new Region().h;
        int width = new Region().w;
        this.name = "random";
        this.bgr = new Mat(height, width, 16);
        this.hsv = new Mat(height, width, 16);
    }

}
