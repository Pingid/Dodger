var initialState = {
  context: document.getElementById('canvas').getContext('2d'),
  pageX: window.innerWidth || 100,
  pageY: window.innerHeight || 100
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PAGE_DIMENSIONS':
      return Object.assign({}, state, { pageX: action.pageX || state.pageX, pageY: action.pageY || state.pageY });

    default:
      return state;
  }
}
