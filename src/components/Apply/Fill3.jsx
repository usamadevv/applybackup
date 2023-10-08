

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import forx from '../../images/for.png'
import './Apply.css'

import Slider from "react-slick";

import {FiCheckCircle} from 'react-icons/fi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Fill3 = () => {
  const items=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  const items2=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const [months, setmonths] = useState('')
  const [dates, setdates] = useState('')
  const [trade, settrade] = useState('')

  const [years, setyears] = useState('')

  const [months2, setmonths2] = useState('')
  const [dates2, setdates2] = useState('')

  const [years2, setyears2] = useState('')
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
        setmonths(currentSlide===0?'Dec':items2[currentSlide-1])
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
        setdates(currentSlide===0?'31':currentSlide)
      }
    };
    const settings3 = {
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
        setyears(currentSlide===0?`${1960+60}`:currentSlide+1960)
      }
    };
    const settings4 = {
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
        setmonths2(currentSlide===0?'Dec':items2[currentSlide-1])
      }
    };
    const settings5 = {
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
        setdates2(currentSlide===0?'31':currentSlide)
      }
    };
    const settings6 = {
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
        setyears2(currentSlide===0?`${1960+60}`:currentSlide+1960)
      }
    };

  const [shoexp, setshoexp] = useState(false)

  const [shoexp2, setshoexp2] = useState(false)
  const [shotrade, setshotrade] = useState(false)
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
    
      return () => {
        
      }
    }, [])


  const navigateToPage = (pageUrl) => {
    history.push(pageUrl);
  };
  
  return (

    <>
     {shoexp&&
<div className="shexpp">
<div className="shexp">
  <FiCheckCircle className='iconsh' onClick={e=>setshoexp(false)} />
    
      <div className="col1exp">

<Slider {...settings} dots={false} arrows={true} centerMode={true}  >
{items2.map((val,index)=>(
  <div className='allsl' key={index} >
  <h3>{val}</h3>
</div>
 ))

 }
        </Slider>
</div>
<div className="col1exp">

<Slider {...settings2} dots={false} arrows={true} centerMode={true} >
 {items.map((val,index)=>(
  <div className='allsl' key={index} >
  <h3>{val}</h3>
</div>
 ))

 }
          
        </Slider>
      </div>
      <div className="col1exp">

<Slider {...settings3} dots={false} arrows={true} centerMode={true}  >

 
  
  {Array.from({ length: 60 }, (_, index) => (
       
       <div className='allsl' key={index} >
  <h3>{1960+index + 1}</h3>
  </div>
     ))}
          
        </Slider>
      </div>
    </div>
</div>

    }
     {shoexp2&&
<div className="shexpp">
<div className="shexp">
  <FiCheckCircle className='iconsh' onClick={e=>setshoexp2(false)} />
    
      <div className="col1exp">

<Slider {...settings4} dots={false} arrows={true} centerMode={true}  >
{items2.map((val,index)=>(
  <div className='allsl' key={index} >
  <h3>{val}</h3>
</div>
 ))

 }
        </Slider>
</div>
<div className="col1exp">

<Slider {...settings5} dots={false} arrows={true} centerMode={true} >
 {items.map((val,index)=>(
  <div className='allsl' key={index} >
  <h3>{val}</h3>
</div>
 ))

 }
          
        </Slider>
      </div>
      <div className="col1exp">

<Slider {...settings6} dots={false} arrows={true} centerMode={true}  >

 
  
  {Array.from({ length: 60 }, (_, index) => (
       
       <div className='allsl' key={index} >
  <h3>{1960+index + 1}</h3>
  </div>
     ))}
          
        </Slider>
      </div>
    </div>
</div>

    }
    <div className="applyx">
        <h1>Employer’s Details</h1>
        <div className="selects">
        <div className="subexp" onClick={e=>setshoexp(true)}>
  {!years&&!months?
  <p>From</p>:
  <p>{months}-{dates}-{years}</p>

  }
</div>
<div className="subexp" onClick={e=>setshoexp2(true)}>
  {!years2&&!months2?
  <p>To</p>:
  <p>{months2}-{dates2}-{years2}</p>

  }
</div>
        </div>
        <input type="text" placeholder='Employer name'/>
        <input type="text" placeholder='Address' />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='City and zip code'/>
       <input type="text" placeholder='Telephone'/>
      
      <div className="selects">
        <input type="text" placeholder='Start Pay'/>
        <input type="text" placeholder='Last Pay' />
      </div>
       <input type="text" placeholder='Job title' />
       <input type="text" placeholder='Reason for leaving' />
       <input type="text" placeholder='Descrive the work you did'/>
     
       <button className='cont4'>+ Add another employer </button>


        <button className='cont2' onClick={e=>navigateToPage('/page-3')}>Next</button>


    </div>
    </>
  )
}

export default Fill3