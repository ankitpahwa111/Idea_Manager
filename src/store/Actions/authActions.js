export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_FAILED', err })
        })
    }
}
export const signOut=()=>{
    return (dispatch,getState , {getFirebase})=>{
        const firebase = getFirebase();
        console.log('logged out')
        firebase.auth().signOut().then(
            
            ()=> dispatch({type:'LOGOUT_SUCCESS'})
        )
    }
}
export const signUp =(user)=>{
    return (dispatch , getState , {getFirebase,getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            user.email , user.password
        ).then((res)=>{
            return firestore.collection('users').doc(res.user.uid).set({
                firstName : user.firstName,
                lastName : user.lastName,
                initials : user.firstName[0] + user.lastName[0]
            })
        }).then(()=>{
            return dispatch({type:'SIGNUP_SUCCESS', })
        }).catch((err)=>{
            return dispatch({type:'SIGNUP_ERROR' , err})
        })
    }
}
export default {signIn , signOut, signUp}