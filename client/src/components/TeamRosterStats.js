import React from 'react';
import utilStyles from '../styles/utils.module.css';

import teamRoster from '../data/teamRoster';

import { useSelector } from 'react-redux';

const TeamRosterStats = () => {
	const teamRoster = useSelector(state => state.teamRoster);
	const { data, loading, error } = teamRoster;
	return (
		<div className={utilStyles.tableContainer}>
			<table className={utilStyles.table}>
				<thead>
					<tr>
						<th>#</th>
						<th>Player</th>
						<th>POS</th>
						<th>AGE</th>
						<th>YRS</th>
						<th>SAL</th>
						<th>DRAFT</th>
						<th>BIRTH</th>
					</tr>
				</thead>
				<tbody>
					{data.length > 0 &&
						data.map(player => (
							<tr key={player._id}>
								<td>{player.number}</td>
								<td data_id='name'>{player.name}</td>
								<td data_id='position'>{player.position}</td>
								<td>{player.age}</td>
								<td>{player.years}</td>
								<td>{player.salary}</td>
								<td>{player.drafted}</td>
								<td>{player.birthdate}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default TeamRosterStats;
