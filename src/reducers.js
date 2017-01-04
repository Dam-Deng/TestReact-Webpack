import ActionTypes from "./Actions/ActionType";
import * as Immutable from "immutable";
const reducers = {};

reducers.contents = (state = Immutable.Set.of('123'), action) => {
    switch (action.type){
        case ActionTypes.INPUT_SUBMIT:
            state = state.add(action.content);
    }
    return state.sort((a, b) => a > b);
};

export default reducers;