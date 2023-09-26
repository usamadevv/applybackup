import React, { useEffect, useState } from 'react'
import a1 from '../../images/a1.png'
import a2 from '../../images/a2.png'
import b1 from '../../images/b1.png'
import b2 from '../../images/b2.png'
import a3 from '../../images/a3.png'
import a4 from '../../images/a4.png'
import { HiFilter } from 'react-icons/hi'
import logo from '../../images/logo.png'
import phone from '../../images/phone.png'
import {AiOutlineEye} from 'react-icons/ai'
import a5 from '../../images/a5.png'
import { IoMenuOutline } from 'react-icons/io5'
import {FiMail} from 'react-icons/fi'
import { BsCalendar2Date } from 'react-icons/bs'
import {BiPencil}  from  'react-icons/bi'
import {BsDownload} from 'react-icons/bs'
import {RiShareForwardFill} from 'react-icons/ri'
import {BsFillFileEarmarkPdfFill} from 'react-icons/bs'
import a6 from '../../images/a6.png'
import user from '../../images/user.png'
import a7 from '../../images/a7.png'
import {RiShareForward2Fill} from 'react-icons/ri'

import {AiOutlineSearch} from 'react-icons/ai'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
import { api } from '../apis'
const Jobseeker = () => {

const [deletedata, setdeletedata] = useState([])
const [users, setusers] = useState([])
    function deleted(){

        axios.post(`${api}cont/delete`,{
           ids:deletedata
        }).then(res=>{
            axios.get(`${api}cont/getallusers`).then(res2=>{
                setusers(res2.data.Contractorxs)
                            console.log(res2)
                            setdeletedata([])
            
                    setcurrentItems(res2.data.Contractorxs&&res2.data.Contractorxs.slice(itemOffset, endOffset))
                    setpageCount(Math.ceil(res2.data.Contractorxs&&res2.data.Contractorxs.length / 4))
                    setadduser('adduser1')
                            
                        })
        
        })
    }
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 4) % users.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
        
      };
    
            

    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [trade, settrade] = useState('');
    const [experience, setexperience] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [ssn, setssn] = useState('');
    const [address, setaddress] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [zip, setzip] = useState('');
    const [birth, setbirth] = useState('');
    const [schoolname, setschoolname] = useState('');
    const [schoolnoy, setschoolnoy] = useState('');
    const [schoolpos, setschoolpos] = useState('');
    const [schooldip, setschooldip] = useState('');
    const [collegename, setcollegename] = useState('');
    const [collegenoy, setcollegenoy] = useState('');
    const [collegepos, setcollegepos] = useState('');
    const [collegedip, setcollegedip] = useState('');
    const [tradeschoolname, settradeschoolname] = useState('');
    const [tradeschoolnoy, settradeschoolnoy] = useState('');
    const [tradeschoolpos, settradeschoolpos] = useState('');
    const [tradeschooldip, settradeschooldip] = useState('');
    const [from, setfrom] = useState('');
    const [to, setto] = useState('');
    const [empname, setempname] = useState('');
    const [empemail, setempemail] = useState('');
    const [empcity, setempcity] = useState('');
    const [empaddress, setempaddress] = useState('');
    const [empphone, setempphone] = useState('');
    const [startpay, setstartpay] = useState('');
    const [lastpay, setlastpay] = useState('');
    const [jobtitle, setjobtitle] = useState('');
    const [reason, setreason] = useState('');
    const [jobdesc, setjobdesc] = useState('');
    const [depositname, setdepositname] = useState('');
    const [depositssn, setdepositssn] = useState('');
    const [depositbank, setdepositbank] = useState('');
    const [depositstate, setdepositstate] = useState('');
    const [depositcity, setdepositcity] = useState('');
    const [crimdate, setcrimdate] = useState('');
    const [crimtype, setcrimtype] = useState('');
    const [crimfelony, setcrimfelony] = useState('');
    const [crimdeposition, setcrimdeposition] = useState('');
    const [crimagency, setcrimagency] = useState('');
    const [crimjuris, setcrimjuris] = useState('');
    const [crimother, setcrimother] = useState('');
    const [taxname, settaxname] = useState('');
    const [depositr, setdepositr] = useState('')
    const [deposita, setdeposita] = useState('')
    const [depositt, setdepositt] = useState('')
    const [taxbusoiness, settaxbusoiness] = useState('');
    const [taxexemp, settaxexemp] = useState('');
    const [taxfacta, settaxfacta] = useState('');
    const [taxssn, settaxssn] = useState('');
