import React, { useEffect } from 'react'
import {FaCheck} from 'react-icons/fa'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Passwordupd = () => {

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
    <div className="apply2">
        <h1>Password updated</h1>

<div className="circ">
    <FaCheck />

</div>
        <h2>Your password has been updated!</h2>
        <button className='cont3' onClick={e=>navigateToPage('/login')} >Continue</button>
    </div>

  )
}

export default Passwordupd