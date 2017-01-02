import * as React from "react";
class ShowContent extends React.Component {
    render() {
        const {contents}  = this.props;
        let id = 1;
        return <div>
            { contents.map((content) => <h1 key={id++} >{content}</h1>)}
        </div>
    }
}


export default ShowContent;