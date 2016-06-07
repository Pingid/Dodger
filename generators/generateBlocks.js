import { distance } from '../shapes/Utils';
import store from '../redux/store';
import Block from '../shapes/Block';

function generateBlocks(context) {
  const { mouse, game, global } = store.getState();
  if (mouse.down && !game.ended) {
    var height = Math.random() * 30;
    var newBlock = new Block({ x: Math.random() * global.pageX, y: -height,}, { x: height, y: height }, global.context)
    var blocks = game.objects.filter(function(block) {
      if (distance(block.position, game.ball.position) < (game.ball.size + block.dimensions.x)) { store.dispatch({ type: 'GAME_END' }) }
      if (block.position.y > global.pageY) { store.dispatch({ type: 'SCORE_INC' }); };
      return block.position.y < global.pageY
    });
    store.dispatch({ type: 'OBJECTS', objects: [].concat(blocks, [newBlock]) });
  }
  setTimeout(generateBlocks, 200 * 1 / Math.pow(game.score, 0.5));
}

module.exports = generateBlocks
