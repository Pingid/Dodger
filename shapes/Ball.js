import { subVector } from './Utils';

export default function Ball (position, size, context) {
  var self = this;
  self.position = position;
  self.size = size;
  self.velocity = { x: 0, y: 0 };
  self.context = context;

  this.handleAcceleration = function(pos) {
    self.velocity = {
      x: (self.position.x - pos.x) / 2,
      y: (self.position.y - pos.y) / 2
    }
  }
  this.handlePostion = function() {
    self.position = subVector(self.position, self.velocity);
  }
  this.draw = function() {
    self.context.beginPath();
    self.context.arc(self.position.x, self.position.y, self.size, 0, 2 * Math.PI, false);
    self.context.fillStyle = 'black';
    self.context.fill();
  };
  this.update = function(mousePosition) {
    this.handleAcceleration(mousePosition);
    this.handlePostion();
    this.draw();
  };
}
