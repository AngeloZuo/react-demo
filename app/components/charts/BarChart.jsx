import React from "react";
import * as d3 from "d3";

export default class BarChart extends React.Component {
  drawBarChart() {
    const { project, productKey } = this.props; 
    d3.select(`.bar_chart_${productKey}`)
      .selectAll("div")
      .data(project.monthly)
      .enter()
      .append("div")
      .style("width", function(d) {
        return Math.floor(d / 50) + "px";
      })
      .text(function(d) {
        return d;
      });
  }

  componentDidMount() {
    this.drawBarChart();
  }

  render() {
    const { productKey } = this.props;
    return <div className={`barChart bar_chart_${productKey}`} />;
  }
}
