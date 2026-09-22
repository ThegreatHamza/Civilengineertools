export function calculateBeamConcrete(length, width, height) {
  const volume = Number(length) * Number(width) * Number(height);
  return {
    concreteVolume: Number(volume.toFixed(3)),
    unit: "m³"
  };
}
