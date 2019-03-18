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
        case 'SIGNUP_SUCCESS' : 
            console.log('signup success')
            return {
                ...state,
                authError:null
            }
        case 'SIGNUP_ERROR' :
            console.log('signup error')
            return {
                ...state,
                authError:action.err.message
            }
        default : return state
    }
}
export default authReducer;
