export function calculateSlabConcrete(length, width, thickness) {
  const volume = Number(length) * Number(width) * Number(thickness);
  return {
    concreteVolume: Number(volume.toFixed(3)),
    unit: "m³"
  };
}
