# nhl-scraping-client

## pages 
[x] /teams
  *Components*
  [x] Teams
[x] /team/id
  *Components*
  [x] TeamRosterStats
  [x] TeamScoringStats
[x] /players
  *Components*
  [x] player stats

*Utility Components*
[x] navbuttons

## store
### [x] create reducers
  [x] FETCH_TEAM_ROSTER
  [x] FETCH_TEAM_SCORING
  [x] FETCH_PLAYER_SCORING
### [x] create store
### [x] create actions
  [x] getTeamRoster
  [x] getTeamScoring
  [x] getPlayerScoring
### [x] fire actions
  [x] getTeamRoster
  [x] getTeamScoring
  [x] getPlayerScoring



```js
//example store object
store = {
  teams : [{}, {}, ...],
  currentTeamRoster : [{}, {}, ...],
  currentTeamScoring : [{}, {}, ...],
  playerScoring : [{}, {}, ...]
}
```


## dependencies
- react-router-dom
- axios
- redux
- react-redux
- redux-devtools-extensions

## static assets
- logo image for each team
- initial state - Team Names 'SJS'

## styling strategy 
- minimal styling for protoypes 
- css modules for each component


## WORKFLOW

1. create components with dummy data
1. create reducers
1. create store
1. **wrap app in provider**
1. create actions
1. fire actions in componenets