

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import forx from '../../images/for.png'
import './Apply.css'

const Fill4 = () => {
    const [yes1, setyes1] = useState('Yes')
    const [yes2, setyes2] = useState('Yes')
    useEffect(() => {
        window.scrollTo(0, 0);
    
      return () => {
        
      }
    }, [])
    

    
    const history = useHistory();

  const navigateToPage = (pageUrl) => {
    history.push(pageUrl);
  };
    const [yes3, setyes3] = useState('Yes')
    const [yes4, setyes4] = useState('Yes')
    const [yes5, setyes5] = useState('Yes')
  return (
    <div className="applyx">
        <h1>Lorem Ipsum Dolor</h1>
        <h2>Sed maximus condimentum accumsan. Fusce rhoncus laoreet justo, quis mattis tellus pulvinar sit amet.</h2>
      
        <input type="text" placeholder='What positions are you applying for?'/>
     <h2>Are you a citizen of the U.S.?</h2>
        <div className="selects">

<div className="yes" onClick={e=>setyes1('Yes')} style={yes1==='Yes'?{backgroundColor:'#061F5C',color:'white'}:{backgroundColor:'white',color:'#061F5C'}}>
    Yes
</div>
<div className="yes" onClick={e=>setyes1('No')} style={yes1==='No'?{backgroundColor:'#061F5C',color:'white'}:{backgroundColor:'white',color:'#061F5C'}}>
No
</div>
        </div>
        <h2>If no, are you authorized to work in U.S?</h2>
        <div className="selects">

<div className="yes" onClick={e=>setyes2('Yes')} style={yes2==='Yes'?{backgroundColor:'#061F5C',color:'white'}:{backgroundColor:'white',color:'#061F5C'}}>
    Yes
</div>
<div className="yes" onClick={e=>setyes2('No')} style={yes2==='No'?{backgroundColor:'#061F5C',color:'white'}:{backgroundColor:'white',color:'#061F5C'}}>
No
</div>
        </div>
        
        <h2>Have you ever been convicted of a felony?</h2>
        <div className="selects">

<div className="yes" onClick={e=>setyes3('Yes')} style={yes3==='Yes'?{backgroundColor:'#061F5C',color:'white'}:{backgroundColor:'white',color:'#061F5C'}}>
    Yes
</div>
<div className="yes" onClick={e=>setyes3('No')} style={yes3==='No'?{backgroundColor:'#061F5C',color:'white'}:{backgroundColor:'white',color:'#061F5C'}}>
No
</div>
        </div>
        
        <h2>Have you ever received compensation or medical benefits under workers compensation?</h2>
        <div className="selects">

<div className="yes" onClick={e=>setyes4('Yes')} style={yes4==='Yes'?{backgroundColor:'#061F5C',color:'white'}:{backgroundColor:'white',color:'#061F5C'}}>
    Yes
</div>
<div className="yes" onClick={e=>setyes4('No')} style={yes4==='No'?{backgroundColor:'#061F5C',color:'white'}:{backgroundColor:'white',color:'#061F5C'}}>
No
</div>
        </div>
        
        <h2>Do you have any other trade skills, training, or experience which may help you qualify for other job positions?</h2>
        <div className="selects">

<div className="yes" onClick={e=>setyes5('Yes')} style={yes5==='Yes'?{backgroundColor:'#061F5C',color:'white'}:{backgroundColor:'white',color:'#061F5C'}}>
    Yes
</div>
<div className="yes" onClick={e=>setyes5('No')} style={yes5==='No'?{backgroundColor:'#061F5C',color:'white'}:{backgroundColor:'white',color:'#061F5C'}}>
No
</div>
        </div>
        <h2>Other skills</h2>
    <div className="selects">
    <input type="text" />
    <input type="text" />
    </div>
        
    <div className="selects">
    <input type="text" />
   <span></span>
    </div>
        
        


        <button className='cont2' onClick={e=>navigateToPage('/page-4')}>Next</button>


    </div>
  )
}

export default Fill4