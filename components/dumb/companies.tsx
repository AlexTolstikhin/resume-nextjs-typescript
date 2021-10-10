/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@mui/styles';
import AscendifyLogo from '../../public/assets/images/companyIcons/AscendifyLogo.png';
import GoodTechnologyLogo from '../../public/assets/images/companyIcons/GoodTechnologyLogo.png';
import ISDLogo from '../../public/assets/images/companyIcons/ISDLogo.png';
import SofiLogo from '../../public/assets/images/companyIcons/Sofi.png';

const useStyles = makeStyles({
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
        width: '200px'
    }
})

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
					<img alt="SofiLogo" className={classNames(images, 'company-logo')} src={SofiLogo}  />            
				</a>
			</div>
			<div
				className={logoContainer}
				onMouseEnter={()=> toggleDescription(true, 'ascendify')}
				onMouseLeave={()=> toggleDescription(false)}
			>
				<a href="https://www.ascendify.com" rel="noopener noreferrer" target="_blank">
					<img alt="AscendifyLog" className={classNames(images, 'company-logo')} src={AscendifyLogo}  />            
				</a>
			</div>
			<div
				className={logoContainer}
				onMouseEnter={()=> toggleDescription(true, 'goodTechnology')}
				onMouseLeave={()=> toggleDescription(false, )}
			>
				<a href="https://en.wikipedia.org/wiki/Good_Technology" rel="noopener noreferrer" target="_blank">
					<img alt="Good Technology Logo" className={classNames(images, 'company-logo')} src={GoodTechnologyLogo} />            
				</a>
			</div>
			<div
				className={logoContainer}
				onMouseEnter={()=> toggleDescription(true, 'isd')}
				onMouseLeave={()=> toggleDescription(false, )}
			>
				<a href="http://www.isd.dp.ua/en/" rel="noopener noreferrer" target="_blank">
					<img alt="ISD Logo" src={ISDLogo} className={classNames(images, 'company-logo')} />            
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