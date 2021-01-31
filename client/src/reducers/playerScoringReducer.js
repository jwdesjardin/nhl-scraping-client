import {
	PLAYER_SCORING_FAIL,
	PLAYER_SCORING_LOADING,
	PLAYER_SCORING_SUCCESS,
} from '../actions/constants';

const initialState = {
	loading: false,
	data: [],
	error: null,
};

const playerScoringReducer = (state = initialState, action) => {
	switch (action.type) {
		case PLAYER_SCORING_LOADING:
			return {
				...state,
				loading: true,
			};
		case PLAYER_SCORING_SUCCESS:
			return {
				...state,
				data: action.payload,
				loading: false,
			};
		case PLAYER_SCORING_FAIL:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		default:
			return {
				...state,
			};
	}
};

export { playerScoringReducer };
