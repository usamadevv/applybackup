

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import forx from '../../images/for.png'
import './Apply.css'

const Fill11 = () => {
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
     
      <h5>Step 3: Claim Dependent and Other Credits

      </h5>
  
  <h2>If your total income will be $200,000 or less ($400,000 or less if married filing jointly):

  </h2>
  

<div className="choicepoint choicepoints">

    <p>
    Multiply the number of qualifying children under age 17 by $2,000

    </p>

    <input type="text"  />
</div>


<div className="choicepoint choicepoints">

    <p>
    Multiply the number of other dependents by $500
    </p>

    <input type="text"  />
</div>



<div className="choicepoint choicepoints">

    <p>Add the amounts above for qualifying children and other dependents. You may add to this the amount of any other credits. Enter the total here

    </p>

    <input type="text"  />
</div>




     
        <button className='cont2' onClick={e=>navigateToPage('/page-11')}>Next</button>


    </div>
  )
}

export default Fill11