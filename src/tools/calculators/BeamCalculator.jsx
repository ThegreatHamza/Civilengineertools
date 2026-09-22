import React, {useState} from 'react';
import CalculatorLayout from '../../components/CalculatorLayout';

export default function BeamCalculator(){
 const [l,setL]=useState(0); const [b,setB]=useState(0); const [h,setH]=useState(0);
 const volume=(Number(l)*Number(b)*Number(h)).toFixed(3);
 return <CalculatorLayout title="Beam Concrete Calculator" result={`${volume} m³ concrete`}>
  <input placeholder="Length (m)" onChange={e=>setL(e.target.value)}/>
  <input placeholder="Width (m)" onChange={e=>setB(e.target.value)}/>
  <input placeholder="Height (m)" onChange={e=>setH(e.target.value)}/>
 </CalculatorLayout>
}
