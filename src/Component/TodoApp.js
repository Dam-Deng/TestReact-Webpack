import * as React from "react";
import InputField from "./InputField";
import ShowContent from "./ShowContent";
import {connect} from "react-redux";
import TodoActions from "../Actions/TodoActions";

class TodoApp extends React.Component {
    render() {
        const {contents} = this.props;
        return <div className="todoApp">
            <InputField onInputSubmit={this.props.inputSubmit}/>
            <ShowContent
                contents={contents} />
        </div>;
    }
}

export default TodoApp = connect(
    (state) => ({ contents: state.contents }),
    {
        inputSubmit: TodoActions.inputSubmit
    }
)(TodoApp);