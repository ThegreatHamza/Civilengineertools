// Excavation and backfill calculator

export function calculateExcavation(length, width, depth) {
  return Number((length * width * depth).toFixed(3));
}

export function calculateBackfill(excavationVolume, structureVolume) {
  return Number((excavationVolume - structureVolume).toFixed(3));
}
