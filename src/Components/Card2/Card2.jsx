import React from 'react'
import './Card2.css'
import { CloudDownloadOutlined, MailOutline, PersonOutline,DoneAll } from '@mui/icons-material'
export default function Card2() {
  return (
    <>
    <div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-md-6">
            <button class="round">Free forever</button>
                <h2 class="card-title">Free Starter</h2>
                <p class="card-subtitle mb-2">The quickest and easiest way to try Protocols with basic functionalities</p>
                <button class="btn btn-warning btn-sm ">Get Started <span className='arrow'>&#x2192;</span> </button>
            </div>
            <div class="col-md-6">
            <div>
                    <h6 className='card-text-get'>
                        What you'll get :
                    </h6>
                    <div>
                    <p><PersonOutline/><span className='ml-2'>npm bbjb</span></p>
                    <p><CloudDownloadOutlined/><span className='ml-2'>npm bbjb</span></p>
                    <p><MailOutline/><span className='ml-2'>npm bbjb</span></p>
                    <div className='d-flex'>
                    <p><DoneAll/></p><span className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dignissimos maxime culpa, exercitationem quo enim expedita dolorem vitae quibusdam sint</span></div>
                    </div>
                    </div> 
            

                {/* <h2 class="card-title">Right Side</h2>
                <p class="card-subtitle mb-2 text-muted">$ 99.99/mo</p>
                <h1 class="card-text">$ 19.99/mo</h1>
                <button class="btn btn-sm">Get Started <span class='arrow'>&#x2192;</span> </button> */}
            </div>
        </div>
    </div>
</div>
    
    </>
  )
}
