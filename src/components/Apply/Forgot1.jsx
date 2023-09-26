

import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import forx from '../../images/for.png'
import './Apply.css'

const Forgot = () => {

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
  <div className="firstapp">
    <img src={forx} alt="" />

  </div>

<div className="secondapp">
    <h1>Forgot password?
</h1>
<h2>Enter your email for the verification process, We will send 4 digits code to your email
Typography
</h2>
<p>Email address

</p>
<input type="
" />
<button className='cont3' onClick={e=>navigateToPage('/forgot2')}>Submit</button>
    
</div>
    </div>
  )
}

export default Forgot