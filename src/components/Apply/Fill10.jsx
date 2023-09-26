

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import forx from '../../images/for.png'
import './Apply.css'

const Fill10 = () => {
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
     
      <h5>Complete Steps 2-4 ONLY if they apply to you; otherwise, skip to Step 5.</h5>
     <h2>See page 2 for more information on each step, who can claim exemption from withholding, other details, and privacy.

     </h2>
     <h2>Skip</h2>
     <h5>Step 2: Multiple Jobs or Spouse Works</h5>
<h2>Complete this step if you (1) hold more than one job at a time, or (2) are married filing jointly and your spouse also works. The correct amount of withholding depends on income earned from all of these jobs.

</h2>


<div className="choicepoint">

    <p>
    Do only one of the following.

    </p>

    <input type="checkbox"  />
</div>



<div className="choicepoint">
    
    <p>
    Reserved for future use.
    </p>

    <input type="checkbox"  />
</div>

<div className="choicepoint">
    
    <p>
    Use the Multiple Jobs Worksheet on page 3 and enter the result in Step 4(c) below;

    </p>

    <input type="checkbox"  />
</div>

<div className="choicepoint">
    
    <p>
    If there are only two jobs total, you may check this box. Do the same on Form W-4 for the other job. This option is generally more accurate than (b) if pay at the lower paying job is more than half of the pay at the higher paying job. Otherwise, (b) is more accurate
    </p>

    <input type="checkbox"  />
</div>

      <h2>If you have self-employment income, see page 2.</h2>

     
        <button className='cont2' onClick={e=>navigateToPage('/page-10')}>Next</button>


    </div>
  )
}

export default Fill10