var initialState = {
  currentPosition: { x: 0, y: 0 },
  downPosition: { x: 0, y: 0 },
  upPosition: { x: 0, y: 0 },
  down: false
}

function mouseReducer(state, action) {
  state = state || initialState;
  switch (action.type) {

    case 'MOUSE_MOVE':
      return Object.assign({}, state, { currentPosition: action.position });

    case 'MOUSE_DOWN':
      return Object.assign({}, state, { down: true, downPosition: action.position });

    case 'MOUSE_UP':
      return Object.assign({}, state, { down: false, upPosition: action.position });

    default:
      return state;
  }
}

module.exports = mouseReducer;
