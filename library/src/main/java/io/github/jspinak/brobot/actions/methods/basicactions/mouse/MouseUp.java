package io.github.jspinak.brobot.actions.methods.basicactions.mouse;

import io.github.jspinak.brobot.actions.actionExecution.ActionInterface;
import io.github.jspinak.brobot.actions.actionOptions.ActionOptions;
import io.github.jspinak.brobot.actions.methods.sikuliWrappers.mouse.MouseUpWrapper;
import io.github.jspinak.brobot.database.primitives.match.Matches;
import io.github.jspinak.brobot.database.state.ObjectCollection;
import org.springframework.stereotype.Component;

/**
 * Releases a mouse button.
 */
@Component
public class MouseUp implements ActionInterface {

    private MouseUpWrapper mouseUpWrapper;

    public MouseUp(MouseUpWrapper mouseUpWrapper) {
        this.mouseUpWrapper = mouseUpWrapper;
    }

    public Matches perform(ActionOptions actionOptions, ObjectCollection... objectCollections) {
        mouseUpWrapper.press(
                actionOptions.getPauseBeforeMouseUp(),
                actionOptions.getPauseAfterMouseUp(),
                actionOptions.getClickType());
        return new Matches();
    }

}