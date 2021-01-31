import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import PickTeamScreen from './screens/PickTeamScreen';
import TeamDataScreen from './screens/TeamDataScreen';
import PlayerDataScreen from './screens/PlayerDataScreen';

import NavButtons from './components/NavButtons';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' render={() => <Redirect to='/teams' />} />
				<Route path='/teams' component={PickTeamScreen} />
				<Route path='/team/:id' component={TeamDataScreen} />
				<Route path='/players' component={PlayerDataScreen} />
			</Switch>
			<NavButtons />
		</BrowserRouter>
	);
}

export default App;
