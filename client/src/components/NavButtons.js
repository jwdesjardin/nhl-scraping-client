import React from 'react';
import styles from '../styles/NavButtons.module.css';
import { NavLink } from 'react-router-dom';

const NavButtons = () => {
	return (
		<div className={styles.navContainer}>
			<div className={`${styles.button} ${styles.teamsButton}`}>
				<NavLink to='/teams'>Teams</NavLink>
			</div>
			<div className={`${styles.button} ${styles.playersButton}`}>
				<NavLink to='/players'>Players</NavLink>
			</div>
		</div>
	);
};

export default NavButtons;
