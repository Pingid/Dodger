import store from '../redux/store';
import Ball from '../shapes/Ball';
import generateBlocks from '../generators/generateBlocks';

export default () => {
  // Add icon
  const state = store.getState();
  const { global } = state;
  var ball = new Ball({ x: global.pageX / 2, y: global.pageY - 100 }, 10, global.context);
  console.log(ball);
  store.dispatch({ type: 'BALL', ball: ball });
  generateBlocks(state);
}
