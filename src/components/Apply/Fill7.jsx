

import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import forx from '../../images/for.png'
import './Apply.css'

const Fill7 = () => {

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
        <h1>Criminal Conviction History</h1>
        <h2>
        If you have ever been convicted of any crime, even if set aside or expunged, please give the details of the offense(s) for which convicted, date(s) of conviction(s), jurisdiction(s) (court, city, county, state, federal, foreign or military), and disposition(s). Please see above for definition of "crime" and "convicted". If you do not have any criminal convictions, annotate in the boxes below "N/A". (If you need more space, attach an additional sheet.)
        </h2>
        <div className="selects">
    <input type="text" placeholder='Date' />
    <input type="text" placeholder='Type of conviction' />
    </div>

    <div className="selects">
    <input type="text" placeholder=' Misdemeanor or Felony' />
    <input type="text" placeholder='Disposition' />
    </div>


    <div className="selects">
    <input type="text" placeholder=' Law enforcement agency' />
    <input type="text" placeholder='Jurisdiction' />
    </div>
    <div className="selects">
    <input type="text" placeholder=' Other - Federal, Foreign, Military' />
<p></p>
    </div>
    <h2>My signature below certifies that I have truthfully disclosed all criminal conviction history.</h2>

    <div className="selects">
    <input type="text" placeholder='Printed name' />
    <input type="text" placeholder='Date' />
    </div>

   
    
       <button className='cont4'>+ Add </button>


        <button className='cont2' onClick={e=>navigateToPage('/page-7')}>Submit</button>


    </div>
  )
}

export default Fill7