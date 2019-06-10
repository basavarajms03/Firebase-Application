import React from 'react';
import ProjectHistory from './projectSummary';

export const ProjectList = ({projects}) => {
    return(
        <div className="container">
            {projects && projects.map(project => {
                return(
                    <ProjectHistory project={project} key={project.id}/>
                )
            })}
        </div>
    );
}