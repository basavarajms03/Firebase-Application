import React from 'react';

const ProjectHistory = ({project}) => {
    return(
        <div className="alert alert-info">
            <p>{project.title}</p>
            <p>{project.content}</p>
            <p>3rd September, 2019</p>
        </div>
    )
}

export default ProjectHistory;