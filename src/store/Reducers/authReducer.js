const initState={
    authError:null
}
const authReducer = (state=initState, action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS' :
            console.log('logged In')
            return {
                ...state ,
                authError:null
            }
        case 'LOGIN_FAILED' : 
            console.log('Login Failed')
            return {
                ...state,
                authError: 'Login Failed'
            }
        default : return state
    }
}
export default authReducer;
