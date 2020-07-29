import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            <img src=".././avatar.png" alt="pic" className="avatar" 
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Chandrashekar</h2>
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Aim to work in a challenging work environment where I can utilize my expertise in technical skills, towards the development and implementation of the new ideas and contributing to growth of the organization.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>No. 56, Hosapalya colony, Agara, Thataguni Post, Bengaluru - 560062</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>chandrashekargr1995@gmail.com</p>
            <h5>Web</h5>
            <p>coming soon</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
          <h4>Experience</h4>

            <Experience
            startYear={2018}
            endYear={"Present"}
            companyName={"Accenture"}
            jobName="Associate Software Engineer"
            jobDescription="Developing application using Java and using IBM ITX as middleware."
            />

          <hr style={{borderTop: '3px solid #e22947'}} />
            <h4>Education</h4>

            <Education
              startYear={2016}
              endYear={2018}
              credits={7.6}
              courseName="Master of Computer Applications (MCA)"
              collegeName="Dayananda Sagar Institutions"
              universityName="Visvesvaraya Technological University"
               />

            <Education
                startYear={2013}
                endYear={2016}
                credits={6.5}
                courseName="Bachelor of Computer Applications (BCA)"
                collegeName="PESIT"
                universityName="Bangalore University"
                />
            
              <hr style={{borderTop: '3px solid #e22947'}} />

              <h4>Internship</h4>

            <Experience
            startYear={2018}
            endYear={2018}
            companyName="Indian Space Research Organisation (ISRO)"
            jobName="Java Developer"
            jobDescription="Video Data Processing"
            />

          <hr style={{borderTop: '3px solid #e22947'}} />

              <h4>Skills</h4>
                <Skills
                    skill="Java"
                    progress={60}
                    />
                <Skills
                    skill="Python"
                    progress={65}
                    />
                <Skills
                    skill="javascript"
                    progress={60}
                    />
                <Skills
                    skill="HTML/CSS"
                    progress={80}
                    />
                <Skills
                skill="NodeJS"
                progress={50}
                />
                <Skills
                    skill="React"
                    progress={25}
                    />
                <Skills
                    skill="Django"
                    progress={25}
                    />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
