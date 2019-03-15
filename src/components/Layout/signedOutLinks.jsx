import React from 'react';
import {NavLink } from 'react-router-dom';
const SignedOutLinks = ()=>{
    return(
        <div className="right">
            <ul>
            <li><NavLink to='/'>Sign In</NavLink></li>
            <li><NavLink to='/'>Sign Up</NavLink></li>
            </ul>
        </div>
        
    )
}
export default SignedOutLinks;