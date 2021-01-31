import React, { useState, useEffect } from 'react';
import utilStyles from '../styles/utils.module.css';
import { useSelector } from 'react-redux';

const PlayerStats = () => {
	const playersScoring = useSelector(state => state.playersScoring);
	const { data, loading, error } = playersScoring;

	const [ sortProp, setSortProp ] = useState('');

	console.log(sortProp, data);
	return (
		<div className={utilStyles.tableContainer}>
			<table className={utilStyles.table}>
				<thead>
					<tr>
						<th onClick={e => setSortProp('name')} className={sortProp === 'name' ? 'active' : ''}>
							Player
						</th>
						<th onClick={e => setSortProp('age')} className={sortProp === 'age' ? 'active' : ''}>
							AGE
						</th>
						<th onClick={e => setSortProp('team')} className={sortProp === 'team' ? 'active' : ''}>
							TEAM
						</th>
						<th
							onClick={e => setSortProp('position')}
							className={sortProp === 'position' ? 'active' : ''}
						>
							POS
						</th>
						<th
							onClick={e => setSortProp('gamesPlayed')}
							className={sortProp === 'gamesPlayed' ? 'active' : ''}
						>
							GP
						</th>
						<th
							onClick={e => setSortProp('goals')}
							className={sortProp === 'goals' ? 'active' : ''}
						>
							G
						</th>
						<th
							onClick={e => setSortProp('assists')}
							className={sortProp === 'assists' ? 'active' : ''}
						>
							A
						</th>
						<th
							onClick={e => setSortProp('points')}
							className={sortProp === 'points' ? 'active' : ''}
						>
							PTS
						</th>
						<th
							onClick={e => setSortProp('plusminus')}
							className={sortProp === 'plusminus' ? 'active' : ''}
						>
							+/-
						</th>
						<th onClick={e => setSortProp('pims')} className={sortProp === 'pims' ? 'active' : ''}>
							PIM
						</th>
						<th
							onClick={e => setSortProp('pointShares')}
							className={sortProp === 'pointShares' ? 'active' : ''}
						>
							PSH
						</th>
						<th
							onClick={e => setSortProp('ev_goals')}
							className={sortProp === 'ev_goals' ? 'active' : ''}
						>
							EV
						</th>
						<th
							onClick={e => setSortProp('sh_goals')}
							className={sortProp === 'sh_goals' ? 'active' : ''}
						>
							SG
						</th>
						<th
							onClick={e => setSortProp('pp_goals')}
							className={sortProp === 'pp_goals' ? 'active' : ''}
						>
							PP
						</th>
						<th
							onClick={e => setSortProp('gw_goals')}
							className={sortProp === 'gw_goals' ? 'active' : ''}
						>
							GW
						</th>
						<th onClick={e => setSortProp('toi')} className={sortProp === 'toi' ? 'active' : ''}>
							TOI
						</th>
						<th onClick={e => setSortProp('atoi')} className={sortProp === 'atoi' ? 'active' : ''}>
							A_TOI
						</th>
					</tr>
				</thead>
				<tbody>
					{data &&
						data.length > 0 &&
						data.sort((a, b) => b[sortProp] - a[sortProp]).map(player => (
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
