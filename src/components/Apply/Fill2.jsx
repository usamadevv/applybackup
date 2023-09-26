

import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import forx from '../../images/for.png'
import './Apply.css'

const Fill2 = () => {
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
        <h1>Educational Details</h1>
        <h5>High School</h5>
       
        <input type="text" placeholder='Name of School'/>
        <input type="text" placeholder='# of years completed' />
        <input type="text" placeholder='Program of study' />
        <input type="text" placeholder='Degrees / Diploma received'/>
        <h5> College/University</h5>
       
       <input type="text" placeholder='Name of college / university'/>
       <input type="text" placeholder='# of years completed' />
       <input type="text" placeholder='Program of study' />
       <input type="text" placeholder='Degrees / Diploma received'/>
       <h5> Trade School</h5>
       
       <input type="text" placeholder='Name of Trade school'/>
       <input type="text" placeholder='# of years completed' />
       <input type="text" placeholder='Program of study' />
       <input type="text" placeholder='Degrees / Diploma received'/>


        <button className='cont2' onClick={e=>navigateToPage('/page-2')}>Next</button>


    </div>
  )
}

export default Fill2