import React from 'react';
import styles from '../styles/Teams.module.css';
import { Link } from 'react-router-dom';
import teams from '../data/teams';
const Teams = () => {
	//get teams from store // initial state

	return (
		<div className={styles.TeamsContainer}>
			{teams.length > 0 &&
				teams.map((team, index) => (
					<Link key={index} to={`/team/${team.code}`}>
						<div className={styles.TeamCard}>
							<img className={styles.TeamsCardImage} src={team.logo} alt='team logo' />
							<h3 className={styles.TeamsCardTitle}>{team.name}</h3>
						</div>
					</Link>
				))}
		</div>
	);
};

export default Teams;
