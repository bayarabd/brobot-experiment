package io.github.jspinak.brobot.buildStateStructure.buildFromNames.findImages;


import io.github.jspinak.brobot.actions.actionOptions.ActionOptions;
import io.github.jspinak.brobot.database.primitives.match.Matches;
import io.github.jspinak.brobot.database.state.ObjectCollection;
import io.github.jspinak.brobot.database.state.stateObject.stateImageObject.StateImageObject;
import io.github.jspinak.brobot.reports.Report;
import lombok.Getter;
import org.sikuli.script.Match;

import java.util.ArrayList;
import java.util.List;

/**
 * Collects Images and Match objects from Images with an active GROUP_DEFINE Attribute.
 * If a match is found for each Image, the Region is ready to be defined. If the defined Region
 * is larger than the currently defined Region, or no SearchRegion has been defined yet, the
 * SearchRegions for all Images in the ImageGroup are set to the newly defined Region.
 */
@Getter
public class ImageGroup {

    private List<StateImageObject> images = new ArrayList<>(); // Images in the Group
    private List<Match> matches = new ArrayList<>(); // for defining the Region (best match / image)
    private ActionOptions actionOptions = new ActionOptions.Builder()
            .setAction(ActionOptions.Action.DEFINE)
            .setDefineAs(ActionOptions.DefineAs.INCLUDING_MATCHES)
            .build();

    public void addImage(StateImageObject image) {
        images.add(image);
    }

    public void addMatch(Match match) {
        matches.add(match);
    }

    public ObjectCollection getObjectCollection() {
        return new ObjectCollection.Builder()
                .withMatches(matches.toArray(new Match[0]))
                .build();
    }

    public void setSearchRegions(Matches matches) {
        images.forEach(img -> img.setSearchRegion(matches.getDefinedRegion()));
    }

    public boolean isEmpty() {
        return images.isEmpty();
    }

    public boolean allImagesFound() {
        return !isEmpty() && images.size() == matches.size();
    }

    public void print() {
        if (images.isEmpty()) return;
        Report.print("Group Define for State."+images.get(0).getAttributes().getStateName() +
                " images: ");
        images.forEach(img -> Report.print(img.getAttributes().getImageName()+" "));
        Report.println();
    }
}