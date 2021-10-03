import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@mui/styles';


// My Components
import { Companies, ContactInfo, Skills, SocialIcons } from '../dumb';


const useStyles = makeStyles({
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    skillsInfo: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center'
    },
    carouselSection: {
        height: '80%'
    },
    additionalInfoSection: {
        height:'20%'
    },
    listTitle: {
        margin: '50px'
    }
})

interface PortfolioProps {
	classes: {
		contactInfo: string;
		skillsInfo: string;
		listTitle: string;
	}
}

interface PortfolioState {
	companyName: string;
	showJobDescription: boolean;
	theme: number;
}


export const PortfolioContainer = () => {
	const [companyName, setCompanyName] = useState('');
	const [showJobDescription, setShowJobDescription] = useState(false);
	const [theme, setTheme] = useState(1);

    const toggleDescription = (bool: boolean, company: string) => {
		setShowJobDescription(bool);
		setCompanyName(company)
	}

	const classes = useStyles();

	return (
		<Grid container>
			<Grid item xs={12} style={{ height: '100vh' }}>
				<section className={classes.contactInfo}>
					<ContactInfo />
					<SocialIcons />
				</section>
			</Grid>
			<Grid item xs={12} style={{ height: '100%'}}>
				<section className={classes.skillsInfo}>
					<Skills />
				</section>
			</Grid>
			<Grid item xs={12} style={{ height: '100vh'}}>
			<section className={classes.contactInfo}>
					<Typography className={classes.listTitle} variant="h4">Companies I worked in: </Typography>
					<Companies />
				</section>
			</Grid>
		</Grid>
	)
};

export default PortfolioContainer;