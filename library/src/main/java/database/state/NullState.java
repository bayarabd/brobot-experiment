package database.state;

import com.brobot.multimodule.database.state.state.State;
import com.brobot.multimodule.primatives.enums.StateEnum;
import com.brobot.multimodule.services.StateService;
import lombok.Getter;
import org.springframework.stereotype.Component;

/**
 * NullState is used as a generic State for passing simple objects
 * (non State objects) to Actions. Simple objects are usually temporary
 * objects that are not associated with any State. These objects can still
 * be acted on by Actions, but no State will become active when they are found.
 */
@Component
@Getter
public class NullState {

    // convert simple objects to state objects

    public enum Enum implements StateEnum {
        NULL
    }

    private State state = new State.Builder(Enum.NULL)
            .build();

    public NullState(StateService stateService) {
        stateService.save(state);
    }

}