const [types, settypes] = useState('job')
    const [pageCount, setpageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 4;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
const [currentItems, setcurrentItems] = useState([])
  function senddata(){
    const requestData = {
        fname,
        lname,
        trade,
        experience,
        email,
        phone,
        ssn,
        address,
        city,
        state,
        zip,
        birth,
        schoolname,
        schoolnoy,
        schoolpos,
        schooldip,
        collegename,
        collegenoy,
        collegepos,
        collegedip,
        tradeschoolname,
        tradeschoolnoy,
        tradeschoolpos,
        tradeschooldip,
        from,
        to,
        empname,
        empemail,
        empcity,
        empaddress,
        empphone,
        startpay,
        lastpay,
        jobtitle,
        reason,
        jobdesc,
        depositname,
        depositssn,
        depositbank,
        depositstate,
        depositcity,
        crimdate,
        crimtype,
        crimfelony,
        crimdeposition,
        crimagency,
        crimjuris,
        crimother,
        taxname,
        taxbusoiness,
        taxexemp,
        taxfacta,
        types,
        taxssn,
      };
      axios.post(`${api}cont/add`,
      requestData).then(res2=>{
       console.log(res2) 

       axios.get(`${api}cont/getallusers`).then(res=>{
      
           console.log(res)
           setcurrwin('all')
           setselected(0)
           setusers(res.data.Contractorxs)
           
           
setcurrentItems(res.data.Contractorxs.slice(itemOffset, endOffset))
setpageCount(Math.ceil(res.data.Contractorxs.length / 4))

                    
                })
                })
  }


  function selectall(){
    
    console.log(deletedata)
    if(users.length===deletedata.length){
        setdeletedata([])
    }
    else{
        setdeletedata([])
        console.log(users)
    users.forEach(element => {
      
     
        setdeletedata((prevdeletedata) => [...prevdeletedata, element._id]);

       console.log(element)
        
    });
}
}
    
    const [selected, setselected] = useState(0)
const [curruser, setcurruser] = useState()
const [currwin, setcurrwin] = useState('all')
function openthis(val){
    setcurruser(val)
    setcurrwin('view')
}

const arr=[
    {
        "id": "user001",
        "First name": "Alice",
        "Last name": "Johnson",
        "Applied For": "alice.johnson@example.com",
        "Last Salary": "123-456-7890",
        "Education": "User",
        "Experience": "Active"
 
 
 ,
 status:'Hired'
    },
    {
        "id": "user002",
        "First name": "Bob",
        "Last name": "Smith",
        "Applied For": "bob.smith@example.com",
        "Last Salary": "987-654-3210",
        "Education": "Admin",
        "Experience": "Inactive"

,
status:'selected'

    },
    {
        "id": "user003",
        "First name": "Charlie",
        "Last name": "Brown",
        "Applied For": "charlie.brown@example.com",
        "Last Salary": "555-123-4567",
        "Education": "User",
        "Experience": "Active"
 
 
 ,
 status:'oh'
    },
    {
        "id": "user004",
        "First name": "David",
        "Last name": "Williams",
        "Applied For": "david.williams@example.com",
        "Last Salary": "111-222-3333",
        "Education": "User",
        "Experience": "Active"
 
 
 ,
 status:'oh'
    },
    {
        "id": "user005",
        "First name": "Ella",
        "Last name": "Davis",
        "Applied For": "ella.davis@example.com",
        "Last Salary": "444-555-6666",
        "Education": "Admin",
        "Experience": "Inactive"

,
status:'oh'

    },
    {
        "id": "user006",
        "First name": "Frank",
        "Last name": "Miller",
        "Applied For": "frank.miller@example.com",
        "Last Salary": "777-888-9999",
        "Education": "User",
        "Experience": "Active"
 
 
 ,
 status:'oh'
    },
    {
        "id": "user007",
        "First name": "Grace",
        "Last name": "Wilson",
        "Applied For": "grace.wilson@example.com",
        "Last Salary": "222-333-4444",
        "Education": "User",
        "Experience": "Inactive"

,
status:'oh'

    },
    {
        "id": "user008",
        "First name": "Henry",
        "Last name": "Taylor",
        "Applied For": "henry.taylor@example.com",
        "Last Salary": "888-999-0000",
        "Education": "Admin",
        "Experience": "Active"
 
 
 ,
 status:'oh'
    },
    {
        "id": "user009",
        "First name": "Ivy",
        "Last name": "Anderson",
        "Applied For": "ivy.anderson@example.com",
        "Last Salary": "333-444-5555",
        "Education": "User",
        "Experience": "Active"
 
 
 ,
 status:'oh'
    },
    {
        "id": "user010",
        "First name": "Jack",
        "Last name": "Moore",
        "Applied For": "jack.moore@example.com",
        "Last Salary": "999-000-1111",
        "Education": "User",
        "Experience": "Inactive"

,
status:'oh'

    }
]

useEffect(() => {
        
    axios.get(`${api}cont/getallusers`).then(res2=>{

        setusers(res2.data.Contractorxs)
        console.log(res2)
setcurrentItems(res2.data.Contractorxs.slice(itemOffset, endOffset))
setpageCount(Math.ceil(res2.data.Contractorxs.length / 4))
    })
  return () => {
    
  }
}, [])
useEffect(() => {

    setcurrentItems(users&&users.slice(itemOffset, endOffset))
    setpageCount(Math.ceil(users&&users.length / 4))
      
        return () => {
          
        }
      }, [itemOffset])
  const [adduser, setadduser] = useState('adduser1')

  // Invoke when user click to request another page.
 
  return (
   <div className="adminsecond">
    <div className={adduser}>
     <div className="subadduser">   <h1>Add User</h1>
        <div className="inpuj">
            <p>id *</p>
            <input type="text"  />
        </div>
        <div className="inpuj">
        <p>First Name *</p>
            <input type="text"  />
        </div>
        <div className="inpuj">
        <p>Last Name *</p>
            <input type="text"  />
        </div>
        <div className="inpuj">
        <p>Applied For *</p>
            <input type="text"  />
        </div>
        <div className="inpuj">
        <p>Last Salary *</p>
            <input type="text"  />
        </div>
        <div className="inpuj">
            <p>Role</p>
            <select name="" id="">

                <option value="Helpe">Helper</option>
            </select>
        </div>    <div className="inpuj">
            <p>Experience *</p>
            <select name="" id="">

                <option value="Helpe">Active</option>
            </select>
        </div>
        <div className="inpbtns">
            <button onClick={e=>setadduser('adduser1')}>Save</button>
            <button className='cancel' onClick={e=>setadduser('adduser1')}>Cancel</button>
        </div>
        </div>


    </div>
      <div className="headeradmin">
                    <div className="priormenu">
                        <IoMenuOutline className='hamb' />
                        <p>Job Seeker Management</p>
                    </div>
                    <img src={user} alt="" />


                </div>
            {currwin==='all'
            ?  <div className="tablebox">
            <div className="subtablebox">
                <div className="topbaruser">
                 <div className="inputse">
                 <AiOutlineSearch  className='inh'/>
                    <input type="text" placeholder='Search' />
                  
                 </div>
                   <div className="searchbtn">
                        <button><RiShareForward2Fill /> Share</button>
                        <button onClick={e=>deleted()}>- Delete </button>
                        <button onClick={e=>setcurrwin('edit')}>+ Add User</button>
                    </div>
                </div>
                <div className="tablex">
                    <div className="tablehead">
                        <input type="checkbox" checked={deletedata.length===users.length} onClick={e=>selectall()} />
                        <h1>id</h1>
                        <h1>
                            First name
                        </h1>   <h1>
                            Last name
                        </h1>   <h1 style={{minWidth:'250px'}}>
Applied For                                </h1>
<h1>
Last Salary
</h1>
<h1>
Education
</h1>
<h1>Experience</h1>

<h1>Contact</h1>


<h1 >Details</h1>
<h1 style={{minWidth:'250px'}} >Status</h1>
                    </div>
             {currentItems&&currentItems.map((val,index)=>(   
                
                <div className={`tablebody ${index%2===0?'lg':''}`}>
                    <input type="checkbox"  checked={deletedata.includes(val._id)} onChange={(e) => {
          const id = val._id;
          setdeletedata((prevIds) =>
            e.target.checked ? [...prevIds, id] : prevIds.filter((item) => item !== id)
          );
        }}/>
                        <h1>{val.id}</h1>
                        <h1>
                           {val.fname} 
                        </h1>   <h1>
                        {val['Last name']}
                        </h1>   <h1 style={{minWidth:'250px'}}>
{val.jobtitle}                            </h1>
<h1>
{val.lastpay}
</h1>
<h1>
{val.schooldip}
</h1>
<h1>
{val.experience}
</h1>
<h1>

<button className='phbtn'><FiMail className='mailb' /></button>

<button className='phbtn'><img src={phone} alt="" /></button>
</h1>
<h1 style={{minWidth:'250px'}}>

<button className={`phbtn2 ${val.status==='oh'?'On-hold':val.status==='selected'?'selectedx':'Hired'}`}>
{val.status==='oh'?'On-hold':val.status==='selected'?'Selected':'Hired'}
</button>
<button className='phbtn'><BiPencil className='mailb'  /></button>

<button className='phbtn'><RiShareForwardFill className='mailb' /></button>
</h1>
<h1>
<button className=" phbtn2 Hired" onClick={e=>openthis(val)}>
Details
</button>

</h1>
                    </div>))


             }
             <div className="paginate">
             <ReactPaginate
             breakLabel="..."
             nextLabel=" czx"
             onPageChange={handlePageClick}
             pageRangeDisplayed={5}
             pageCount={pageCount}
             previousLabel="dzz "
             renderOnZeroPageCount={null}
             previousLinkClassName={'previous'}
             nextLinkClassName={'next'}
           />

                  
             </div>
             
                </div>
                
            </div>

        </div>
            :currwin==='view'?
            <div className="tablebox tablebox2">
           <div className="tablex tablex2">
           <div className="tabletabs">
         
         <div className={`tab ${selected===0?'purp':''}`} onClick={e=>setselected(0)}>
            General information
         </div>
         <div className={`tab ${selected===1?'purp':''}`} onClick={e=>setselected(1)}>
           Eduacational Details
         </div>
         <div className={`tab ${selected===2?'purp':''}`} onClick={e=>setselected(2)}>
            Employer's Details
         </div>
         <div className={`tab ${selected===3?'purp':''}`} onClick={e=>setselected(3)}>
            Direct Deposit Details
         </div>
         <div className={`tab ${selected===4?'purp':''}`} onClick={e=>setselected(4)}>
            Upload Document
         </div >
         <div className={`tab ${selected===5?'purp':''}`} onClick={e=>setselected(5)}>
        Crimninal History
         </div>
         <div className={`tab ${selected===6?'purp':''}`} onClick={e=>setselected(6)}>
            W-9
         </div>
                </div>

              {selected===0?
 <div className="userdet">
 <div className="inpuj inpujh">
<p>First Name</p>
<input type="text" value={curruser.fname} disabled={true} />
</div>
<div className="inpuj inpujh">
<p>Last Name</p>
<input type="text" value={curruser.lname} disabled={true}  />
</div>
<div className="inpuj inpujh">

<p>Trade </p>
<input type="text" value={curruser.trade} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>Experience</p>
<input type="text" value={curruser.experience} disabled={true}  />
</div>


<div className="inpuj inpujh">
<p>Email </p>
<input type="text" value={curruser.email} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>Phone</p>
<input type="text" value={curruser.phone} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>SSN </p>
<input type="text" value={curruser.ssn} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>Address</p>
<input type="text" value={curruser.address} disabled={true}  />
</div>  <div className="inpuj inpujh">
<p>City </p>
<input type="text" value={curruser.city} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>State</p>
<input type="text" value={curruser.state} disabled={true}  />
</div>  <div className="inpuj inpujh">
<p>Zip </p>
<input type="text" value={curruser.zip} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>Birth Date</p>
<input type="text" value={curruser.birth} disabled={true}  />
</div>
 </div>:selected===1? <div className="userdet">
    <h3>High School</h3>
                <div className="inpuj inpujh">
            <p>Name of School</p>
            <input type="text" value={curruser.schoolname} disabled={true}  />
        </div>
        <div className="inpuj inpujh">
        <p># of years completed</p>
            <input type="text"  value={curruser.schoolnoy} disabled={true} />
        </div>
        <div className="inpuj inpujh">

        <p>Program of Study </p>
            <input type="text" value={curruser.schoolpos} disabled={true}  />
        </div>
        <div className="inpuj inpujh">
        <p>Degree Diploma recieved</p>
            <input type="text" value={curruser.schooldip} disabled={true}  />
        </div>
        <h3> College / University</h3>
                <div className="inpuj inpujh">
            <p>Name of School</p>
            <input type="text" value={curruser.collegename} disabled={true}  />
        </div>
        <div className="inpuj inpujh">
        <p># of years completed</p>
            <input type="text" value={curruser.collegenoy} disabled={true}  />
        </div>
        <div className="inpuj inpujh">

        <p>Program of Study </p>
            <input type="text" value={curruser.collegepos} disabled={true}  />
        </div>
        <div className="inpuj inpujh">
        <p>Degree Diploma recieved</p>
            <input type="text" value={curruser.collegedip} disabled={true}  />
        </div>
        <h3>Trade School</h3>
                <div className="inpuj inpujh">
            <p>Name of School</p>
            <input type="text" value={curruser.tradeschoolname} disabled={true}  />
        </div>
        <div className="inpuj inpujh">
        <p># of years completed</p>
            <input type="text" value={curruser.tradeschoolnoy} disabled={true}  />
        </div>
        <div className="inpuj inpujh">

        <p>Program of Study </p>
            <input type="text" value={curruser.tradeschoolpos} disabled={true}   />
        </div>
        <div className="inpuj inpujh">
        <p>Degree Diploma recieved</p>
            <input type="text" value={curruser.tradeschooldip} disabled={true}  />
        </div>


                </div>:selected===2?<div className="userdet">
 <div className="inpuj inpujh">
<p>From</p>
<input type="text" value={curruser.from} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>To</p>
<input type="text" value={curruser.to} disabled={true}  />
</div>
<div className="inpuj inpujh">

<p>Employer Name </p>
<input type="text" value={curruser.empname} disabled={true}   />
</div>
<div className="inpuj inpujh">
<p>Email</p>
<input type="text" value={curruser.empemail} disabled={true}  />
</div>


<div className="inpuj inpujh">
<p>Address </p>
<input type="text" value={curruser.empaddress} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>City</p>
<input type="text" value={curruser.empcity} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>Zip </p>
<input type="text" value={curruser.empcity} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>Phone</p>
<input type="text" value={curruser.empphone} disabled={true}  />
</div>  <div className="inpuj inpujh">
<p>Start Pay </p>
<input type="text" value={curruser.startpay} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>Last Pay</p>
<input type="text" value={curruser.lastpay} disabled={true}  />
</div>  <div className="inpuj inpujh">
<p>Job Title </p>
<input type="text" value={curruser.jobtitle} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>Reason For Leaving</p>
<input type="text" value={curruser.reason} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>Job Description</p>
<textarea type="text" value={curruser.jobdesc} disabled={true}   />
</div> 

</div>:selected===3?
<div className="userdet">
 <div className="inpuj inpujh">
<p>Name</p>
<input type="text"  value={curruser.depositname} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>SSN</p>
<input type="text" value={curruser.depositssn} disabled={true}  />
</div>
<div className="inpuj inpujh">

<p>Bank Name </p>
<input type="text" value={curruser.depositbank} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>State</p>
<input type="text" value={curruser.depositstate} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>City</p>
<input type="text" value={curruser.depositcity} disabled={true}  />
</div>
<div className="inpuj inpujh">

<p>Routing # </p>
<input type="text" value={curruser.depositr} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>Account #</p>
<input type="text" value={curruser.deposita} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>Account type</p>
<input type="text" value={curruser.depositt} disabled={true}  />
</div>


</div>
:selected===4?<div className="userdet">
<div className="inpuj injh">
<p>Driving Liscence</p>
<div className="subinp">
    <BsFillFileEarmarkPdfFill className='redsdd'/>
    <p>John Doe Driving Liscence.pdf</p>
    <AiOutlineEye  className='sdd'/>
    <BsDownload className='sdd' />

</div>
</div>

<div className="inpuj injh">
<p>Driving Liscence</p>
<div className="subinp">
    <BsFillFileEarmarkPdfFill className='redsdd'/>
    <p>John Doe Driving Liscence.pdf</p>
    <AiOutlineEye  className='sdd'/>
    <BsDownload className='sdd' />

</div>
</div>


</div>:selected===5?
<div className="userdet">
 <div className="inpuj inpujh">
<p>Date</p>
<input type="text" value={curruser.crimdate} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>Conviction type</p>
<input type="text" value={curruser.crimtype} disabled={true}  />
</div>
<div className="inpuj inpujh">

<p>Misdemeanor or Felony </p>
<input type="text" value={curruser.crimfelony} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>Deposition</p>
<input type="text" value={curruser.crimdeposition} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>Law Enforcement Agency</p>
<input type="text" value={curruser.crimagency} disabled={true}  />
</div>
<div className="inpuj inpujh">

<p>Jurisdiction </p>
<input type="text" value={curruser.crimjuris} disabled={true}  />
</div>

<div className="inpuj inpujh">
<p>Other - Federal, Foreign, Military</p>
<input type="text" value={curruser.crimother} disabled={true}  />
</div>
<div className="inpuj inpujh">

</div>


</div>:
<div className="userdet">

    <h3>
    Personal Information

    </h3>
    <p>Federal tax classification:
C Corporation</p>
 <div className="inpuj inpujh">
<p>Name</p>
<input type="text" value={curruser.taxname} disabled={true}   />
</div>
<div className="inpuj inpujh">
<p>Business Name</p>
<input type="text" value={curruser.taxbusoiness} disabled={true}  />
</div>

<div className="inpuj inpujh"></div>
<div className="inpuj inpujh"></div>
<div className="inpuj inpujh">

<p>Exempt Payee Code </p>
<input type="text" value={curruser.taxexemp} disabled={true}  />
</div>
<div className="inpuj inpujh">
<p>Exemption from FATCA Reporting Code</p>
<input type="text" value={curruser.taxfacta} disabled={true}  />
</div>

<div className="inpuj inpujh"></div>
<div className="inpuj inpujh"></div>
<h3 style={{marginTop:20}}>
Taxpayer Identification Number
</h3>
<div className="inpuj inpujh">
<p>SSN</p>
<input type="text" value={curruser.taxssn} disabled={true}  />
</div>


              
           </div>
              } 
           </div>

            </div>: <div className="tablebox tablebox2">
           <div className="tablex tablex2">
           <div className="tabletabs">
         
         <div className={`tab ${selected===0?'purp':''}`} onClick={e=>setselected(0)}>
            General information
         </div>
         <div className={`tab ${selected===1?'purp':''}`} onClick={e=>setselected(1)}>
           Eduacational Details
         </div>
         <div className={`tab ${selected===2?'purp':''}`} onClick={e=>setselected(2)}>
            Employer's Details
         </div>
         <div className={`tab ${selected===3?'purp':''}`} onClick={e=>setselected(3)}>
            Direct Deposit Details
         </div>
         <div className={`tab ${selected===4?'purp':''}`} onClick={e=>setselected(4)}>
            Upload Document
         </div >
         <div className={`tab ${selected===5?'purp':''}`} onClick={e=>setselected(5)}>
        Crimninal History
         </div>
         <div className={`tab ${selected===6?'purp':''}`} onClick={e=>setselected(6)}>
            W-9
         </div>
                </div>

              {selected===0?
 <div className="userdet">
 <div className="inpuj inpujh">
<p>First Name</p>
<input type="text" value={fname}  onChange={e=>setfname(e.target.value)} />
</div>
<div className="inpuj inpujh">
<p>Last Name</p>
<input type="text" value={lname}  onChange={e=>setlname(e.target.value)} />
</div>
<div className="inpuj inpujh">

<p>Trade </p>
<input type="text" value={trade}  onChange={e=>settrade(e.target.value)}  />
</div>
<div className="inpuj inpujh">
<p>Experience</p>
<input type="text" value={experience}  onChange={e=>setexperience(e.target.value)}  />
</div>


<div className="inpuj inpujh">
<p>Email </p>
<input type="text" value={email}  onChange={e=>setemail(e.target.value)}  />
</div>
<div className="inpuj inpujh">
<p>Phone</p>
<input type="text" value={phone}  onChange={e=>setphone(e.target.value)} />
</div>
<div className="inpuj inpujh">
<p>SSN </p>
<input type="text" value={ssn}  onChange={e=>setssn(e.target.value)} />
</div>
<div className="inpuj inpujh">
<p>Address</p>
<input type="text" value={address}  onChange={e=>setaddress(e.target.value)}  />
</div>  <div className="inpuj inpujh">
<p>City </p>
<input type="text"  value={city}  onChange={e=>setcity(e.target.value)} />
</div>
<div className="inpuj inpujh">
<p>State</p>
<input type="text" value={state}  onChange={e=>setstate(e.target.value)} />
</div>  <div className="inpuj inpujh">
<p>Zip </p>
<input type="text" value={zip}  onChange={e=>setzip(e.target.value)} />
</div>
<div className="inpuj inpujh">
<p>Birth Date</p>
<input type="text" value={birth}  onChange={e=>setbirth(e.target.value)}  />
</div>

<div className="max100">

<button onClick={e=>setselected(selected=>selected+1)}>Next</button>
</div>
 </div>:selected===1? <div className="userdet">
    <h3>High School</h3>
                <div className="inpuj inpujh">
            <p>Name of School</p>
            <input type="text" value={schoolname}  onChange={e=>setschoolname(e.target.value)}  />
        </div>
        <div className="inpuj inpujh">
        <p># of years completed</p>
            <input type="text" value={schoolnoy}  onChange={e=>setschoolnoy(e.target.value)}  />
        </div>
        <div className="inpuj inpujh">

        <p>Program of Study </p>
            <input type="text" value={schoolpos}  onChange={e=>setschoolpos(e.target.value)}  />
        </div>
        <div className="inpuj inpujh">
        <p>Degree Diploma recieved</p>
            <input type="text" value={schooldip}  onChange={e=>setschooldip(e.target.value)}  />
        </div>
        <h3> College / University</h3>
                <div className="inpuj inpujh">
            <p>Name of School</p>
            <input type="text" value={collegename}  onChange={e=>setcollegename(e.target.value)}  />
        </div>
        <div className="inpuj inpujh">
        <p># of years completed</p>
            <input type="text" value={collegenoy}  onChange={e=>setcollegenoy(e.target.value)}  />
        </div>
        <div className="inpuj inpujh">

        <p>Program of Study </p>
            <input type="text" value={collegepos}  onChange={e=>setcollegepos(e.target.value)}  />
        </div>
        <div className="inpuj inpujh">
        <p>Degree Diploma recieved</p>
            <input type="text"  value={collegedip}  onChange={e=>setcollegedip(e.target.value)} />
        </div>
        <h3>Trade School</h3>
                <div className="inpuj inpujh">
            <p>Name of School</p>
            <input type="text"  value={tradeschoolname}  onChange={e=>settradeschoolname(e.target.value)} />
        </div>
        <div className="inpuj inpujh">
        <p># of years completed</p>
            <input type="text" value={tradeschoolnoy}  onChange={e=>settradeschoolnoy(e.target.value)} />
        </div>
        <div className="inpuj inpujh">

        <p>Program of Study </p>
            <input type="text" value={tradeschoolpos}  onChange={e=>settradeschoolpos(e.target.value)} />
        </div>
        <div className="inpuj inpujh">
        <p>Degree Diploma recieved</p>
            <input type="text" value={tradeschooldip}  onChange={e=>settradeschooldip(e.target.value)} />
        </div>


                
<div className="max100">

<button onClick={e=>setselected(selected=>selected+1)}>Next</button>
</div></div>:selected===2?<div className="userdet">
 <div className="inpuj inpujh">
<p>From</p>
<input type="text" value={from}  onChange={e=>setfrom(e.target.value)} />
</div>
<div className="inpuj inpujh">
<p>To</p>
<input type="text" value={to}  onChange={e=>setto(e.target.value)} />
</div>
<div className="inpuj inpujh">

<p>Employer Name </p>
<input type="text"  value={empname}  onChange={e=>setempname(e.target.value)} />
</div>
<div className="inpuj inpujh">
<p>Email</p>
<input type="text" value={empemail}  onChange={e=>setempemail(e.target.value)}  />
</div>


<div className="inpuj inpujh">
<p>Address </p>
<input type="text" value={empaddress}  onChange={e=>setempaddress(e.target.value)} />
</div>
<div className="inpuj inpujh">
<p>City</p>
<input type="text" value={empcity}  onChange={e=>setempcity(e.target.value)}  />
</div>
<div className="inpuj inpujh">
<p>Zip </p>
<input type="text" value={zip}  onChange={e=>setzip(e.target.value)}  />
</div>
<div className="inpuj inpujh">
<p>Phone</p>
<input type="text" value={empphone}  onChange={e=>setempphone(e.target.value)} />
</div>  <div className="inpuj inpujh">
<p>Start Pay </p>
<input type="text" value={startpay}  onChange={e=>setstartpay(e.target.value)}  />
</div>
<div className="inpuj inpujh">
<p>Last Pay</p>
<input type="text" value={lastpay}  onChange={e=>setlastpay(e.target.value)}  />
</div>  <div className="inpuj inpujh">
<p>Job Title </p>
<input type="text" value={jobtitle}  onChange={e=>setjobtitle(e.target.value)} />
</div>
<div className="inpuj inpujh">
<p>Reason For Leaving</p>
<input type="text" value={reason}  onChange={e=>setreason(e.target.value)} />
</div>
<div className="inpuj inpujh">
<p>Job Description</p>
<textarea type="text" value={jobdesc}  onChange={e=>setjobdesc(e.target.value)} />
</div> 


<div className="max100">

<button onClick={e=>setselected(selected=>selected+1)}>Next</button>
</div></div>:selected===3?
<div className="userdet">
 <div className="inpuj inpujh">
<p>Name</p>
<input type="text" value={depositname}  onChange={e=>setdepositname(e.target.value)} />
</div>
<div className="inpuj inpujh">
<p>SSN</p>
<input type="text"  value={depositssn}  onChange={e=>setdepositssn(e.target.value)} />
</div>
<div className="inpuj inpujh">

<p>Bank Name </p>
<input type="text" value={depositbank}  onChange={e=>setdepositbank(e.target.value)} />
</div>
<div className="inpuj inpujh">
<p>State</p>
<input type="text" value={depositstate}  onChange={e=>setdepositstate(e.target.value)} />
</div>
<div className="inpuj inpujh">
<p>City</p>
<input type="text" value={depositcity}  onChange={e=>setdepositcity(e.target.value)}  />
</div>
<div className="inpuj inpujh">

<p>Routing # </p>
<input type="text" value={depositr}  onChange={e=>setdepositr(e.target.value)} />
</div>
<div className="inpuj inpujh">
<p>Account #</p>
<input type="text"  value={deposita}  onChange={e=>setdeposita(e.target.value)} />
</div>
<div className="inpuj inpujh">
<p>Account type</p>
<input type="text"  value={depositt}  onChange={e=>setdepositt(e.target.value)} />
</div>



<div className="max100">

<button onClick={e=>setselected(selected=>selected+1)}>Next</button>
</div></div>
:selected===4?<div className="userdet">
<div className="inpuj injh">
<p>Driving Liscence</p>
<div className="subinp">
    <BsFillFileEarmarkPdfFill className='redsdd'/>
    <p>John Doe Driving Liscence.pdf</p>
    <AiOutlineEye  className='sdd'/>
    <BsDownload className='sdd' />

</div>
</div>

<div className="inpuj injh">
<p>Driving Liscence</p>
<div className="subinp">
    <BsFillFileEarmarkPdfFill className='redsdd'/>
    <p>John Doe Driving Liscence.pdf</p>
    <AiOutlineEye  className='sdd'/>
    <BsDownload className='sdd' />

</div>
</div>



<div className="max100">

<button onClick={e=>setselected(selected=>selected+1)}>Next</button>
</div></div>:selected===5?
<div className="userdet">
 <div className="inpuj inpujh">
<p>Date</p>
<input type="text"  value={crimdate}  onChange={e=>setcrimdate(e.target.value)} />
</div>
<div className="inpuj inpujh">
<p>Conviction type</p>
<input type="text"  value={crimtype}  onChange={e=>setcrimtype(e.target.value)} />
</div>
<div className="inpuj inpujh">

<p>Misdemeanor or Felony </p>
<input type="text" value={crimfelony}  onChange={e=>setcrimfelony(e.target.value)} />
</div>
<div className="inpuj inpujh">
<p>Deposition</p>
<input type="text" value={crimdeposition}  onChange={e=>setcrimdeposition(e.target.value)}  />
</div>
<div className="inpuj inpujh">
<p>Law Enforcement Agency</p>
<input type="text" value={crimagency}  onChange={e=>setcrimagency(e.target.value)} />
</div>
<div className="inpuj inpujh">

<p>Jurisdiction </p>
<input type="text" value={crimjuris}  onChange={e=>setcrimjuris(e.target.value)}  />
</div>

<div className="inpuj inpujh">
<p>Other - Federal, Foreign, Military</p>
<input type="text" value={crimother}  onChange={e=>setcrimother(e.target.value)} />
</div>
<div className="inpuj inpujh">

</div>



<div className="max100">

<button onClick={e=>setselected(selected=>selected+1)}>Next</button>
</div></div>:
<div className="userdet">

    <h3>
    Personal Information

    </h3>
    <p>Federal tax classification:
C Corporation</p>
 <div className="inpuj inpujh">
<p>Name</p>
<input type="text" value={taxname}  onChange={e=>settaxname(e.target.value)}  />
</div>
<div className="inpuj inpujh">
<p>Business Name</p>
<input type="text" value={taxbusoiness}  onChange={e=>settaxbusoiness(e.target.value)}  />
</div>

<div className="inpuj inpujh"></div>
<div className="inpuj inpujh"></div>
<div className="inpuj inpujh">

<p>Exempt Payee Code </p>
<input type="text" value={taxexemp}  onChange={e=>settaxexemp(e.target.value)} />
</div>
<div className="inpuj inpujh">
<p>Exemption from FATCA Reporting Code</p>
<input type="text"  value={taxfacta}  onChange={e=>settaxfacta(e.target.value)} />
</div>

<div className="inpuj inpujh"></div>
<div className="inpuj inpujh"></div>
<h3 style={{marginTop:20}}>
Taxpayer Identification Number
</h3>
<div className="inpuj inpujh">
<p>SSN</p> 
<input type="text"  value={taxssn}  onChange={e=>settaxssn(e.target.value)} />
</div>


              
           
<div className="max100">

<button onClick={e=>senddata()}>Submit</button>
</div></div>
              } 
           </div>

            </div>

            }  

   </div>
  )
}

export default Jobseeker