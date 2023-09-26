

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import forx from '../../images/for.png'
import './Apply.css'

const Fill14 = () => {
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
  <h2>Privacy Act and Paperwork Reduction Act Notice. 
We ask for the information on this form to carry out the Internal Revenue laws of the United States. Internal Revenue Code sections 3402(f) (2) and 6109 and their regulations require you to provide this information; your employer uses it to determine your federal income tax withholding. Failure to provide a properly completed form will result in your being treated as a single person with no other entries on the form; providing fraudulent information may subject you to penalties. Routine uses of this information include giving it to the Department of Justice for civil and criminal litigation; to cities, states, the District of Columbia, and U.S. commonwealths and territories for use in administering their tax laws; and to the Department of Health and Human Services for use in the National Directory of New Hires. We may also disclose this information to other countries under a tax treaty, to federal and state agencies to enforce federal nontax criminal laws, or to federal law enforcement and intelligence agencies to combat terrorism.
</h2>
<h2>You are not required to provide the information requested on a form that is subject to the Paperwork Reduction Act unless the form displays a valid OMB control number. Books or records relating to a form or its instructions must be retained as long as their contents may become material in the administration of any Internal Revenue law. Generally, tax returns and return information are confidential, as required by Code section 6103.

</h2>
<h2>The average time and expenses required to complete and file this form will vary depending on individual circumstances. For estimated averages, see the instructions for your income tax return.

</h2>
<h2>If you have suggestions for making this form simpler, we would be happy to hear from you. See the instructions for your income tax return.

</h2>

     
        <button className='cont2' onClick={e=>navigateToPage('/page-14')}>Next</button>


    </div>
  )
}

export default Fill14