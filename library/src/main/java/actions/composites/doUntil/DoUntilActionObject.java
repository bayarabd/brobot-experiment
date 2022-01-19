package actions.composites.doUntil;

import com.brobot.multimodule.actions.actionOptions.ActionOptions;
import com.brobot.multimodule.database.primitives.match.Matches;
import com.brobot.multimodule.database.state.ObjectCollection;
import lombok.Getter;

/**
 * The DoUntilActionObject contains both ActionOptions and ObjectCollections for both
 * 'do' and 'until' Actions. Additionally, it holds any options specific to the DoUntil operation.
 * Instances should be created with the builder.
 */
@Getter
public class DoUntilActionObject {

    private ObjectCollection actionObjectCollection;
    private ObjectCollection conditionObjectCollection;
    private ActionOptions doAction;
    private ActionOptions untilAction;
    private int maxActions = 3;

    //results
    private int totalSuccessfulActions = 0;
    private Matches actionMatches = new Matches();
    private Matches conditionMatches = new Matches();
    private boolean success = false;

    public void resetTimesActedOn() {
        actionObjectCollection.resetTimesActedOn();
    }

    public static class Builder {
        private ObjectCollection actionObjectCollection;
        private ObjectCollection conditionObjectCollection;
        private ActionOptions doAction;
        private ActionOptions untilAction;
        private int maxActions = 3;

        public Builder() {
        }

        public Builder setActionObjectCollection(ObjectCollection objectCollection) {
            this.actionObjectCollection = objectCollection;
            return this;
        }

        public Builder setConditionObjectCollection(ObjectCollection objectCollection) {
            this.conditionObjectCollection = objectCollection;
            return this;
        }

        public Builder setDoAction(ActionOptions actionOptions) {
            this.doAction = actionOptions;
            return this;
        }

        public Builder setUntilAction(ActionOptions actionOptions) {
            this.untilAction = actionOptions;
            return this;
        }

        public Builder setMaxActions(int maxActions) {
            this.maxActions = maxActions;
            return this;
        }

        public DoUntilActionObject build() {
            DoUntilActionObject doUntilActionObject = new DoUntilActionObject();
            doUntilActionObject.actionObjectCollection = actionObjectCollection;
            doUntilActionObject.conditionObjectCollection = conditionObjectCollection;
            doUntilActionObject.doAction = doAction;
            doUntilActionObject.untilAction = untilAction;
            doUntilActionObject.maxActions = maxActions;
            return doUntilActionObject;
        }
    }
}
