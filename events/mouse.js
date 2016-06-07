import store from '../redux/store';

exports.global = function() {
  window.addEventListener('mousedown', function(e) {
    return store.dispatch({ type: 'MOUSE_DOWN', position: { x: e.pageX, y: e.pageY } });
  });
  window.addEventListener('mouseup', function(e) {
    return store.dispatch({ type: 'MOUSE_UP', position: { x: e.pageX, y: e.pageY } });
  });
  window.addEventListener('mousemove', function(e) {
    return store.dispatch({ type: 'MOUSE_MOVE', position: { x: e.pageX, y: e.pageY } });
  });
};
