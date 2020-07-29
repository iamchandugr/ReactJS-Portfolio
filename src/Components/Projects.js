import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, CardMenu, Button, IconButton } from 'react-mdl';
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories() {
        let tags = ["ReactJS", "BlockChain","Spring Boot","Machine Learning","Django"];
        let tagsdescription = ["This is a Portfolio build on top of ReactJS application.",
                               "CCoin crypto currency build on Blockchain technology with consensus protocol.",
                               "Spring Boot application that demonstrate the REST services.",
                               "Titanic Machine Learning model which is trained to predict the probability of survival.",
                               "A simple Django application for polls and questions."];
        let githubProjLocs = ["https://github.com/iamchandugr/Blockchain-CCoin", "https://github.com/iamchandugr/SpringBootDemo/",
                              "https://github.com/iamchandugr/ML_Beginner/","https://github.com/iamchandugr/django_demo_polls",""]
        return(
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>{tags[this.state.activeTab]}</CardTitle>
                    <CardText>
                        {tagsdescription[this.state.activeTab]}
                    </CardText>
                    <CardActions border>
                        <Button onClick={()=>window.open(githubProjLocs[this.state.activeTab])} colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

            )
        
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId}) } ripple>
                    <Tab>ReactJS</Tab>
                    <Tab>BlockChain</Tab>
                    <Tab>Spring Boot</Tab>
                    <Tab>Machine Learning</Tab>
                    <Tab>Django</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                    
                </section>
            </div>
        )
    }
}
export default Projects;