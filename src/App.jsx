import React, {useState} from 'react';

const tools=[
 ['🏗️','Quantity Estimator','Building quantities, concrete, steel, bricks and materials'],
 ['🧮','Quick Calculators','Beam, column, slab and footing calculations'],
 ['📚','Formula Library','Civil engineering formulas and references'],
 ['🔄','Unit Converter','Engineering unit conversions'],
 ['📝','Site Notes','Offline project notes']
];

export default function App(){
 const [lang,setLang]=useState('EN');
 return <main>
  <header><h1>Civil Engineer Tools</h1><button onClick={()=>setLang(lang==='EN'?'FR':'EN')}>{lang}</button></header>
  <p>{lang==='EN'?'Professional mobile engineering toolkit':'Boîte à outils professionnelle pour ingénieurs civils'}</p>
  <section>{tools.map(t=><article key={t[1]}><h2>{t[0]} {t[1]}</h2><p>{t[2]}</p><button>Open</button></article>)}</section>
 </main>
}
