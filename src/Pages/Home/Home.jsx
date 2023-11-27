import React from 'react'
import './Home.css'
import Card1 from '../../Components/Card1/Card1'
import Card2 from '../../Components/Card2/Card2'

export default function Home() {
  return (
    <>
 <div className='container'>
    <div className='p-2'>
    <h3>Choose aplan that's just right for you  !</h3>
    </div>
    
 <div class="card-deck "  >
  <Card1/>
  <Card1/>
  <Card1/>
  </div> 
 
  <div class="card-deck"  >
<Card2/>
<Card2/>
  </div>

     </div>   
 

 
    </>
  )
}
