

import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import forx from '../../images/for.png'
import './Apply.css'

const Forgot2 = () => {

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
    <h1>Please check your email
</h1>
<h2>We’ve sent a code to loremipsum123@gmail.com
</h2>

<input style={{marginTop:'30px'}} type="
" />
<button className='cont3' onClick={e=>navigateToPage('/forgot3')}>Submit</button>
    
</div>
    </div>
  )
}

export default Forgot2