import React from 'react';
import PropTypes from 'prop-types';
import { Grid, List, ListItem, Typography } from '@mui/material';

const leftColumnSkills = ['React', 'Webpack', 'Javascript', 'CSS3', 'Mocha', 'Chai', 'SQL', 'Docker', 'Jenkins', 'Git'];
const rightColumnSkills = ['Redux', 'ES6', 'HTML5', 'SASS', 'Material UI', 'Undescore.js', 'Jest', 'Enzyme', 'PHP', 'Jira'];

const styles = {
    listTitle: {
        marginTop: '50px'
    },
    listItem: {
        justifyContent: 'center'
    }
}


const Skills = () => 
    <div>
        <Typography style={styles.listTitle} variant="h4">I had experience working with: </Typography>
        <Grid container>
            <Grid item xs={6}>
                <List>
                    {leftColumnSkills.map(skill => 
                        <ListItem key={skill} style={styles.listItem}>
                            <Typography variant="h5">{skill}</Typography>
                        </ListItem>)
                    }
                </List>
            </Grid>
            <Grid item xs={6}>
                <List>
                    {rightColumnSkills.map(skill =>
                        <ListItem key={skill} style={styles.listItem}>
                                <Typography className="skill-name" variant="h5">{skill}</Typography>
                        </ListItem>
                    )}  
                </List>
            </Grid>
        </Grid>
    </div>

export default Skills;