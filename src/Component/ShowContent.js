import * as React from "react";
class ShowContent extends React.Component {
    render() {
        const {contents}  = this.props;
        let id = 1;
        return <div className="ui link list">
            { contents.map((content) => <a key={id++} className="item">{content}</a>)}
        </div>
    }
}


export default ShowContent;