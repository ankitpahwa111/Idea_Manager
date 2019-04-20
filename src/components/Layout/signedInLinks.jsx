import React from 'react';
import {NavLink } from 'react-router-dom';
import {signOut} from '../../store/Actions/authActions';
import {connect} from 'react-redux'
const SignedInLinks = (props)=>{
    //console.log('here')
    const profile = props.profile;
    return(
        <div>
            <ul className='right'>
            <li><NavLink to='/create'>New Post</NavLink></li>
            <li><a onClick={props.signOut}>Sign Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-3'>{profile.initials}</NavLink></li>
            
            </ul>
        </div>
        
    )
}
const mapDispatchToProps=(dispatch)=>{
    return {
        signOut : ()=>dispatch(signOut())
    }
}
const mapStateToProps=(state)=>{
    return{
        profile : state.firebase.profile
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(SignedInLinks)