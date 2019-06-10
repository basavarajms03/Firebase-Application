import React, { Component } from 'react';
import { Notifications } from "./notifications";
import { ProjectList } from "../projects/projectList";
import {connect} from "react-redux";


class Dashboard extends Component{
    render(){
        const {projects} = this.props;
        return(
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col-md-6">
                        <Notifications/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        projects:state.project.projects
    }

};

export default connect(mapStateToProps)(Dashboard);