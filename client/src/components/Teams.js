import React from 'react';
import styles from '../styles/Teams.module.css';
import { Link } from 'react-router-dom';
const Teams = () => {
	//get teams from store // initial state

	const teams = [
		{
			code: 'SJS',
			name: 'San Jose Sharks',
			logo: 'https://content.sportslogos.net/logos/1/26/thumbs/dmo1xf3z4pph27vmg3gf.gif',
		},
		{
			code: 'PHX',
			name: 'Pheonix Coyotes',
			logo: 'https://content.sportslogos.net/logos/1/5263/thumbs/526378072015.gif',
		},
		{
			code: 'LAK',
			name: 'Los Angeles Kings',
			logo: 'https://content.sportslogos.net/logos/1/14/thumbs/1422202020.gif',
		},
		{
			code: 'LVK',
			name: 'Las Vegas Golden Knights',
			logo: 'https://content.sportslogos.net/logos/1/6114/thumbs/611426842018.gif',
		},
	];

	return (
		<div className={styles.TeamsContainer}>
			{teams.length > 0 &&
				teams.map(team => (
					<Link to={`/team/${team.code}`}>
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
