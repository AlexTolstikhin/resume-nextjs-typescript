import React from 'react';
import { Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';

const ContactInfo = () => {
  const useStyles = makeStyles({
    mainContainer: {
    },
    heroName: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subtitle: {
      textAlign: 'center'
    },
    descriptionSection: {
    }
}, { name: 'muiContactInfo'});

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
