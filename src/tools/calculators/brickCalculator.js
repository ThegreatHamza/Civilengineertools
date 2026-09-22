export function calculateBricks(wallLength, wallHeight, brickLength, brickHeight) {
  const wallArea = wallLength * wallHeight;
  const brickArea = brickLength * brickHeight;
  return Math.ceil(wallArea / brickArea);
}
