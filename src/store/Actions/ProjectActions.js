const CreateProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const authorFirstName = getState().firebase.profile.firstName;
        const authorLastName =  getState().firebase.profile.lastName;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: authorFirstName,
            authorLastName: authorLastName,
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'Create_Project', project })
        }
        ).catch((err) => {
            dispatch({ type: 'Create_Project_Error', err })
        })

    }
}
export default CreateProject;