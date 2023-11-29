import React from 'react'
import './Card1.css'
import {PersonOutline} from '@mui/icons-material/';
import {CloudDownloadOutlined} from '@mui/icons-material';
import {MailOutline} from '@mui/icons-material/';
import Button from '../Button';
export default function Card1(props) {
  const data=props.button
  return (
    <>
      
               <div class="card mb-4">
                <div class="card-body">
                    <h2 class="card-title">{props.title}</h2>
                    <p class="card-subtitle mb-2 text-muted">{props.subtitle}</p>
                    <h1 class="card-text">{props.text}</h1>
                    <button class="btn btn-sm "style={{backgroundColor:data}}>Get Started <span className='arrow'>&#x2192;</span> </button>
                    <hr />
                    <div>
                    <h6 className='card-text-get'>
                        What you'll get :
                    </h6>
                    <div className='user'>
                    <p><PersonOutline/><span className='ml-2 '>{props.user}</span></p>
                    <p><CloudDownloadOutlined/><span className='ml-2'>{props.storage}</span></p>
                    <p><MailOutline/><span className='ml-2'>{props.email}</span></p>

                    </div>
                    </div>
                    <div><h5 className='explore'>EXPLORE FEATURES</h5></div>
                    

                </div>
            </div>

    
    </>
  )
}
