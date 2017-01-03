import ActionTypes from "./Actions/ActionType";
import * as Immutable from "immutable";
const reducers = {};

reducers.contents = (state = Immutable.Set.of('123'), action) => {
    switch (action.type){
        case ActionTypes.INPUT_SUBMIT:
            return state.add(action.content);
        default:
            return state;
    }
};

export default reducers;