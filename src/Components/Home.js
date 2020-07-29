import React, {Component} from 'react';
import {Grid, Cell } from 'react-mdl';

class Home extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img src=".././avatar.png" alt="pic" className="avatar" />
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                            <p><img src=".././python.png" alt="pythonpic" />Python |<img src=".././java.png" alt="javapic" /> Java |<img src=".././sql.png" alt="sqlpic" /> SQL |<img src=".././django.png" alt="djangopic" /> Django |<img src=".././react.png" alt="reactpic" /> React |<img src=".././ml.png" alt="mlpic" /> Machine Learning</p>
                            
                        </div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/chandugr" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/chandu-gr" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            {/* Freecodecamp */}
                            <a href="https://twitter.com/iamchandugr" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter-square" aria-hidden="true" />
                            </a>

                            {/* Youtube */}
                            <a href="https://www.freecodecamp.org/iamchandugr" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp" aria-hidden="true" />
                            </a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Home;