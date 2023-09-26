

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import forx from '../../images/for.png'
import './Apply.css'

const Fill13 = () => {
    const [yes1, setyes1] = useState('Yes')
    const [yes2, setyes2] = useState('Yes')
    const [yes3, setyes3] = useState('Yes')

    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    
      return () => {
        
      }
    }, [])
    
  const navigateToPage = (pageUrl) => {
    history.push(pageUrl);
  };
    const [yes4, setyes4] = useState('Yes')
    const [yes5, setyes5] = useState('Yes')
  return (
    <div className="applyx">
     
      <h5>Step 5: Sign Here
      </h5>
  <h2>Under penalties of perjury. I declare that this certificate, to the best of my knowledge and belief, is true, correct, and complete.

  </h2>





     
        <button className='cont2' onClick={e=>navigateToPage('/page-13')}>Next</button>


    </div>
  )
}

export default Fill13