
import React, { useEffect, useState } from 'react'
import './Apply.css'
import {BiCheck} from 'react-icons/bi'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const Apply = () => {
    const [lang, setlang] = useState('eng')

    const history = useHistory();

  const navigateToPage = (pageUrl) => {
    history.push(pageUrl);
  };
  
  return (
    <div className="apply">
        <h1>Choose Your language</h1>
        <div className="boxcheck" onClick={e=>setlang('eng')}>
            <p>English</p>
            
            {lang==='eng'?
          <div className="circle2">
                <BiCheck />
            </div>:
  <div className="circle">


  </div>
            }
        </div>
        <div className="boxcheck" onClick={e=>setlang('esp')}>
            <p>Espanol</p>
            {lang==='esp'?
          <div className="circle2">
                <BiCheck />
            </div>:
  <div className="circle">


  </div>
            }
            
        </div>
        <div className="boxcheck" onClick={e=>setlang('fra')}>
            <p>Francais</p>
            {lang==='fra'?
          <div className="circle2">
                <BiCheck />
            </div>:
  <div className="circle">


  </div>
            }
        </div>
        <button className='cont' onClick={e=>navigateToPage('/login')}>Continue</button>

    </div>
  )
}

export default Apply