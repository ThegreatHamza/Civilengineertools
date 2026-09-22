export function calculateColumnConcrete(width, depth, height, quantity = 1) {
  const volume = Number(width) * Number(depth) * Number(height) * Number(quantity);
  return {
    concreteVolume: Number(volume.toFixed(3)),
    unit: "m³"
  };
}
