import React from 'react';

import TeamRosterStats from '../components/TeamRosterStats';
import TeamScoringStats from '../components/TeamScoringStats';
const TeamDataScreen = () => {
	return (
		<div className='pageContainer'>
			<h2>Roster</h2>
			<TeamRosterStats />
			<h2>Scoring</h2>
			<TeamScoringStats />
		</div>
	);
};

export default TeamDataScreen;
