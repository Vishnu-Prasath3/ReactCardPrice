import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  
 
 const freeDetails=["single user","50 gbstorage","unlimited public projects","community access"];
 const feeDetails=["unlimited private projects","dedicated phone support","free subdomain","monthly status reports"];
 
 const freeDetail1=["5-users","50gb storage","unlimited public projects","community access","unlimited private projects","dedicated phone support"]
 const feeDetail1=["monthly Status Reports"];
 
 const freeDetail2=["unlimited projects","50gb storage","unnlimited public projects","community access","unlimited public pro"]
 const freedetail3=["unlimited users","50gb storage","unlimited public projects","community projects","unlimited private projects","dedicated phone support","free subdomain","monthly status report"]
  return (
    <>
    <div className='app'>
      <Card title="Free" subtitle="$0/Month" freeDetails={freeDetails} feeDetails={feeDetails}></Card>
      <Card title="plus" subtitle="$9/Month" freDetails={freeDetail2} feeDetails={feeDetail1} ></Card>
      <Card title="pro"  subtitle="$49/Month" freDetails={freedetail3}></Card>
      </div>
      </>
  )
}

export default App
