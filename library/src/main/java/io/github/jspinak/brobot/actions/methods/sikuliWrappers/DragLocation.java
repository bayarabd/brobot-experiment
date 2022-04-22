package io.github.jspinak.brobot.actions.methods.sikuliWrappers;

import io.github.jspinak.brobot.actions.BrobotSettings;
import io.github.jspinak.brobot.actions.actionOptions.ActionOptions;
import io.github.jspinak.brobot.database.primitives.location.Location;
import io.github.jspinak.brobot.database.primitives.region.Region;
import io.github.jspinak.brobot.illustratedHistory.IllustrateScreenshot;
import io.github.jspinak.brobot.mock.Mock;
import io.github.jspinak.brobot.reports.Report;
import org.sikuli.basics.Settings;
import org.sikuli.script.FindFailed;
import org.springframework.stereotype.Component;

/**
 * Wrapper class for Drag, handles real and mock drags.
 * Drags from one Location to another Location.
 *
 * Typical settings:
 * 0.3 PauseBeforeMouseDown
 * 0.3 PauseAfterMouseDown
 * 0.5 MoveMouseDelay
 * 0.4 PauseBeforeMouseUp
 * 0.0 PauseAfterMouseUp
 */
@Component
public class DragLocation {
    private Mock mock;
    private Wait wait;
    private IllustrateScreenshot illustrateScreenshot;

    public DragLocation(Mock mock, Wait wait, IllustrateScreenshot illustrateScreenshot) {
        this.mock = mock;
        this.wait = wait;
        this.illustrateScreenshot = illustrateScreenshot;
    }

    private boolean drag(Location from, Location to) {
        try {
            new Region().dragDrop(from.getSikuliLocation(), to.getSikuliLocation());
        } catch (FindFailed findFailed) {
            if (Report.minReportingLevel(Report.OutputLevel.HIGH))
                System.out.print("|drag failed| ");
            return false;
        }
        return true;
    }

    public boolean drag(Location from, Location to, ActionOptions actionOptions) {
        Report.format(Report.OutputLevel.HIGH, "drag %d.%d to %d.%d ",
                from.getX(), from.getY(), to.getX(), to.getY());
        if (BrobotSettings.mock) return mock.drag();
        Settings.DelayBeforeMouseDown = actionOptions.getPauseBeforeMouseDown();
        Settings.DelayBeforeDrag = actionOptions.getPauseAfterMouseDown();
        Settings.MoveMouseDelay = actionOptions.getMoveMouseDelay();
        Settings.DelayBeforeDrop = actionOptions.getPauseBeforeMouseUp();
        if (!drag(from, to)) return false;
        illustrateScreenshot.drawDrag(from, to);
        wait.wait(actionOptions.getPauseAfterMouseUp());
        return true;
    }
}
