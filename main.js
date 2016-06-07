import store from './redux/store';
import mouseEvents from './events/mouse';

import setup from './run/setup';

// Global mouse movements dispatching to store
var subbedToEvents = mouseEvents.global(store);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;
canvas.width = pageWidth;
canvas.height = pageHeight;

// Center canvas x and y coordinates
// ctx.translate(pageWidth / 2, pageHeight / 2);

setup(ctx);
// store.subscribe(function() {
//   console.log(store.getState());
// })

// Refresh canvas animation loop
function update() {
  const { mouse, game } = store.getState();
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  if (!game.ended) {
    if (mouse.down) {
      game.ball.update(mouse.currentPosition);
      game.objects.forEach(function(block) { block.update(); })
    }
    game.ball.draw()
    game.objects.forEach(function(block) { block.draw(); })
    ctx.font = 'italic 20pt Calibri';
    ctx.fillStyle = 'black';
    ctx.fillText('Score: ' + game.score, 10, 30);
  } else {
    ctx.font = 'italic 20pt Calibri';
    ctx.fillStyle = 'black';
    ctx.fillText('Game Over', 10, 30);
    ctx.fillText('Final score: ' + game.score, 10, 60);
  }
}

function animate() {
  update();
  window.requestAnimationFrame(animate)
  // setTimeout(animate, 500);
}
animate();
