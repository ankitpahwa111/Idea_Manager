
import React from 'react'
import ProjectSummary from './ProjectSummary';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom'
const ProjectList = (props) => {
  const projects = props.projects;
  //console.log(props)
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
    projects: state.firestore.ordered.projects
  }

}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectList)