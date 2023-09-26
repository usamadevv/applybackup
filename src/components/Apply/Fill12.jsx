

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import forx from '../../images/for.png'
import './Apply.css'

const Fill12 = () => {
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
     
      <h5>Step 4: Other Adjustments (Optional)

      </h5>
  

  

<div className="choicepoint choicepoints">

    <p>
    (a) Other income (not from jobs):
    </p>

    <input type="text"  />
</div>


<div className="choicepoint choicepoints">

    <p>
    (b) Deductions
    </p>

    <input type="text"  />
</div>



<div className="choicepoint choicepoints">

    <p>(c) Extra withholding
    </p>

    <input type="text"  />
</div>




     
        <button className='cont2' onClick={e=>navigateToPage('/page-12')}>Next</button>


    </div>
  )
}

export default Fill12