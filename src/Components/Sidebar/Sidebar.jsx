import React from 'react'
import './Sidebar.css'
import {PowerSettingsNew} from '@mui/icons-material/';
export default function Sidebar() {
  return (
    <>
    <div className='col-lg-2 p-1'>
    <div className='card '>
        <div class="p-4 pt-5">
            <img src="https://t3.ftcdn.net/jpg/06/16/81/96/240_F_616819660_6Oqu4lqMKuCoN8Rx9qGfSM9Wivf01rvi.jpg" alt=""className='rounded-circle mb-5 logo' />
           <center>
           <h6>Ram Mohan</h6>
            <p className='user'>rammohan2@gmail.com</p>
            
           </center>
           </div>
            </div>

            <div className='card'>
            <ul className='list-unstyled   p-0 m-0'>
            <li className='active mt-4' style={{ display: 'flex', alignItems: 'center' }}>
         <div className='card card-li d-flex '>
        <div style={{fontSize:"12px"}}><img src="https://cdn-icons-png.flaticon.com/128/5544/5544655.png?ga=GA1.1.2037967380.1654494456&semt=ais" alt="" style={{ width: "20px", marginRight:"10%" }} />Dashboard
       
        </div>
     
    </div>
</li>
        <li className=' mt-4 '>
        <div className='card card-li d-flex '>
        <div style={{fontSize:"12px"}}><img src="https://cdn-icons-png.flaticon.com/128/5453/5453423.png?ga=GA1.1.2037967380.1654494456&semt=ais" alt="" style={{ width: "20px", marginRight:"10%" }} />Perks
       
        </div>
     
    </div>
        </li>
        <li className=' mt-4 '>
        <div className='card card-li d-flex '>
        <div style={{fontSize:"12px"}}><img src="https://cdn-icons-png.flaticon.com/128/1417/1417215.png?ga=GA1.1.2037967380.1654494456&semt=ais" alt="" style={{ width: "20px", marginRight:"10%" }} />Addons
       
        </div>
     
    </div>
        </li>
        <li  className=' mt-4 '>
        <div className='card card-li d-flex '>
        <div style={{fontSize:"12px",}}><img src="https://cdn-icons-png.flaticon.com/128/1636/1636063.png?ga=GA1.1.2037967380.1654494456&semt=ais" alt="" style={{ width: "20px", marginRight:"10%" }} />FAQ
       
        </div>
     
    </div>
        </li>
        <li className=' mt-4 '>
        <div className='card card-li d-flex '>
        <div style={{fontSize:"12px"}}><img src="https://cdn-icons-png.flaticon.com/128/5961/5961050.png?ga=GA1.1.2037967380.1654494456&semt=ais" alt="" style={{ width: "20px", marginRight:"10%" }} />Support
       
        </div>
     
    </div>
        </li>
<li class="footer ">
<div class="card-footer text-center">Logout <PowerSettingsNew/></div>
</li>


        </ul>
       
        
            </div>
           
    
    </div>
    
    
    </>
  )
}
