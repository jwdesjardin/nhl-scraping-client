// create our redux store

// conect reducers middleware

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//bring in reducers
import { playerScoringReducer } from './reducers/playerScoringReducer';
import { teamRosterReducer } from './reducers/teamRosterReducer';
import { teamScoringReducer } from './reducers/teamScoringReducer';

// combine multiple reducers
const reducer = combineReducers({
	playersScoring: playerScoringReducer,
	teamScoring: teamScoringReducer,
	teamRoster: teamRosterReducer,
});

const initialState = {};

// allows async actions
const middleware = [ thunk ];

// create store
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
