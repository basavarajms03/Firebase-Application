import React from 'react';

export const ProjectDetails = (props) => {
    const id=props.match.params.id;
    return(
        <div className="container p-3">
            <div className="">
                <h3>Project Title: {id}</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    )
}