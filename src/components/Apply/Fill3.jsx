

import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import forx from '../../images/for.png'
import './Apply.css'

const Fill3 = () => {

    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
    
      return () => {
        
      }
    }, [])


  const navigateToPage = (pageUrl) => {
    history.push(pageUrl);
  };
  
  return (
    <div className="applyx">
        <h1>Employer’s Details</h1>
        <div className="selects">
        <select name="cars" id="cars">
  <option value="volvo">From </option>
  <option value="saab">Trade B</option>
  <option value="mercedes">Trade C</option>
  <option value="audi">Trade D</option>
</select>
<select name="cars" id="cars">
  <option value="volvo">To</option>
  <option value="saab">Trade B</option>
  <option value="mercedes">Trade C</option>
  <option value="audi">Trade D</option>
</select>
        </div>
        <input type="text" placeholder='Employer name'/>
        <input type="text" placeholder='Address' />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='City and zip code'/>
       <input type="text" placeholder='Telephone'/>
      
      <div className="selects">
        <input type="text" placeholder='Start Pay'/>
        <input type="text" placeholder='Last Pay' />
      </div>
       <input type="text" placeholder='Job title' />
       <input type="text" placeholder='Reason for leaving' />
       <input type="text" placeholder='Descrive the work you did'/>
     
       <button className='cont4'>+ Add another employer </button>


        <button className='cont2' onClick={e=>navigateToPage('/page-3')}>Next</button>


    </div>
  )
}

export default Fill3