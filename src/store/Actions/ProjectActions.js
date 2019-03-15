const CreateProject = (project) => {
    return (dispatch, getState) => {
        dispatch({ type: 'Create_Project', project })
    }
}
export default CreateProject;