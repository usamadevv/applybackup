

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import forx from '../../images/for.png'
import './Apply.css'

const Fill16 = () => {
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
     
      <h5>Step 2(b) - Multiple Jobs Worksheet
      </h5>
  <h2>(Keep for your records.)

  </h2>

  <h2>If you choose the option in Step 2(b) on Form W-4, complete this worksheet (which calculates the total extra tax for all jobs) on only ONE Form W-4. Withholding will be most accurate if you complete the worksheet and enter the result on the Form W-4 for the highest paying job. To be accurate, submit a new Form W-4 for all other jobs if you have not updated your withholding since 2019.

  </h2>
  <h2>Note: If more than one job has annual wages of more than $120,000 or there are more than three jobs, see Pub. 505 for additional tables.

  </h2>

<div className="choicepoint choicepoints">

    <p>
   1: Two jobs
    </p>

    <input type="text"  />
</div>
<h2>2: Three jobs: If you and/or your spouse have three jobs at the same time, complete lines 2a, 2b, and
2c below. Otherwise, skip to line 3.</h2>


<div className="choicepoint choicepoints">

    <p>
    Find the amount from the appropriate table...
    </p>

    <input type="text"  />
</div>



<div className="choicepoint choicepoints">

    <p>(c)Add the annual wages of the two highest paying...
    </p>

    <input type="text"  />
</div>



<div className="choicepoint choicepoints">

    <p>Add the amounts from lines 2a and 2b and enter the result on line 2c
    </p>

    <input type="text"  />
</div>


<div className="choicepoint choicepoints">

    <p>Enter the number of pay periods per year ...
    </p>

    <input type="text"  />
</div>


<div className="choicepoint choicepoints">

    <p>Divide the annual amount on line 1 or line 2c...
    </p>

    <input type="text"  />
</div>




     
        <button className='cont2' onClick={e=>navigateToPage('/page-16')}>Next</button>


    </div>
  )
}

export default Fill16