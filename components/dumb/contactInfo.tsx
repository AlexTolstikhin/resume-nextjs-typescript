import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';

const useStyles = makeStyles({
    mainContainer: {
    },
    greetingSection: {
        fontWeight: 'bold'
    },
    subtitleSection: {
    },
    descriptionSection: {
    }
});

const ContactInfo = () => {
	const classes = useStyles();
	
	return (
		<section className={classNames("profile-info-container", classes.mainContainer)}>
			<Typography className={classes.greetingSection} variant="h2">Alex Tolstikhin</Typography>
			<Typography className={classes.subtitleSection} variant="h4">Frontend Developer</Typography>
			<br />
			<br />
			<Divider />
		</section>
	);

}



export default ContactInfo;
