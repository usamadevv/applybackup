

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import forx from '../../images/for.png'
import './Apply.css'

const Fill17 = () => {
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
     
      <h5>Step 4(b)—Deductions Worksheet
      </h5>
  <h2>(Keep for your records.)

  </h2>



<div className="choicepoint choicepoints">

    <p>
    1. Enter an estimate of your 2023   itemized deductions...
    </p>

    <input type="text"  />
</div>
<h2>2. Enter:</h2>


<div className="choicepoint choicepoints">

    <p>
    3. Enter an estimate of your student loan interest, deductible IRA contributions, and certain other adjustments (from Part II of Schedule 1 (Form 1040)). See Pub. 505 for more information
     </p>

    <input type="text"  />
</div>



<div className="choicepoint choicepoints">

    <p>4. Enter an estimate of your student loan interest, deductible IRA contributions, and certain other adjustments (from Part II of Schedule 1 (Form 1040)). See Pub. 505 for more information
          </p>

    <input type="text"  />
</div>



<div className="choicepoint choicepoints">

    <p>5. Add lines 3 and 4. Enter the result here and in Step 4(b) of Form W-4
          </p>

    <input type="text"  />
</div>
<h2>

5. Add lines 3 and 4. Enter the result here and in Step 4(b) of Form W-4
</h2>






     
        <button className='cont2' onClick={e=>navigateToPage('/page-17')}>Next</button>


    </div>
  )
}

export default Fill17