var initialState = {
  score: 1,
  objects: [],
  ball: {},
  ended: false
}

function gameReducer(state, action) {
  var state = state || initialState;
  switch (action.type) {
    case 'SCORE_INC':
      return Object.assign({}, state, { score: state.score + 1 });

    case 'OBJECTS':
      return Object.assign({}, state, { objects: action.objects });

    case 'BALL':
      return Object.assign({}, state, { ball: action.ball });

    case 'GAME_END':
      return Object.assign({}, state, { ended: true });

    default:
      return state;
  }
}

module.exports = gameReducer;
