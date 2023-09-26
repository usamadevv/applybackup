

import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import forx from '../../images/for.png'
import './Apply.css'

const Fill1 = () => {
    const history = useHistory();

  const navigateToPage = (pageUrl) => {
    history.push(pageUrl);
  };
  return (
    <div className="applyx">
        <h1>Lorem Ipsum Dolor</h1>
        <h2>Sed maximus condimentum accumsan. Fusce rhoncus laoreet justo, quis mattis tellus pulvinar sit amet.</h2>
        <div className="selects">
        <select name="cars" id="cars">
  <option value="volvo">Trade </option>
  <option value="saab">Trade B</option>
  <option value="mercedes">Trade C</option>
  <option value="audi">Trade D</option>
</select>
<select name="cars" id="cars">
  <option value="volvo">Experience</option>
  <option value="saab">Trade B</option>
  <option value="mercedes">Trade C</option>
  <option value="audi">Trade D</option>
</select>
        </div>
        <input type="text" placeholder='First name and middle initial'/>
        <input type="text" placeholder='Last NAme' />
        <input type="text" placeholder='SSN' />
        <input type="text" placeholder='Address'/>

        <div className="selects">
        <select name="cars" id="cars">
  <option value="volvo">State </option>
  <option value="saab">Trade B</option>
  <option value="mercedes">Trade C</option>
  <option value="audi">Trade D</option>
</select>
<input type="text" placeholder='Zip' />
        </div>
        <div className="selects">
        <select name="cars" id="cars">
  <option value="volvo">State </option>
  <option value="saab">Trade B</option>
  <option value="mercedes">Trade C</option>
  <option value="audi">Trade D</option>
</select>
<div className="kkk"></div>

        </div>
        <h4>
    Enter your date of birth
</h4>
<div className="selects2">
        <select name="cars" id="cars">
  <option value="volvo">Month </option>
  <option value="saab">Trade B</option>
  <option value="mercedes">Trade C</option>
  <option value="audi">Trade D</option>
</select>
<select name="cars" id="cars">
  <option value="volvo">Date </option>
  <option value="saab">Trade B</option>
  <option value="mercedes">Trade C</option>
  <option value="audi">Trade D</option>
</select>
<select name="cars" id="cars">
  <option value="volvo">Year </option>
  <option value="saab">Trade B</option>
  <option value="mercedes">Trade C</option>
  <option value="audi">Trade D</option>
</select>
</div>

<input type="text" placeholder='Email   ' />
        <input type="text" placeholder='Phone number'/>
        <h6>* All fields needs to be filled in before moving on</h6>
        <button className='cont2' onClick={() => navigateToPage('/page-1')}>Next</button>


    </div>
  )
}

export default Fill1