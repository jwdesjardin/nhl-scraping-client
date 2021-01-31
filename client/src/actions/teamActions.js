import {
	TEAM_ROSTER_FAIL,
	TEAM_ROSTER_LOADING,
	TEAM_ROSTER_SUCCESS,
	TEAM_SCORING_FAIL,
	TEAM_SCORING_LOADING,
	TEAM_SCORING_SUCCESS,
} from './constants';
import axios from 'axios';

export const getTeamRoster = teamCode => async dispatch => {
	try {
		dispatch({
			type: TEAM_ROSTER_LOADING,
		});

		const { data } = await axios.get(`/api/team/roster/${teamCode}`);

		dispatch({
			type: TEAM_ROSTER_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: TEAM_ROSTER_FAIL,
			payload:
				error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const getTeamScoring = teamCode => async dispatch => {
	try {
		dispatch({
			type: TEAM_SCORING_LOADING,
		});

		const { data } = await axios.get(`/api/team/skaters/${teamCode}`);

		dispatch({
			type: TEAM_SCORING_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: TEAM_SCORING_FAIL,
			payload:
				error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};
