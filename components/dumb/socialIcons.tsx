import React from 'react';
import { Link, IconButton } from '@material-ui/core';
import { Facebook, GitHub, LinkedIn, Instagram } from '@material-ui/icons';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';

const useStyles = makeStyles({
    icons: {
        fontSize: '3.0rem',

        '&:hover': {
            transform: 'rotate(360deg)',
            transition: 'all 1.5s ease-in-out 0s'
        }
    },
    gitHub: {
        color: 'black'
    },
    linkedIn: {
        color: 'black'
    },
    facebook: {
        color: 'black'
    },
    instagram: {
        color: 'black'
    },
    iconButton: {
        '&:hover': {
            background: 'none'
        }
    }
});

const SocialIcons = () => {
	const classes = useStyles();

	return (
		<section className="social-section">
			<Link
				href="https://github.com/AlexTolstikhin"
				rel="noreferrer"
				target="_blank"
			>    
				<IconButton
					className={classes.iconButton}
					disableFocusRipple
				>
					<GitHub className={classNames(classes.icons, classes.gitHub)} />
				</IconButton>
			</Link>    
			<Link
				href="https://www.linkedin.com/in/alextolstikhin"
				rel="noreferrer"
				target="_blank"
			>
				<IconButton
					className={classes.iconButton}
					disableFocusRipple
				>
					<LinkedIn className={classNames(classes.icons, classes.linkedIn)} />
				</IconButton>
			</Link>
			<Link
				href="https://www.facebook.com/profile.php?id=100001650780526"
				rel="noreferrer"
				target="_blank"
			>
				<IconButton
					className={classes.iconButton}
					disableFocusRipple
				>
					<Facebook className={classNames(classes.icons, classes.facebook)} />
				</IconButton>
			</Link>
			<Link
				href="https://www.instagram.com/aleks_tolstikhin/"
				rel="noreferrer"
				target="_blank"
			>
				<IconButton
					className={classes.iconButton}
					disableFocusRipple
				>
					<Instagram className={classNames(classes.icons, classes.instagram)} />
				</IconButton>
			</Link>
		</section>
	);
}

export default SocialIcons;