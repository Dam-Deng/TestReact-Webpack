import * as React from "react";
class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let {value} = this.refs.contentInput;
        let {onInputSubmit} = this.props;

        onInputSubmit(value);
        this.refs.contentInput.value = '';
    }

    render() {
        return <form onSubmit={this.onSubmit} className="ui form">
            <div className="field">
                <label>content</label>
                <input type="text" ref="contentInput"/>
            </div>
            <button className="ui button" id="submitBtn" onClick={this.onSubmit}>确定</button>
        </form>
    }
}

export default InputField;
