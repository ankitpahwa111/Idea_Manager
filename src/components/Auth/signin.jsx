import React, { Component } from 'react'
import {connect} from 'react-redux';
import {signIn} from '../../store/Actions/authActions';
import {Redirect} from 'react-router-dom'
class Signin extends Component {
    state = {
        email: '',
        password: ''
    };
    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        // y
        this.props.signIn(this.state)

        // this.props.history.push('/')
        // if(this.props.authError===null)
        // this.props.history.push('/')
    }
    render() {
        const {authError,auth} = this.props;
        
        if(auth.uid){
            return <Redirect to='/'></Redirect>
        }
        
        return (
            <div className="container">
                <form onSubmit={this.handleOnSubmit} className="white">
                    <h5 className="dark-grey text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleOnChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleOnChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn z-depth-0 pink darken-1">Login</button>
                    </div>
                    <div className="center red-text">{authError}</div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        signIn : (credentials) => dispatch(signIn(credentials))
    }
}
const mapStateToProps=(state)=>{
    return {
        authError : state.auth.authError,
        auth : state.firebase.auth
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Signin)
