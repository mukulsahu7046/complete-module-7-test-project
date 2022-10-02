import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='container'>
            <div className='contents'>
                <p className='subheading'>SUMMER 2020</p>
                <h1 className='heading'>NEW COLLECTION</h1>
                <p className='p1'>We know how large objects will act,</p>
                <p className='p1'>but things on a small scale.</p>
                <button className ='btn'>SHOP NOW</button>
            </div>
            <div className='image'>
                <img src='https://cosmic-smakager-a59a4a.netlify.app/none.png' alt ='no img found' />
            </div>
        </div>
    </div>
  )
}

export default Banner