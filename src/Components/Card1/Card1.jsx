import React from 'react'
import './Card1.css'
import {PersonOutline} from '@mui/icons-material/';
import {CloudDownloadOutlined} from '@mui/icons-material';
import {MailOutline} from '@mui/icons-material/';
export default function Card1() {
  return (
    <>
      
               <div class="card mb-4">
                <div class="card-body">
                    <h2 class="card-title">Basic</h2>
                    <p class="card-subtitle mb-2 text-muted">$ 89.99/mo</p>
                    <h1 class="card-text">$ 9.99/mo</h1>
                    <button class="btn btn-warning btn-sm ">Get Started <span className='arrow'>&#x2192;</span> </button>
                    <hr />
                    <div>
                    <h6 className='card-text-get'>
                        What you'll get :
                    </h6>
                    <div>
                    <p><PersonOutline/><span className='ml-2'>npm bbjb</span></p>
                    <p><CloudDownloadOutlined/><span className='ml-2'>npm bbjb</span></p>
                    <p><MailOutline/><span className='ml-2'>npm bbjb</span></p>

                    </div>
                    </div>
                    <div><h5 className='explore'>EXPLORE FEATURES</h5></div>
                    

                </div>
            </div>

    
    </>
  )
}
