

import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './Apply.css'
const Login = () => {
    
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
<h1>Welcome</h1>
    </div>
    <div className="secondapply">
        <p>
            Login
        </p>
        <h5>
            Email Address
        </h5>
        <input type="text" placeholder='Enter your Email Address' />
        <h5>
             Password
        </h5>
        <input type="text"  placeholder='Enter your password'/>
        <h4 onClick={e=>navigateToPage('/forgot')}>
            Forgot Your password
        </h4>
<button className='cont2'>Continue</button>     


<h4 onClick={e=>navigateToPage('/signup')}>
    Don't have an account? Sign up
</h4>
        </div>
    </div>
  )
}

export default Login