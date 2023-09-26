

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import forx from '../../../images/for.png'
import '.././Apply.css'

const W92 = () => {
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
       <h1>Part-1 Taxpayer Identification Number (TIN)</h1>
 
        <input type="text" placeholder='Social Security Number'/>
    
        <input type="text" placeholder='Employer Identification Number'/>
        <h1>Part-1 Taxpayer Identification Number (TIN)</h1>
 <h1>Part-2 Certification</h1>
 <h2>1. The number shown on this form is my correct taxpayer identification number (or I am waiting for a number to be issued to me); and

 </h2>
<h2>2. I am not subject to backup withholding because: (a) I am exempt from backup withholding, or (b) I have not been notified by the Internal Revenue Service (IRS) that I am subject to backup withholding as a result of a failure to report all interest or dividends, or (c) the IRS has notified me that I am no longer subject to backup withholding; and
    </h2>     
    <h2>3. I am a U.S. citizen or other U.S. person (defined below); and</h2> 

<h2>4. The FATCA code(s) entered on this form (if any) indicating that I am exempt from FATCA reporting is correct.

</h2>
<h2>Certification Instructions</h2>


        <button className='cont2' onClick={e=>navigateToPage('/w9form-3')}>Next</button>


    </div>
  )
}

export default W92