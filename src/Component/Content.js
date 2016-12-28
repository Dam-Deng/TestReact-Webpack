import * as React from "react";
class Content extends React.Component{
    render() {
        const {content}  = this.props;
        return <h1>{content}</h1>;
    }
}


export default Content;