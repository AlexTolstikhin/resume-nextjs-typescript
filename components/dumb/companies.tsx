/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme: Theme) => ({
	mainSection: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'space-evenly',
        alignContent: 'space-between',
        alignItems: 'center',
        margin: '100px 20px'
    },
    images: {
        height: 'auto',
        width: '100%'
    },
    logoContainer: {
        width: '100px',
        [theme.breakpoints.up('sm')]: {
          width: '200px'
        },
    }
}));

interface companyProps {
	toggleDescription: (a: boolean, b?: string) => void;
}

const Companies = ({ toggleDescription }: companyProps) => {
	const { mainSection, images, logoContainer } = useStyles();
	return (
		<section className={mainSection}>
      <div
				className={logoContainer}
				onMouseEnter={()=> toggleDescription(true, 'sofi')}
				onMouseLeave={()=> toggleDescription(false)}
			>
				<a href="https://www.sofi.com" rel="noopener noreferrer" target="_blank">
					<img alt="SofiLogo" src='assets/images/companyIcons/Sofi.png' className={classNames(images, 'company-logo')}  />            
				</a>
			</div>
			<div
				className={logoContainer}
				onMouseEnter={()=> toggleDescription(true, 'ascendify')}
				onMouseLeave={()=> toggleDescription(false)}
			>
				<a href="https://www.ascendify.com" rel="noopener noreferrer" target="_blank">
					<img alt="AscendifyLog" className={classNames(images, 'company-logo')} src='assets/images/companyIcons/AscendifyLogo.png' />          
				</a>
			</div>
			<div
				className={logoContainer}
				onMouseEnter={()=> toggleDescription(true, 'goodTechnology')}
				onMouseLeave={()=> toggleDescription(false, )}
			>
				<a href="https://www.good.com" rel="noopener noreferrer" target="_blank">
					<img alt="Good Technology Logo" className={classNames(images, 'company-logo')} src='assets/images/companyIcons/GoodTechnologyLogo.png' />            
				</a>
			</div>
			<div
				className={logoContainer}
				onMouseEnter={()=> toggleDescription(true, 'isd')}
				onMouseLeave={()=> toggleDescription(false, )}
			>
				<a href="http://www.isd.dp.ua/en/" rel="noopener noreferrer" target="_blank">
					<img alt="ISD Logo" src='assets/images/companyIcons/ISDLogo.png' className={classNames(images, 'company-logo')} />            
				</a>
			</div>
		</section>
	);
}


Companies.defaultProps = {
    toggleDescription: () => {}
};

Companies.propTypes = {
    toggleDescription: PropTypes.func
};

export default Companies;