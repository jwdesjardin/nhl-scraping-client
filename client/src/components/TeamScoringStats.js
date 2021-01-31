import React from 'react';
import utilStyles from '../styles/utils.module.css';

import teamScoring from '../data/teamScoring.js';

const TeamScoringStats = () => {
	return (
		<div className={utilStyles.tableContainer}>
			<table className={utilStyles.table}>
				<thead>
					<tr>
						<th>Player</th>
						<th>POS</th>
						<th>AGE</th>
						<th>GP</th>
						<th>G</th>
						<th>A</th>
						<th>PTS</th>
						<th>+/-</th>
						<th>PIM</th>
						<th>EV</th>
						<th>SG</th>
						<th>PP</th>
						<th>GW</th>
						<th>S</th>
						<th>S%</th>
						<th>TOI</th>
						<th>A_TOI</th>
					</tr>
				</thead>
				<tbody>
					{teamScoring.length > 0 &&
						teamScoring.map(player => (
							<tr key={player._id}>
								<td data_id='name'>{player.name}</td>
								<td data_id='position'>{player.position}</td>
								<td>{player.age}</td>
								<td>{player.gamesPlayed}</td>
								<td>{player.goals}</td>
								<td>{player.assists}</td>
								<td>{player.points}</td>
								<td>{player.plusminus}</td>
								<td>{player.pims}</td>
								<td>{player.evengoals}</td>
								<td>{player.shortgoals}</td>
								<td>{player.ppgoals}</td>
								<td>{player.gwgoals}</td>
								<td>{player.shots}</td>
								<td>{player.shootingPercentage}</td>
								<td>{player.toi}</td>
								<td>{player.atoi}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default TeamScoringStats;
