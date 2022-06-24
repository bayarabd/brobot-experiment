package io.github.jspinak.brobot.actions.methods.basicactions.find;

import io.github.jspinak.brobot.actions.actionOptions.ActionOptions;
import io.github.jspinak.brobot.datatypes.primitives.region.Region;
import io.github.jspinak.brobot.datatypes.primitives.regionImagePairs.RegionImagePair;
import io.github.jspinak.brobot.datatypes.primitives.regionImagePairs.RegionImagePairs;
import io.github.jspinak.brobot.datatypes.state.ObjectCollection;
import io.github.jspinak.brobot.datatypes.state.stateObject.stateImageObject.StateImageObject;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class SelectRegions {

    /**
     * Select regions by the following methods, in this order:
     * 1. If the ActionOptions has SearchRegions defined, use those Regions.
     * 2. If the StateImageObject is using its RegionImagePairs, and the specific Image's Region
     *    is defined (meaning it's been found already), then use that Region. Otherwise, in this order:
     * 3. Use the SearchRegions on the StateImageObject.
     */
    public List<Region> getRegions(ActionOptions actionOptions, StateImageObject stateImage,
                                    Region... ripRegion) {
        List<Region> regions = new ArrayList<>();
        if (actionOptions.getSearchRegions().defined())
            return actionOptions.getSearchRegions().getAllRegions();
        if (ripRegion.length > 0 && ripRegion[0].defined()) {
            regions.add(ripRegion[0]);
            return regions; // This is an RIP and it's defined.
        }
        return stateImage.getAllSearchRegions();
    }

    // this can replace passing the RIP regions as a parameter
    private List<Region> getRegionsOnImage(StateImageObject image) {
        List<Region> regions = new ArrayList<>();
        if (image.isFixed()) { //it's an RIP
            RegionImagePairs rip = image.getRegionImagePairs();
            if (rip.defined()) {
                for (RegionImagePair pair : rip.getPairs()) {
                    if (pair.defined()) regions.add(pair.getRegion());
                }
                return regions;
            }
        }
        return image.getAllSearchRegions();
    }

    public List<Region> getRegionsForAllImages(ActionOptions actionOptions, ObjectCollection... objectCollections) {
        List<Region> regions = new ArrayList<>();
        if (actionOptions.getSearchRegions().defined())
            return actionOptions.getSearchRegions().getAllRegions();
        for (ObjectCollection objColl : objectCollections) {
            for (StateImageObject stateImageObject : objColl.getStateImages()) {
                regions.addAll(getRegionsOnImage(stateImageObject));
            }
        }
        return regions;
    }
}
