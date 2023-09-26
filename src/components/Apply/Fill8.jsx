

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import forx from '../../images/for.png'
import './Apply.css'

const Fill8 = () => {
    const [yes, setyes] = useState('No')
    useEffect(() => {
        window.scrollTo(0, 0);
    
      return () => {
        
      }
    }, [])
    
    const history = useHistory();

  const navigateToPage = (pageUrl) => {
    history.push(pageUrl);
  };
  
  return (
    <div className="applyx applyx2x">
        <h1>Choose one from below</h1>
        <div className="selects selects2x">

<div className="yes" onClick={e=>navigateToPage('page-8')} style={yes==='Yes'?{backgroundColor:'#061F5C',color:'white'}:{backgroundColor:'white',color:'#061F5C'}}>
    W-4
</div>
<div className="yes" onClick={e=>navigateToPage('w9form-1')} style={yes==='No'?{backgroundColor:'#061F5C',color:'white'}:{backgroundColor:'white',color:'#061F5C'}}>
W-9
</div>
        </div>

    </div>
  )
}

export default Fill8