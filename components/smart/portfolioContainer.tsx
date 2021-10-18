import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';


// My Components
import { Companies, ContactInfo, Skills, SocialIcons } from '../dumb';


const useStyles = makeStyles({
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
			<Grid item xs={12} style={{ height: '95vh', display: 'flex', justifyContent: 'center', 'alignItems': 'center' }}>
				<section className={classes.contactInfo}>
					<ContactInfo />
					<SocialIcons />
					<Companies />
				</section>
			</Grid>
		</Grid>
	)
};

export default PortfolioContainer;