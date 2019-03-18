import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom'
import moment from 'moment'
const ProjectDetails = (props) => {


    //const project = props.projects.find((project)=>project.id===id)
    const {auth} = props;
    
    if(!auth.uid) return <Redirect to="/login"></Redirect>
    console.log(props);
    if(props.project){
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{props.project.title}</span>
                        <p>{props.project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {props.project.authorFirstName} {props.project.authorLastName}</div>
                        <div>{moment(props.project.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className="container center">
            Loading Project .... 
        </div>
    )
    
}
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.postID;
    console.log(id);
    const projects = state.firestore.data.projects;
    console.log(projects)
    const project = projects ? projects[id] : null ;
    console.log(project);
    return {
      project: project,
      auth : state.firebase.auth,
    //   profile : state.firebase.profile
    }
  }
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'projects' }
    ])
  )(ProjectDetails)