package io.github.jspinak.brobot.actions.methods.basicactions.textOps;

import io.github.jspinak.brobot.actions.actionExecution.ActionInterface;
import io.github.jspinak.brobot.actions.actionOptions.ActionOptions;
import io.github.jspinak.brobot.actions.methods.sikuliWrappers.Wait;
import io.github.jspinak.brobot.actions.methods.sikuliWrappers.text.TypeTextWrapper;
import io.github.jspinak.brobot.database.primitives.match.Matches;
import io.github.jspinak.brobot.database.state.ObjectCollection;
import io.github.jspinak.brobot.database.state.stateObject.otherStateObjects.StateString;
import org.sikuli.basics.Settings;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Types text to the window in focus.
 */
@Component
public class TypeText implements ActionInterface {

    private TypeTextWrapper typeTextWrapper;
    private Wait wait;

    public TypeText(TypeTextWrapper typeTextWrapper, Wait wait) {
        this.typeTextWrapper = typeTextWrapper;
        this.wait = wait;
    }

    public Matches perform(ActionOptions actionOptions, ObjectCollection... objectCollections) {
        double defaultTypeDelay = Settings.TypeDelay;
        Settings.TypeDelay = actionOptions.getTypeDelay();
        List<StateString> strings = objectCollections[0].getStateStrings();
        for (StateString str : strings) {
            typeTextWrapper.type(str, actionOptions);
            if (strings.indexOf(str) < strings.size() - 1)
                wait.wait(actionOptions.getPauseBetweenIndividualActions());
        }
        Settings.TypeDelay = defaultTypeDelay;
        return new Matches();
    }

}
