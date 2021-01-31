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
[] create reducers
  [] FETCH_TEAM_ROSTER
  [] FETCH_TEAM_SCORING
  [] FETCH_PLAYER_SCORING
[] create store
[] create actions
  [] getTeamRoster
  [] getTeamScoring
  [] getPlayerScoring

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
1. create actions
1. fire actions in componenets