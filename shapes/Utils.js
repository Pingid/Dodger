export function addVector(v1, v2) { return { x: v1.x + v2.x, y: v1.y + v2.y } }
export function subVector(v1, v2) { return { x: v1.x - v2.x, y: v1.y - v2.y } }
export function distance(p1, p2) { return Math.pow(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2), 0.5) }
