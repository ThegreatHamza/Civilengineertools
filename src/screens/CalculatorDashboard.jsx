import CalculatorCard from '../components/CalculatorCard';

export default function CalculatorDashboard() {
  const tools = [
    ['Beam Calculator', 'Calculate concrete volume for beams'],
    ['Column Calculator', 'Calculate column concrete quantities'],
    ['Slab Calculator', 'Calculate slab volume and materials'],
    ['Steel Calculator', 'Calculate reinforcement steel weight'],
    ['Excavation Calculator', 'Calculate excavation volume'],
    ['Brick Calculator', 'Estimate blocks and bricks']
  ];

  return (
    <main>
      <h1>Civil Engineer Tools</h1>
      <section className="calculator-grid">
        {tools.map(([title, description]) => (
          <CalculatorCard key={title} title={title} description={description} />
        ))}
      </section>
    </main>
  );
}
