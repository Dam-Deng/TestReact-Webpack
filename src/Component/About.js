import * as React from "react";
import {withRouter} from "react-router";


class AboutClass extends React.Component {
    componentDidMount(){
        this.props.router.setRouteLeaveHook(
            this.props.route,
            this.routeWillLeave
        )
    }
    routeWillLeave(nextLocation){
        return "是否要离开?";
    }
    render() {
        return <div className="main ui container">
            About Us id={this.props.params.id}
            <br/>
            query={this.props.location.query.name}
        </div>;
    }
}

const About = withRouter(AboutClass);

export default About