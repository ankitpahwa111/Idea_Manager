import React from 'react'
import ProjectSummary from './ProjectSummary';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'
const ProjectList = (props) => {
  const projects = props.projects;
  const auth = props.auth;
  console.log(props)
  if(!auth.uid) return <Redirect to="/login"></Redirect>
  return (
    <div className="project-list section">
      {projects && projects.map(project =>
        <Link to={'/posts/' + project.id}>
          <ProjectSummary project={project} />
        </Link>
      )

      }

    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth : state.firebase.auth
  }

}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectList)