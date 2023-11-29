import React from 'react'
import './Home.css'
import Card1 from '../../Components/Card1/Card1'
import Card2 from '../../Components/Card2/Card2'
import Nav from '../../Components/Navbar/Nav'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Button from '../../Components/Button'
import { CloudDownloadOutlined, DoneAll, MailOutline, PersonOutline } from '@mui/icons-material'

export default function Home() {
  const handledetails = () => {
    return (
      <div>
                    <h6 className='card-text-get'>
                        What you'll get :
                    </h6>
                    <div>
                    <p><PersonOutline/><span className='ml-2'>Upto 8 Users</span></p>
                    <p><CloudDownloadOutlined/><span className='ml-2'>Upto 3gb Storage</span></p>
                    <p><MailOutline/><span className='ml-2'>Email Support</span></p>
                    <div className='d-flex'>
                    <p><DoneAll/></p><span className='ml-2 'style={{width:"50%"}} >Basics of Documents,Task Flow,Volting,Accounting,Banking,Notes,Investor,Director and Team Management included.</span></div>
                    </div>
                    </div> 
    );
  };

  const handledata=()=>{
    return (
      <div>
                    <h6 className='card-text-get'>
                        What you'll get :
                    </h6>
                    <div>
                    <p><PersonOutline/><span className='ml-2'>More than 75 Users</span></p>
                   
                    <div className='d-flex'>
                    <p><DoneAll/></p><span className='ml-2 'style={{width:"70%"}} >Customization of all other features</span></div>
                    </div>
                    </div> 
    );

  }

  return (
    <>
    <Nav/>
    <div className='wrapper  align-item-stretch'>
      
      <Sidebar/>
     
       
        <div className='container'>
    <div className='p-2'>
    <h3>Choose aplan that's just right for you  !</h3>
    </div>
    
<div className='mb-2'>
<div class="switches-container">
    <input type="radio" id="switchMonthly" name="switchPlan" value="Monthly" checked="checked" />
    <input type="radio" id="switchYearly" name="switchPlan" value="Yearly" />
    <label for="switchMonthly">Monthly</label>
    <label for="switchYearly">Annually</label>
    <div class="switch-wrapper">
      <div class="switch">
        <div>Monthly</div>
        <div>Annually</div>
      </div>
    </div>
  </div>
  </div>
 <div class="card-deck"  >
  <Card1 title={"Basic"} subtitle={"$ 89.99/mo"} text={"$ 9.99/mo"} button={"#eaea9b"} user="Upto 25 Users" storage={"Upto 25gb Storage"} email={"Email Support"}/>
  <Card1 title={"Standard"} subtitle={"$ 189.99/mo"} text={"$ 99.99/mo"}  button={"rgb(221 118 129)"} user="Upto 50 Users"storage={"Upto 60gb Storage"} email={"Email+Chat Support"}/>
  <Card1 title={"Premium"} subtitle={"$ 389.99/mo"} text={"$199.99/mo"} button={"rgb(237 135 196)"}user="Upto 75 Users"storage={"Upto 100gb Storage"} email={"Email+Chat+Whatsapp Support"}/>
  </div> 
 
  <div class="card-deck"  >
<Card2 title={"Free Starter"} text={"The quickest and easiest way to try Protocols with basic functionalities"}user=" upto 8 Users" storage="Upto 3gb to Storage" handledetails={handledetails()} button={"rgb(169 241 62)"}round={"Free for ever"}btndata={"Get Started"}/>
<Card2 title={"Enterprise Plan"}text={"Effortlessly customize and fine-tune services as your needs shift,ensuring the perfect tools for success" }handledetails={handledata()} button={"rgb(144 145 237)"}round={"Let's Connect"}btndata={"Contact Us"}/>
  </div>

     </div>  
    </div>
  
 

 
    </>
  )
}
