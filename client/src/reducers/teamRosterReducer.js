import { TEAM_ROSTER_FAIL, TEAM_ROSTER_LOADING, TEAM_ROSTER_SUCCESS } from '../actions/constants';

const initialState = {
	loading: false,
	data: [],
	error: null,
};

const teamRosterReducer = (state = initialState, action) => {
	switch (action.type) {
		case TEAM_ROSTER_LOADING:
			return {
				...state,
				loading: true,
			};
		case TEAM_ROSTER_SUCCESS:
			return {
				...state,
				data: action.payload,
				loading: false,
			};
		case TEAM_ROSTER_FAIL:
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

export { teamRosterReducer };
