

import React, { useEffect } from 'react'
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
  
  return (
    <div className="applyx">
        <h1>Upload Documents</h1>
      <h2>Upload your documents such as ss, Id, Certification, Driving license etc.</h2>
      <select name="cars" id="cars">
  <option value="volvo">Trade </option>
  <option value="saab">Trade B</option>
  <option value="mercedes">Trade C</option>
  <option value="audi">Trade D</option>
</select>
     
 <button className='cont4'>Take a photo</button>


 <button className='cont2' onClick={e=>navigateToPage('/page-6')}>Submit</button>


    </div>
  )
}

export default Fill6