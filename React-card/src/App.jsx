import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  
 
 const freeDetails=["single user","50 gbstorage","unlimited public projects","community access"];
 const feeDetails=["unlimited private projects","dedicated phone support","free subdomain","monthly status reports"];



  return (
    <>
    <div className='app'>
      <Card title="Free" subtitle="$0/Month" freDetails={freeDetails} feeDetails={feeDetails}></Card>
      <Card title="plus" subtitle="$9/Month"></Card>
      <Card title="pro"  subtitle="$49/Month"></Card>
      </div>
      </>
  )
}

export default App
