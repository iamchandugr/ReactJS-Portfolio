import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={6}>
          <h6 style={{marginTop:'0px'}}>{this.props.companyName}
          <br/>{this.props.jobName}
          <br/>{this.props.jobDescription}</h6>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
