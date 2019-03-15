
import React from 'react'
import ProjectSummary from './ProjectSummary';
import { connect } from 'react-redux';
const ProjectList = (props) => {
  const projects = props.projects;
  //console.log(props)
  return (
    <div className="project-list section">
      {projects && projects.map(project =>

        <ProjectSummary project={project} />

      )

      }

    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(ProjectList)