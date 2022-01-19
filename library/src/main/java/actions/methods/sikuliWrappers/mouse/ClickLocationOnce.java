package actions.methods.sikuliWrappers.mouse;

import com.brobot.multimodule.actions.BrobotSettings;
import com.brobot.multimodule.actions.actionOptions.ActionOptions;
import com.brobot.multimodule.database.primitives.location.Location;
import com.brobot.multimodule.reports.Report;
import org.sikuli.script.Mouse;
import org.springframework.stereotype.Component;

/**
 * Wrapper class for Click, handles real and mock clicks.
 * Performs a full click once, with pauses, mouse down, and mouse up.
 */
@Component
public class ClickLocationOnce {

    private MouseDownWrapper mouseDownWrapper;
    private MouseUpWrapper mouseUpWrapper;

    public ClickLocationOnce(MouseDownWrapper mouseDownWrapper,
                             MouseUpWrapper mouseUpWrapper) {
        this.mouseDownWrapper = mouseDownWrapper;
        this.mouseUpWrapper = mouseUpWrapper;
    }

    public boolean click(Location location, ActionOptions actionOptions) {
        if (BrobotSettings.mock) {
            Report.print("<click>");
            if (actionOptions.getClickType() != ClickType.Type.LEFT) Report.print(actionOptions.getClickType().name());
            Report.print(" ");
            return true;
        }
        return doClick(location, actionOptions);
    }

    private boolean doClick(Location location, ActionOptions actionOptions) {
        if (Mouse.move(location.getSikuliLocation()) == 0) return false;
        double pauseBeforeDown = actionOptions.getPauseBeforeMouseDown();
        double pauseAfterDown = actionOptions.getPauseAfterMouseDown();
        mouseDownWrapper.press(pauseBeforeDown, pauseAfterDown, actionOptions.getClickType());
        double pauseBeforeUp = actionOptions.getPauseBeforeMouseUp();
        double pauseAfterUp = actionOptions.getPauseAfterMouseUp();
        mouseUpWrapper.press(pauseBeforeUp, pauseAfterUp, actionOptions.getClickType());
        return true;
    }

}
