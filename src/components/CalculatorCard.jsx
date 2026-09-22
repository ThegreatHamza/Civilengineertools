export default function CalculatorCard({ title, description, onClick }) {
  return (
    <button className="calculator-card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </button>
  );
}
