package io.github.jspinak.brobot.mock;

import io.github.jspinak.brobot.actions.actionOptions.ActionOptions;
import io.github.jspinak.brobot.actions.methods.time.TimeWrapper;
import io.github.jspinak.brobot.database.primitives.location.Location;
import io.github.jspinak.brobot.database.primitives.match.Matches;
import io.github.jspinak.brobot.database.primitives.region.Region;
import io.github.jspinak.brobot.database.state.state.State;
import io.github.jspinak.brobot.database.state.stateObject.stateImageObject.StateImageObject;
import io.github.jspinak.brobot.services.StateService;
import org.springframework.stereotype.Component;

import java.util.Optional;
import java.util.Random;

import static io.github.jspinak.brobot.actions.BrobotSettings.mockTimeDrag;

/**
 * The Action methods should be unaware of the mock process, which should occur only
 * at the interface between Brobot and Sikuli, where the Wrapper classes live. They decide whether the
 * Action will be mocked or executed, and call methods in this class to provide mocked
 * Matches and mocked passage of time.
 */
@Component
public class Mock {

    private StateService stateService;
    private MockFind mockFind;
    private TimeWrapper timeWrapper;

    public Mock(StateService stateService, MockFind mockFind, TimeWrapper timeWrapper) {
        this.stateService = stateService;
        this.mockFind = mockFind;
        this.timeWrapper = timeWrapper;
    }

    public Matches getMatches(StateImageObject stateImageObject, Region searchRegion,
                              ActionOptions actionOptions) {
        timeWrapper.wait(actionOptions.getFind());
        timeWrapper.printNow();
        if (!stateExists(stateImageObject)) return new Matches(); // assuming no shared state images
        return mockFind.getMatches(stateImageObject, searchRegion, actionOptions);
    }

    private boolean stateExists(StateImageObject stateImageObject) {
        Optional<State> state = stateService.findByName(stateImageObject.getOwnerStateName());
        return state.filter(value -> value.getProbabilityExists() > new Random().nextInt(100)).isPresent();
    }

    /**
     * Drag succeeds when the images are found, but it still takes time to do the drag.
     */
    public boolean drag() {
        timeWrapper.wait(mockTimeDrag);
        return true;
    }

    public Region getFocusedWindow() {
        return new Region();
    }
}
