import * as React from "react";
import InputField from "./InputField";
import ShowContent from "./ShowContent";
import {connect} from "react-redux";
import TodoActions from "../Actions/TodoActions";
import {Link, IndexLink} from "react-router";

class TodoApp extends React.Component {
    render() {
        const {contents} = this.props;
        return <div className="main ui container">
            {this.props.children}
            <IndexLink to="/" activeStyle={{color: 'red'}}>To Home</IndexLink>
            <Link to="/about/test" activeClassName='active' activeStyle={{color: 'red'}} >To About Test</Link>
            <InputField onInputSubmit={this.props.inputSubmit}/>
            <ShowContent
                contents={contents}/>
        </div>;
    }
}

export default TodoApp = connect(
    (state) => ({contents: state.contents}),
    {
        inputSubmit: TodoActions.inputSubmit
    }
)(TodoApp);