import { PLAYER_SCORING_FAIL, PLAYER_SCORING_LOADING, PLAYER_SCORING_SUCCESS } from './constants';
import axios from 'axios';

export const getPlayersScoring = () => async dispatch => {
	try {
		dispatch({
			type: PLAYER_SCORING_LOADING,
		});

		const { data } = await axios.get(`/api/players/stats`);

		dispatch({
			type: PLAYER_SCORING_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: PLAYER_SCORING_FAIL,
			payload:
				error.response && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};
