

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import forx from '../../images/for.png'
import Slider from "react-slick";

import {FiCheckCircle} from 'react-icons/fi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Apply.css'

const Fill1 = () => {
  const items=[0,1,2,3,4,5,6,7,8,9,10,11,12]
  const items2=[0,1,2,3,4,5,6,7,8,9,10,11,12]
  const [months, setmonths] = useState('')
  const [trade, settrade] = useState('')
  function selecttrade(val){
    settrade(val)
    setshotrade(false)
  }
  const [years, setyears] = useState('')
    const history = useHistory();
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
        
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
        setmonths(currentSlide===0?'12':currentSlide-1)
      }
    };
    const settings2 = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
       
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
        setyears(currentSlide===0?'12':currentSlide-1)
      }
    };
  const navigateToPage = (pageUrl) => {
    history.push(pageUrl);
  };
  const [shoexp, setshoexp] = useState(false)
  const [shotrade, setshotrade] = useState(false)
  const [skills, setskills] = useState(['Electrician','Environmental engineer','Plumber'])
  const [searchval, setsearchval] = useState('')
  return (


<>
    {shoexp&&
<div className="shexpp">
<div className="shexp">
  <FiCheckCircle className='iconsh' onClick={e=>setshoexp(false)} />
      <div className="col1exp">
<p>Year</p>
<Slider {...settings2} dots={false} arrows={true} centerMode={true} initialSlide={years?Number(years)+1:0} >
 {items.map((val,index)=>(
  <div className='allsl' key={index} >
  <h3>{val}</h3>
</div>
 ))

 }
          
        </Slider>
      </div>
      <div className="col1exp">
<p>
  Month
</p>
<Slider {...settings} dots={false} arrows={true} centerMode={true} initialSlide={months?Number(months)+1:0}  >
{items2.map((val,index)=>(
  <div className='allsl' key={index} >
  <h3>{val}</h3>
</div>
 ))

 }
        </Slider>
</div>
    </div>
</div>

    }

{shotrade&&
<div className="shexpp">
<div className="shexp2">
  <FiCheckCircle className='iconsh' onClick={e=>setshotrade(false)} />
  <h3>Trade</h3>
<input type="text" placeholder='Search' onChange={e=>setsearchval(e.target.value)} />
{
searchval.length>0?skills&&skills.map(val=>(
 val.toLowerCase().search(searchval.toLowerCase())>=0&&
 <p onClick={e=>selecttrade(val)}>{val}</p>
))
:skills&&skills.map(val=>(
  <p onClick={e=>selecttrade(val)}>{val}</p>
))

}

    </div>
</div>

    }


    <div className="applyx">
        <h1>Lorem Ipsum Dolor</h1>
        <h2>Sed maximus condimentum accumsan. Fusce rhoncus laoreet justo, quis mattis tellus pulvinar sit amet.</h2>
        <div className="selects">
        <div className="subexp" onClick={e=>setshotrade(true)}>
  {!trade?
  <p>Trade</p>:
  <p>{trade}</p>

  }
</div>
<div className="subexp" onClick={e=>setshoexp(true)}>
  {!years&&!months?
  <p>Experience</p>:
  <p>{years} years {months} months</p>

  }
</div>
        </div>
        <input type="text" placeholder='First name and middle initial'/>
        <input type="text" placeholder='Last NAme' />
        <input type="text" placeholder='SSN' />
        <input type="text" placeholder='Address'/>

        <div className="selects">
        <input type="text" placeholder='State' />
<input type="text" placeholder='Zip' />
        </div>
        <div className="selects">
   <input type="text" placeholder='City' />
<div className="kkk"></div>

        </div>
        <h4>
    Enter your date of birth
</h4>
<div className="selects2">
        <select name="cars" id="cars">
  <option value="volvo">Month </option>


  {Array.from({ length: 12 }, (_, index) => (
       
          <option value={index + 1}>{index + 1}</option>
        ))}
</select>
<select name="cars" id="cars">
  <option value="volvo">Date </option>
 
  {Array.from({ length:31 }, (_, index) => (
       
       <option value={index + 1}>{index + 1}</option>
     ))}
</select>
<select name="cars" id="cars">
  <option value="volvo">Year </option>
 
  {Array.from({ length: 60 }, (_, index) => (
       
       <option value={1960+index + 1}>{1960+index + 1}</option>
     ))}
</select>
</div>

<input type="text" placeholder='Email   ' />
        <input type="text" placeholder='Phone number'/>
        <h6>* All fields needs to be filled in before moving on</h6>
        <button className='cont2' onClick={() => navigateToPage('/page-1')}>Next</button>


    </div>
    </>

  )
}

export default Fill1