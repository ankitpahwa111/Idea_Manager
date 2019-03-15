import React from 'react';
import {NavLink } from 'react-router-dom';
const SignedInLinks = ()=>{
    console.log('here')
    return(
        <div>
            <ul className='right'>
            <li><NavLink to='/create'>New Post</NavLink></li>
            <li><NavLink to='/'>Sign Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-3'>AP</NavLink></li>
            
            </ul>
        </div>
        
    )
}
export default SignedInLinks;