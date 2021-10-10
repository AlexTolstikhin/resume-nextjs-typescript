import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';

const useStyles = makeStyles({
    mainContainer: {
    },
    heroName: {
        fontWeight: 'bold'
    },
    subtitle: {
      textAlign: 'center'
    },
    descriptionSection: {
    }
});

const ContactInfo = () => {
	const classes = useStyles();
	
	return (
		<section className={classNames("profile-info-container", classes.mainContainer)}>
			<Typography className={classes.heroName} variant="h2">Alex Tolstikhin</Typography>
			<Typography className={classes.subtitle} variant="h4">Software Engineer</Typography>
			<br />
			<br />
			<Divider />
		</section>
	);

}



export default ContactInfo;