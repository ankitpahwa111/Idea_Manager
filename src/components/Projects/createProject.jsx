import React, { Component } from 'react'
import { connect } from 'react-redux';
import CreateProject from '../../store/Actions/ProjectActions';

class Create extends Component {
    state = {
        title: '',
        subject: '',
        content: ''
    };
    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        //console.log(this.props)
        this.props.createProject(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleOnSubmit} className="white">
                    <h5 className="dark-grey text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <input type="text" id='title' onChange={this.handleOnChange} />
                        <label htmlFor="title">Project Title</label>
                    </div>
                    <div className="input-field">
                        <input type="text" id='subject' onChange={this.handleOnChange} />
                        <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn z-depth-0 pink darken-1">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        createProject: (Project) => dispatch(CreateProject(Project))
    }
    
}
export default connect(null, mapDispatchToProps)(Create)
