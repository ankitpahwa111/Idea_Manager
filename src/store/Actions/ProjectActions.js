const CreateProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Ankit',
            authorLastName: 'Pahwa',
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