

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import forx from '../../images/for.png'
import './Apply.css'

const Fill9 = () => {
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
        <h1>W4-Employee's Withholding Certificate</h1>
     <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat dignissim est.</h2>
     <h5>Step 1: Enter Personal Information</h5>
        <input type="text" placeholder='First name and middle initial'/>
    
        <input type="text" placeholder='Last name'/>
    
        <input type="text" placeholder='Address'/>
    
        <input type="text" placeholder='City or town, state, and ZIP code'/>
        <input type="text" placeholder='Social security number'/>
    
     <h2>Marital status</h2>
   <div className="selects">
   <span className="radio">
   <input type="radio" />
   <p>Single</p>
   </span>
   <span className="radio">
   <input type="radio" />
   <p>Married</p>
   </span>
    
   </div>

   <div className="selects">
   <span className="radio">
   <input type="radio" />
   <p>Married filing jointly</p>
   </span>
   <span className="radio">
   <input type="radio" />
   <p>Qualifying surviving spouse</p>
   </span>
    
   </div>
   <span className="radio">
   <input type="radio" />
   <p>Head of household</p>
   </span>
     
        <button className='cont2' onClick={e=>navigateToPage('/page-9')}>Next</button>


    </div>
  )
}

export default Fill9