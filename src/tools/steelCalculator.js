// Steel weight calculator
// Weight = volume x density
// Steel density = 7850 kg/m3

export function calculateSteelWeight(diameterMm, lengthM, quantity = 1) {
  const radiusM = (diameterMm / 1000) / 2;
  const volume = Math.PI * radiusM * radiusM * lengthM * quantity;
  return Number((volume * 7850).toFixed(2));
}
