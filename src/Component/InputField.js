import * as React from "react";
class InputField extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){

    }
    render() {
        return <div>
            <input type="text" id="contentInput"/>
            <button id="submitBtn" onClick={this.onSubmit}>确定</button>
        </div>
    }
}

export default InputField;
