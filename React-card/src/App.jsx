import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  
 
 const freDetails=["single user","50 gbstorage","unlimited public projects","community access"];
 const feeDetails=["unlimited private projects","dedicated phone support","free subdomain","monthly status reports"];
 const feeDetail1=["monthly Status Reports"];
 const freeDetail2=["unlimited projects","50gb storage","unnlimited public projects","community access","unlimited public pro"]
 const freedetail3=["unlimited users","50gb storage","unlimited public projects","community projects","unlimited private projects","dedicated phone support","free subdomain","monthly status report"]
  return (
    <>
    <div className='app'>
      <Card title="Free" subtitle="$0/Month" offer={freDetails} paid={feeDetails}></Card>
      <Card title="plus" subtitle="$9/Month" offer={freeDetail2} paid={feeDetail1} ></Card>
      <Card title="pro"  subtitle="$49/Month" offer={freedetail3}></Card>
      </div>
      </>
  )
}

export default App
