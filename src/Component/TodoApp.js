import * as React from "react";
import InputField from "./InputField";
import Content from "./Content";

class TodoApp extends React.Component {
    render() {
        const {content} = this.props;
        return <div>
            <InputField />
            <Content />
        </div>;
    }
}

export default TodoApp;