package io.github.jspinak.brobot.actions.methods.sikuliWrappers.find;

import io.github.jspinak.brobot.actions.BrobotSettings;
import io.github.jspinak.brobot.actions.actionOptions.ActionOptions;
import io.github.jspinak.brobot.actions.methods.basicactions.find.color.pixelAnalysis.Scene;
import io.github.jspinak.brobot.datatypes.primitives.image.Image;
import io.github.jspinak.brobot.datatypes.primitives.image.ImagePatterns;
import io.github.jspinak.brobot.datatypes.primitives.match.Matches;
import io.github.jspinak.brobot.datatypes.primitives.region.Region;
import io.github.jspinak.brobot.datatypes.state.stateObject.stateImageObject.StateImageObject;
import io.github.jspinak.brobot.mock.Mock;
import io.github.jspinak.brobot.reports.Report;
import org.sikuli.script.Pattern;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Finds all Matches for all Patterns in the Brobot Image.
 * Used by Find.ALL and Find.BEST.
 * The Find.BEST option finds all Matches and picks the best Match from these Matches.
 */
@Component
public class FindAllPatterns implements FindPatternInterface {

    private final ImagePatterns imagePatterns;
    private final Mock mock;
    private final FindPattern findPattern;

    public FindAllPatterns(ImagePatterns imagePatterns, Mock mock, FindPattern findPattern) {
        this.imagePatterns = imagePatterns;
        this.mock = mock;
        this.findPattern = findPattern;
    }

    @Override
    public Matches find(Region region, StateImageObject stateImageObject, ActionOptions actionOptions, Scene scene) {
        if (BrobotSettings.mock && BrobotSettings.screenshots.isEmpty())
            return mock.getMatches(stateImageObject, region, actionOptions);
        List<Pattern> patterns = imagePatterns.getPatterns(stateImageObject.getImage(), actionOptions);
        Matches matches = new Matches();
        for (Pattern pattern : patterns) {
            matches.addAllResults(findPattern.findAll(region, pattern, stateImageObject, actionOptions, scene));
        }
        /*
         * Store Snapshots before adjusting the Match. This makes it easier to reuse.
         * A failed operation will be stored here without a Match.
         */
        matches.getDanglingSnapshots().addAllMatches(actionOptions, matches);
        return matches;
    }

}
