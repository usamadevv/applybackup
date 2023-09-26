import React, { useEffect, useState } from 'react'
import a1 from '../../images/a1.png'
import a2 from '../../images/a2.png'
import b1 from '../../images/b1.png'
import b2 from '../../images/b2.png'
import a3 from '../../images/a3.png'
import a4 from '../../images/a4.png'
import { HiFilter } from 'react-icons/hi'
import logo from '../../images/logo.png'
import phonex from '../../images/phone.png'
import a5 from '../../images/a5.png'
import { IoMenuOutline } from 'react-icons/io5'
import { BsCalendar2Date } from 'react-icons/bs'
import a6 from '../../images/a6.png'
import user from '../../images/user.png'
import a7 from '../../images/a7.png'
import {RiShareForward2Fill} from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
import { api } from '../apis'
const Usermanage = () => {
function deleted(){

    axios.post(`${api}user/delete`,{
       ids:deletedata
    }).then(res=>{
        axios.get(`${api}user/getallusers`).then(res2=>{
            setusers(res2.data.users)
                        console.log(res2)
                        setdeletedata([])
        
                setcurrentItems(res2.data.users&&res2.data.users.slice(itemOffset, endOffset))
                setpageCount(Math.ceil(res2.data.users&&res2.data.users.length / 4))
                setadduser('adduser1')
                        
                    })
    
    })
}
const [deletedata, setdeletedata] = useState([])
    const [name, setname] = useState('')
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [role, setrole] = useState('')
    const [status, setstatus] = useState('Active')
    const [phone, setphone] = useState('')
    const [users, setusers] = useState([])
    const [itemOffset, setItemOffset] = useState(0);
const [currentItems, setcurrentItems] = useState([])
    const endOffset = itemOffset + 4;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const [adduser, setadduser] = useState('adduser1')
    const [pageCount, setpageCount] = useState(0)

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * 4) % users.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
      
    };
    useEffect(() => {
      
        axios.get(`${api}user/getallusers`).then(res2=>{
    
            setusers(res2.data.users)
            console.log(res2)
setcurrentItems(res2.data.users.slice(itemOffset, endOffset))
setpageCount(Math.ceil(res2.data.users.length / 4))
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
          
    function aduser(){
        axios.post(`${api}user/add`,{
            name:name,
            fname:fname,
            lname:lname,
            email:email,
            role:role,
            status:status,
            phone:phone,
        }).then(res=>{

            console.log(res)
            axios.get(`${api}user/getallusers`).then(res2=>{
    setusers(res2.data.users)
                console.log(res2)

        setcurrentItems(res2.data.users&&res2.data.users.slice(itemOffset, endOffset))
        setpageCount(Math.ceil(res2.data.users&&res2.data.users.length / 4))
        setadduser('adduser1')
                
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

 
  return (
   <div className="adminsecond">
    <div className={adduser}>
     <div className="subadduser">   <h1>Add User</h1>
        <div className="inpuj">
            <p>Username *</p>
            <input type="text" value={name} onChange={e=>setname(e.target.value)}  />
        </div>
        <div className="inpuj">
        <p>First Name *</p>
            <input type="text" value={fname} onChange={e=>setfname(e.target.value)} />
        </div>
        <div className="inpuj">
        <p>Last Name *</p>
            <input type="text" value={lname} onChange={e=>setlname(e.target.value)}  />
        </div>
        <div className="inpuj">
        <p>Email *</p>
            <input type="text" value={email} onChange={e=>setemail(e.target.value)}  />
        </div>
        <div className="inpuj">
        <p>Phone *</p>
            <input type="text" value={phone} onChange={e=>setphone(e.target.value)}  />
        </div>
        <div className="inpuj">
            <p>Role</p>
            <select name="" id="" value={role} onChange={e=>setrole(e.target.value)}>

                <option value="Helpe">Helper</option>
            </select>
        </div>    <div className="inpuj">
            <p>Status *</p>
            <select name="" id="" value={status} onChange={e=>setstatus(e.target.value)}>

                <option value="Helpe">Active</option>
            </select>
        </div>
        <div className="inpbtns">
            <button onClick={e=>aduser()}>Save</button>
            <button className='cancel' onClick={e=>setadduser('adduser1')}>Cancel</button>
        </div>
        </div>


    </div>
      <div className="headeradmin">
                    <div className="priormenu">
                        <IoMenuOutline className='hamb' />
                        <p>Dashboard</p>
                    </div>
                    <img src={user} alt="" />


                </div>
                <div className="tablebox">
                    <div className="subtablebox">
                        <div className="topbaruser">
                         <div className="inputse">
                         <AiOutlineSearch  className='inh'/>
                            <input type="text" placeholder='Search' />
                          
                         </div>
                           <div className="searchbtn">
                                <button><RiShareForward2Fill /> Share</button>
                                <button onClick={e=>deleted()}>- Delete </button>
                                <button onClick={e=>setadduser('adduser')}>+ Add User</button>
                            </div>
                        </div>
                        <div className="tablex">
                            <div className="tablehead">
                                <input type="checkbox" checked={deletedata.length===users.length} onClick={e=>selectall()} />
                                <h1>Username</h1>
                                <h1>
                                    First name
                                </h1>   <h1>
                                    Last name
                                </h1>   <h1 style={{minWidth:'250px'}}>
Email                                </h1>
<h1>
    phone
</h1>
<h1>
    Role Name
</h1>
<h1>Status</h1>
                            </div>
                     {currentItems&&currentItems.map((val,index)=>(   
                        
                        <div className={`tablebody ${index%2===0?'lg':''}`}>
                            <input type="checkbox" checked={deletedata.includes(val._id)} onChange={(e) => {
          const id = val._id;
          setdeletedata((prevIds) =>
            e.target.checked ? [...prevIds, id] : prevIds.filter((item) => item !== id)
          );
        }}/>
                                <h1>{val.name}</h1>
                                <h1>
                                   {val.fname} 
                                </h1>   <h1>
                                {val.lname}
                                </h1>   <h1 style={{minWidth:'250px'}}>
{val.email}                            </h1>
<h1>
    <button className='phbtn'><img src={phonex} alt="" /></button>
  {val.phone}
</h1>
<h1>
{val.role}
</h1>
<h1>
    {val.status}
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

   </div>
  )
}

export default Usermanage