package io.github.jspinak.brobot.datatypes.state.stateObject.otherStateObjects;

import io.github.jspinak.brobot.datatypes.primitives.region.Region;
import io.github.jspinak.brobot.primatives.enums.StateEnum;
import lombok.Data;

import static io.github.jspinak.brobot.datatypes.state.NullState.Name.NULL;

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

        // String as param because it shouldn't be created without a string
        public StateString build(String string) {
            StateString stateString = new StateString(string);
            stateString.name = name;
            stateString.searchRegion = searchRegion;
            stateString.ownerStateName = ownerStateName;
            return stateString;
        }

    }

}
