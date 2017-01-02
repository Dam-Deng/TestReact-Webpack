import ActionTypes from "./Actions/ActionType";
const reducers = {};

reducers.contents = (state = ['show'], action) => {
    switch (action.type){
        case ActionTypes.INPUT_SUBMIT:
            return state.push(action.content);
        default:
            return state;
    }
};

export default reducers;