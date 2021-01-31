import {
	TEAM_SCORING_FAIL,
	TEAM_SCORING_LOADING,
	TEAM_SCORING_SUCCESS,
} from '../actions/constants';

const initialState = {
	loading: false,
	data: [],
	error: null,
};

const teamScoringReducer = (state = initialState, action) => {
	switch (action.type) {
		case TEAM_SCORING_LOADING:
			return {
				...state,
				loading: true,
			};
		case TEAM_SCORING_SUCCESS:
			return {
				...state,
				data: action.payload,
				loading: false,
			};
		case TEAM_SCORING_FAIL:
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

export { teamScoringReducer };
