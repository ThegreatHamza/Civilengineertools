import React,{useState} from 'react';
import CalculatorLayout from '../../components/CalculatorLayout';

export default function SlabCalculator(){
 const [l,setL]=useState(0),[w,setW]=useState(0),[t,setT]=useState(0);
 const volume=(Number(l)*Number(w)*Number(t)).toFixed(3);
 return <CalculatorLayout title="Slab Concrete Calculator" result={`${volume} m³ concrete`}>
 <input placeholder="Length (m)" onChange={e=>setL(e.target.value)}/>
 <input placeholder="Width (m)" onChange={e=>setW(e.target.value)}/>
 <input placeholder="Thickness (m)" onChange={e=>setT(e.target.value)}/>
 </CalculatorLayout>
}
