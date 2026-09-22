import React, { useState } from "react";

export default function SteelWeightCalculator() {
  const [diameter, setDiameter] = useState(12);
  const [length, setLength] = useState(10);
  const [quantity, setQuantity] = useState(1);

  const calculateWeight = () => {
    const radius = Number(diameter) / 1000 / 2;
    const area = Math.PI * radius * radius;
    const volume = area * Number(length) * Number(quantity);
    return (volume * 7850).toFixed(2);
  };

  return (
    <div className="calculator-card">
      <h2>Steel Weight Calculator</h2>
      <p>Calculate reinforcement steel weight using diameter, length and quantity.</p>

      <label>Bar Diameter (mm)</label>
      <input
        type="number"
        value={diameter}
        onChange={(e) => setDiameter(e.target.value)}
      />

      <label>Bar Length (m)</label>
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />

      <label>Number of Bars</label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <div className="result-box">
        Weight: {calculateWeight()} kg
      </div>

      <small>Formula: Weight = Volume × Steel Density (7850 kg/m³)</small>
    </div>
  );
}
