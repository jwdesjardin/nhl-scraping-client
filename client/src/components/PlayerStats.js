import React from 'react';
import utilStyles from '../styles/utils.module.css';
import { useSelector } from 'react-redux';

const PlayerStats = () => {
	const playersScoring = useSelector(state => state.playersScoring);
	const { data, loading, error } = playersScoring;

	return (
		<div className={utilStyles.tableContainer}>
			<table className={utilStyles.table}>
				<thead>
					<tr>
						<th>Player</th>
						<th>AGE</th>
						<th>TEAM</th>
						<th>POS</th>
						<th>GP</th>
						<th>G</th>
						<th>A</th>
						<th>PTS</th>
						<th>+/-</th>
						<th>PIM</th>
						<th>PSH</th>
						<th>EV</th>
						<th>SG</th>
						<th>PP</th>
						<th>GW</th>
						<th>TOI</th>
						<th>A_TOI</th>
					</tr>
				</thead>
				<tbody>
					{data.length > 0 &&
						data.map(player => (
							<tr key={player._id}>
								<td data_id='name'>{player.name}</td>
								<td>{player.age}</td>
								<td>{player.team}</td>
								<td data_id='position'>{player.position}</td>
								<td>{player.gamesPlayed}</td>
								<td>{player.goals}</td>
								<td>{player.assists}</td>
								<td>{player.points}</td>
								<td>{player.plusminus}</td>
								<td>{player.pims}</td>
								<td>{player.pointShares}</td>
								<td>{player.ev_goals}</td>
								<td>{player.sh_goals}</td>
								<td>{player.pp_goals}</td>
								<td>{player.gw_goals}</td>
								<td>{player.toi}</td>
								<td>{player.atoi}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default PlayerStats;
