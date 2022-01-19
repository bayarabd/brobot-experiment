package database.state.stateObject.otherStateObjects;

import com.brobot.multimodule.database.primitives.region.Region;
import com.brobot.multimodule.primatives.enums.StateEnum;
import lombok.Data;

import static com.brobot.multimodule.database.state.NullState.Enum.NULL;

/**
 * A State String belongs to a State and usually has a String that
 * has a special meaning for the owner State. For example, typing this
 * String may be part of a Transition for this State but not for other States.
 */
@Data
public class StateString {

    private String name;
    private Region searchRegion; // sometimes we need to hover over or click on a region before typing the string
    private StateEnum ownerStateName;
    private int timesActedOn = 0;

    private String string;

    private StateString(String string) {
        this.string = string;
    }

    public boolean defined() { return string != null && string.length() > 0; }

    public static class InNullState {

        public StateString withString(String string) {
            StateString stateString = new StateString(string);
            stateString.ownerStateName = NULL;
            return stateString;
        }
    }

    public void addTimesActedOn() {
        timesActedOn++;
    }

    public static class Builder {
        private String name;
        private Region searchRegion;
        private StateEnum ownerStateName;
        private String string;

        public Builder called(String name) {
            this.name = name;
            return this;
        }

        public Builder withSearchRegion(Region searchRegion) {
            this.searchRegion = searchRegion;
            return this;
        }

        public Builder inState(StateEnum stateName) {
            this.ownerStateName = stateName;
            return this;
        }

        public StateString build(String string) {
            StateString stateString = new StateString(string);
            stateString.name = name;
            stateString.searchRegion = searchRegion;
            stateString.ownerStateName = ownerStateName;
            return stateString;
        }

    }

}
