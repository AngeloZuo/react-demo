import React from "react";

import { getProjects } from "../../actions/projectAction";

export default class FetchProjectsGraphic extends React.Component {
  state = {
    loading: true,
    projects: [],
    error: false
  }

  async fetchProjectsGraphicData() {
    console.log("Getting Data");
    const projects = await getProjects();
    this.setState({
      loading: false,
      projects: projects.projects,
      error: false
    });
  }

  componentDidMount() {
    this.fetchProjectsGraphicData()
  }

  render() {
    const { loading, projects, error } = this.state;
    return this.props.children({ loading, projects, error });
  }
}
