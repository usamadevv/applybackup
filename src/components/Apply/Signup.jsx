

import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import forx from '../../images/for.png'
import './Apply.css'

const Signup = () => {

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
    <div className="apply">
    <div className="firstapply">
<h1>Join Now</h1>
    </div>
    <div className="secondapply">
        <p>
            Sign up
        </p>
        <h5>
            Email Address
        </h5>
        <input type="text" placeholder='Enter your Email Address' />
        <h5>
             Create new password
        </h5>
        <input type="text"  placeholder='Enter your password'/>
        
<button className='cont2' onClick={e=>navigateToPage('/page-0')}>Sign up</button>     


        </div>
    </div>
  )
}

export default Signup