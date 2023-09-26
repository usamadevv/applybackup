

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import forx from '../../../images/for.png'
import '.././Apply.css'

const W91 = () => {
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
        <h1>W9-Request For Taxpayer Identification Number and Certification</h1>
  
        <input type="text" placeholder='Name (as shown on your income tax return.)*'/>
    
        <input type="text" placeholder='Business name, If different form above'/>
    <h2>Check appropriate box for federal tax classification of the person whose name is entered on line 1. Check only one of the following seven boxes.

    </h2>
      
   <div className="selects">
   <span className="radio">
   <input type="radio" />
   <p>Individual/sole proprietor or single-member LLC</p>
   </span>
<p>

</p>
    
   </div>

   <div className="selects">
   <span className="radio">
   <input type="radio" />
   <p>C Corporation</p>
   </span>
   <span className="radio">
   <input type="radio" />
   <p>S Corporation</p>
   </span>
    
   </div>

   <div className="selects">
   <span className="radio">
   <input type="radio" />
   <p>Partnership</p>
   </span>
   <span className="radio">
   <input type="radio" />
   <p>Trust/estate</p>
   </span>
    
   </div>
   <span className="radio">
   <input type="radio" />
   <p>Limited liability company</p>
   </span>
     <h2>Exemptions (codes apply only to certain entities, not individuals; see instructions on page 3):

     </h2>

     <div className="choicepoint choicepoints">

    <p>Exempt payee code (if any)
    </p>

    <input type="text"  />
</div>


<div className="choicepoint choicepoints">

<p>Exemption from FATCA reporting code (if any)
</p>

<input type="text"  />
</div>


        <button className='cont2' onClick={e=>navigateToPage('/w9form-2')}>Next</button>


    </div>
  )
}

export default W91