import React from 'react';

export default function CalculatorLayout({title, children, result}) {
  return (
    <section className="calculator-card">
      <h2>{title}</h2>
      {children}
      {result !== undefined && <div className="result-box">{result}</div>}
    </section>
  );
}
