import ActionTypes from "./ActionType";
const TodoActions = {
    inputSubmit(content) {
        return {
            type: ActionTypes.INPUT_SUBMIT,
            content
        }
    }
};

export default TodoActions;