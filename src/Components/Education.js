import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={6}>
          <h6 style={{marginTop:'0px'}}>{this.props.courseName}
            <br/>{this.props.collegeName}
            <br/>{this.props.universityName}
          </h6>
        </Cell>
        <Cell col={2}>
          <p>{this.props.credits}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
