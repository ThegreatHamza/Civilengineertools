import React,{useState} from 'react';
import CalculatorLayout from '../../components/CalculatorLayout';

export default function ColumnCalculator(){
 const [a,setA]=useState(0),[b,setB]=useState(0),[h,setH]=useState(0);
 const volume=(Number(a)*Number(b)*Number(h)).toFixed(3);
 return <CalculatorLayout title="Column Concrete Calculator" result={`${volume} m³ concrete`}>
 <input placeholder="Width (m)" onChange={e=>setA(e.target.value)}/>
 <input placeholder="Depth (m)" onChange={e=>setB(e.target.value)}/>
 <input placeholder="Height (m)" onChange={e=>setH(e.target.value)}/>
 </CalculatorLayout>
}
