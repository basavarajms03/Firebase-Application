export const createProject = (project) => {
    return (dispatch,getState) => {
        //make an async call with database
        dispatch({type:'CREATE_PROJECT',project})
    }
};