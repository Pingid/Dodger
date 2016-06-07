import { addVector } from './Utils';

export default function Block(position, dimensions, context) {
  var self = this;
  self.position = position;
  self.dimensions = dimensions;
  self.velocity = { x: 0, y: 10 };
  self.context = context;

  function addVector(v1, v2) { return { x: v1.x + v2.x, y: v1.y + v2.y } }
  this.handlePostion =  function() {
    self.position = addVector(self.position, self.velocity);
  }
  this.draw = function() {
    self.context.beginPath();
    self.context.arc(self.position.x, self.position.y, self.dimensions.x, 0, 2 * Math.PI, false);
    self.context.fillStyle = 'black';
    self.context.fill();
  }
  this.update = function() {
    this.handlePostion();
    this.draw()
  }
}
