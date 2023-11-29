import React from 'react'
import './Card2.css'
import { CloudDownloadOutlined, MailOutline, PersonOutline,DoneAll } from '@mui/icons-material'
export default function Card2(props) {
    const data=props.button
    
  return (
    <>
    <div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-md-6">
            <button class="round" style={{backgroundColor:data}}>{props.round}</button>
                <h3 class="card-title">{props.title}</h3>
                <p class="card-subtitle mb-2 user">{props.text}</p>
                <button class="btn btn-sm "style={{backgroundColor:data}}>Get Started{props.btndata} <span className='arrow'>&#x2192;</span> </button>
                    
            </div>
            <div class="col-md-6 d-flex align-items-center ">
            
     <div className='user'> 
     {props.handledetails}
        </div>       
            </div>
        </div>
    </div>
</div>
    
    </>
  )
}
