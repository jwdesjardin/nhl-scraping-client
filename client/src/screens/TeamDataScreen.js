import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTeamRoster, getTeamScoring } from '../actions/teamActions';

import TeamRosterStats from '../components/TeamRosterStats';
import TeamScoringStats from '../components/TeamScoringStats';

const TeamDataScreen = ({ match }) => {
	const dispatch = useDispatch();
	const teamCode = match.params.id;
	useEffect(
		() => {
			dispatch(getTeamRoster(teamCode));
			dispatch(getTeamScoring(teamCode));
		},
		[ dispatch, teamCode ]
	);

	return (
		<div className='pageContainer'>
			<h2>Roster - {teamCode}</h2>
			<TeamRosterStats />
			<h2>Scoring - {teamCode}</h2>
			<TeamScoringStats />
		</div>
	);
};

export default TeamDataScreen;
