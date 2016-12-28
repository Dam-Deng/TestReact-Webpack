import * as React from "react";
class InputField extends React.Component {
    constructor(props){
        super(props);
        this.onKeyDown = this.onKeyDown.bind(this);
    }
    onKeyDown(e){

    }
    render() {
        return <input
            onKeyDown={this.onKeyDown}
        />
    }
}

export default InputField;
