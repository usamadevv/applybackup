import React, { useState } from 'react'
import a1 from '../../images/a1.png'
import a2 from '../../images/a2.png'
import b1 from '../../images/b1.png'
import b2 from '../../images/b2.png'
import a3 from '../../images/a3.png'
import a4 from '../../images/a4.png'
import { HiFilter } from 'react-icons/hi'
import logo from '../../images/logo.png'
import phone from '../../images/phone.png'
import a5 from '../../images/a5.png'
import { IoMenuOutline } from 'react-icons/io5'
import { BsCalendar2Date } from 'react-icons/bs'
import a6 from '../../images/a6.png'
import user from '../../images/user.png'
import a7 from '../../images/a7.png'
import {RiShareForward2Fill} from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai'
import ReactPaginate from 'react-paginate'
const Common = () => {


const arr=[
    {
        "Username": "user001",
        "First name": "Alice",
        "Last name": "Johnson",
        "Email": "alice.johnson@example.com",
        "Phone": "123-456-7890",
        "Role Name": "User",
        "Status": "Active"
    },
    {
        "Username": "user002",
        "First name": "Bob",
        "Last name": "Smith",
        "Email": "bob.smith@example.com",
        "Phone": "987-654-3210",
        "Role Name": "Admin",
        "Status": "Inactive"
    },
    {
        "Username": "user003",
        "First name": "Charlie",
        "Last name": "Brown",
        "Email": "charlie.brown@example.com",
        "Phone": "555-123-4567",
        "Role Name": "User",
        "Status": "Active"
    },
    {
        "Username": "user004",
        "First name": "David",
        "Last name": "Williams",
        "Email": "david.williams@example.com",
        "Phone": "111-222-3333",
        "Role Name": "User",
        "Status": "Active"
    },
    {
        "Username": "user005",
        "First name": "Ella",
        "Last name": "Davis",
        "Email": "ella.davis@example.com",
        "Phone": "444-555-6666",
        "Role Name": "Admin",
        "Status": "Inactive"
    },
    {
        "Username": "user006",
        "First name": "Frank",
        "Last name": "Miller",
        "Email": "frank.miller@example.com",
        "Phone": "777-888-9999",
        "Role Name": "User",
        "Status": "Active"
    },
    {
        "Username": "user007",
        "First name": "Grace",
        "Last name": "Wilson",
        "Email": "grace.wilson@example.com",
        "Phone": "222-333-4444",
        "Role Name": "User",
        "Status": "Inactive"
    },
    {
        "Username": "user008",
        "First name": "Henry",
        "Last name": "Taylor",
        "Email": "henry.taylor@example.com",
        "Phone": "888-999-0000",
        "Role Name": "Admin",
        "Status": "Active"
    },
    {
        "Username": "user009",
        "First name": "Ivy",
        "Last name": "Anderson",
        "Email": "ivy.anderson@example.com",
        "Phone": "333-444-5555",
        "Role Name": "User",
        "Status": "Active"
    },
    {
        "Username": "user010",
        "First name": "Jack",
        "Last name": "Moore",
        "Email": "jack.moore@example.com",
        "Phone": "999-000-1111",
        "Role Name": "User",
        "Status": "Inactive"
    }
]


  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 4;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const [adduser, setadduser] = useState('adduser1')
  const currentItems = arr.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(arr.length / 4);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 4) % arr.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
   <div className="adminsecond">
    <div className={adduser}>
     <div className="subadduser rolesub" >   <h1>Add User</h1>
        <div className="inpuj w100">
            <p>Role Name*</p>
            <input type="text"  />
        </div>
     <div className="inpuj w100">
            <p>Status *</p>
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
                        <p>Dashboard</p>
                    </div>
                    <img src={user} alt="" />


                </div>
                <div className="tablebox">
                    <div className="subtablebox">
            
                        <div className="tablex tablex2">
                         
                   
                  
<div className="userdet">

<h3>
Email server configuaration

</h3>
<div className="inpuj inpujh">
<p>SMTP server</p>
<input type="text"  />
</div>
<div className="inpuj inpujh">
<p>PORT</p>
<input type="text"  />
</div>

<div className="inpuj inpujh"></div>
<div className="inpuj inpujh"></div>
<div className="inpuj inpujh">

<p>Email </p>
<input type="text"  />
</div>
<div className="inpuj inpujh">
<p>Password</p>
<input type="text"  />
</div>

<div className="inpuj inpujh"></div>
<div className="inpuj inpujh"></div>

<div className="inpuj inpujh">
<input type="checkbox"  /><p>SSN</p>

</div>


          
       </div>
                     
                        </div>
                        
                    </div>

                </div>

   </div>
  )
}

export default Common