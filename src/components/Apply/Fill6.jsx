

import React, { useEffect, useState } from 'react'
import { FiCheckCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import forx from '../../images/for.png'
import './Apply.css'

const Fill6 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    
      return () => {
        
      }
    }, [])
    
    const history = useHistory();

  const navigateToPage = (pageUrl) => {
    history.push(pageUrl);
  };
  
  const [shoexp, setshoexp] = useState(false)
  
  return (
    <>

{shoexp&&
<div className="shexpp">
<div className="shexp shexpr">

 <div className="rw1">
  <input type="checkbox"  />
  <p>SSID</p>
 </div>
 <div className="rw1">
  
  <input type="checkbox"  />
  <p>Driving License</p>
 </div>
 <div className="rw1">
  <input type="checkbox"  />
  <p>Certifications</p>
 </div>
 <div className="rw1">
  <input type="checkbox"  />
  <p>Criminal record certificate</p>
 </div>
 <div className="btnse">
  <button className='canc' onClick={e=>setshoexp(false)} >Cancel</button>

  <button className='relbtn' ><input type="file"  /> Upload</button> </div>
    </div>
</div>

    }
    <div className="applyx">
        <h1>Upload Documents</h1>
      <h2>Upload your documents such as ss, Id, Certification, Driving license etc.</h2>
     <input type="text" placeholder='Uplaod documents' onClick={e=>setshoexp(true)}  />
     
 <button className='cont4'>Take a photo</button>


 <button className='cont2' onClick={e=>navigateToPage('/page-6')}>Submit</button>


    </div>
    </>
  )
}

export default Fill6