import React from 'react';
import {NavLink } from 'react-router-dom';
import {signOut} from '../../store/Actions/authActions';
import {connect} from 'react-redux'
const SignedInLinks = (props)=>{
    console.log('here')
    return(
        <div>
            <ul className='right'>
            <li><NavLink to='/create'>New Post</NavLink></li>
            <li><a onClick={props.signOut}>Sign Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-3'>AP</NavLink></li>
            
            </ul>
        </div>
        
    )
}
const mapDispatchToProps=(dispatch)=>{
    return {
        signOut : ()=>dispatch(signOut())
    }
}
export default connect(null , mapDispatchToProps)(SignedInLinks)