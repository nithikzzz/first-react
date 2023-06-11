import './index.scss'
import LogoGif from '../../../assets/images/gif.gif'
//import Logo1 from '../../../assets/images/img1.jpg'

import React from 'react'

function Logo() {
  return (
    <div className='Logo-container'>
        <img className='logo' src={LogoGif} alt='Gif' />
        
    </div>
  )
}

export default Logo