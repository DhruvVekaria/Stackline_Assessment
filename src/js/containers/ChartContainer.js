import React, { Component } from "react";
import { connect } from "react-redux";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

class ChartContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="chart">
        <text>Retail Sales</text>
        <LineChart width={900} height={300} data={this.props.data.sales}>
          <XAxis dataKey="weekEnding"/>
          <Tooltip />
          <Line type="monotone" dataKey="retailSales" stroke="#0097fc" strokeWidth = {2}/>
          <Line type="monotone" dataKey="wholesaleSales" stroke="#7e888f" strokeWidth = {2} />
        </LineChart>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(
  mapStateToProps,
  null
)(ChartContainer);
