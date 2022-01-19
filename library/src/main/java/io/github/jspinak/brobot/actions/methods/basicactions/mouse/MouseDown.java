package io.github.jspinak.brobot.actions.methods.basicactions.mouse;

import io.github.jspinak.brobot.actions.actionExecution.ActionInterface;
import io.github.jspinak.brobot.actions.actionOptions.ActionOptions;
import io.github.jspinak.brobot.actions.methods.sikuliWrappers.mouse.MouseDownWrapper;
import io.github.jspinak.brobot.database.primitives.match.Matches;
import io.github.jspinak.brobot.database.state.ObjectCollection;
import org.springframework.stereotype.Component;

/**
 * Presses and holds a mouse button.
 */
@Component
public class MouseDown implements ActionInterface {

    private MouseDownWrapper mouseDownWrapper;

    public MouseDown(MouseDownWrapper mouseDownWrapper) {
        this.mouseDownWrapper = mouseDownWrapper;
    }

    public Matches perform(ActionOptions actionOptions, ObjectCollection... objectCollections) {
        mouseDownWrapper.press(
                actionOptions.getPauseBeforeMouseDown(),
                actionOptions.getPauseAfterMouseDown(),
                actionOptions.getClickType());
        return new Matches();
    }

}
