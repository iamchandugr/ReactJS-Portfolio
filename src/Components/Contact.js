import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h3>Chandrashekar</h3>
                        <img src=".././avatar.png" alt="pic" className="avatar" />
                        <br/>
                        <h4 className="titleContact">Technology Enthusiast</h4>
                    </Cell>
                    <Cell col={6}>
                        <h3>Contact me</h3>
                        <hr style={{borderTop: '3px solid #6fcf2b'}} />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        1234567890
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        chandurajagopal@gmail.com
                                        
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        1234567890
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;