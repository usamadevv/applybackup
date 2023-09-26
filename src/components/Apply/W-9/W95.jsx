

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import images from '../../../images/w93.png'

import '.././Apply.css'

const W95= () => {
    const [yes1, setyes1] = useState('Yes')
    const [yes2, setyes2] = useState('Yes')
    const [yes3, setyes3] = useState('Yes')

    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    
      return () => {
        
      }
    }, [])
    
  const navigateToPage = (pageUrl) => {
    history.push(pageUrl);
  };
    const [yes4, setyes4] = useState('Yes')
    const [yes5, setyes5] = useState('Yes')
  return (
    <div className="applyx">
 
 <img src={images} className='imjh' alt="" />

     
        <button className='cont2' onClick={e=>navigateToPage('/w9form-6')}>Next</button>


    </div>
  )
}

export default W95