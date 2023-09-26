

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import forx from '../../images/for.png'
import './Apply.css'

const Fill5 = () => {
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
        <h1>Direct Deposit Set-Up</h1>
     
        <input type="text" placeholder='Name'/>
    
        <input type="text" placeholder='SSN (Last 4 digits only)'/>
    
        <input type="text" placeholder='Bank anme'/>
    
        <input type="text" placeholder='State'/>
        <input type="text" placeholder='City'/>
    
        <input type="text" placeholder='Routing #'/>
    
        <input type="text" placeholder='Account #'/>
   <div className="radio">
   <input type="radio" />
   <p>Checkin account</p>
   </div>
   <div className="radio">
   <input type="radio" />
   <p>Savings account</p>
   </div>
    
       <h2>Employees must understand that there are possible delays in processing direct deposits.</h2>

<h2>I understand that my direct deposit cannot be guaranteed to be in my account on the actual payday due to input errors, bank holidays or time delays between our bank and other financial institutions.

</h2>
<h2>I hereby authorize to deposit my net pay directly into my account and to initiate, if necessary, debit entries and adjustments to correct any credit entries made in error to my account. The authorization will remain in force until I revoke it by giving written notice to Payroll.

</h2>
        <button className='cont2' onClick={e=>navigateToPage('/page-5')}>Submit</button>
        <button className='cont4' style={{marginTop:'-20px'}}>Skip</button>


    </div>
  )
}

export default Fill5