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
import a5 from '../../images/a5.png'
import { IoMenuOutline } from 'react-icons/io5'
import { BsCalendar2Date } from 'react-icons/bs'
import a6 from '../../images/a6.png'
import axios from 'axios'
import user from '../../images/user.png'
import a7 from '../../images/a7.png'
import {RiShareForward2Fill} from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai'
import ReactPaginate from 'react-paginate'
import { api } from '../apis'
const RoleManage = () => {
    function deleted(){

        axios.post(`${api}role/delete`,{
           ids:deletedata
        }).then(res=>{
            axios.get(`${api}role/getallusers`).then(res2=>{
                setroles(res2.data.rolexs)
                            console.log(res2)
            
                    setcurrentItems(res2.data.rolexs&&res2.data.rolexs.slice(itemOffset, endOffset))
                    setpageCount(Math.ceil(res2.data.rolexs&&res2.data.rolexs.length / 4))
                    setadduser('adduser1')
                    setdeletedata([])
                            
                        })
        
        })
    }
const [roles, setroles] = useState([])
    const [Role, setRole] = useState('')
    const [status, setstatus] = useState('Active')
const [deletedata, setdeletedata] = useState([])
 const [pageCount, setpageCount] = useState(0)

 const [itemOffset, setItemOffset] = useState(0);
 const [currentItems, setcurrentItems] = useState([])
    // Invoke when user click to request another page.
    
    const handlePageClick = (event) => {
      const newOffset = (event.selected * 4) % roles.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
      
    };
    useEffect(() => {
      
        axios.get(`${api}role/getallusers`).then(res2=>{
    
            setroles(res2.data.rolexs)
            console.log(res2)
setcurrentItems(res2.data.rolexs.slice(itemOffset, endOffset))
setpageCount(Math.ceil(res2.data.rolexs.length / 4))
        })
      return () => {
        
      }
    }, [])
    useEffect(() => {
    
        setcurrentItems(roles&&roles.slice(itemOffset, endOffset))
        setpageCount(Math.ceil(roles&&roles.length / 4))
          
            return () => {
              
            }
          }, [itemOffset])
          
function selectall(){
    
    console.log(deletedata)
    if(roles.length===deletedata.length){
        setdeletedata([])
    }
    else{
        setdeletedata([])
        console.log(roles)
    roles.forEach(element => {
      
     
        setdeletedata((prevdeletedata) => [...prevdeletedata, element._id]);

       console.log(element)
        
    });
}
}
    function aduser(){
        axios.post(`${api}role/add`,{
            role:Role,
            status:status,
            view:'false',
            delete:'false',
            add:'false',
            detail:'false',
            edit:'false',

        }).then(res=>{

            console.log(res)
            axios.get(`${api}role/getallusers`).then(res2=>{
    setroles(res2.data.rolexs)
                console.log(res2)

        setcurrentItems(res2.data.rolexs&&res2.data.rolexs.slice(itemOffset, endOffset))
        setpageCount(Math.ceil(res2.data.rolexs&&res2.data.rolexs.length / 4))
        setadduser('adduser1')
                
            })
        })
    }



  const endOffset = itemOffset + 4;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const [adduser, setadduser] = useState('adduser1')


  return (
   <div className="adminsecond">
    <div className={adduser}>
     <div className="subadduser rolesub" >   <h1>Add User</h1>
        <div className="inpuj w100">
            <p>Role Name*</p>
            <input type="text" value={Role} onChange={e=>setRole(e.target.value)} />
        </div>
     <div className="inpuj w100">
            <p>Status *</p>
            <select name="" id=""  value={status} onChange={e=>setstatus(e.target.value)} >

                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
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
                                <button onClick={e=>deleted()}>- Delete </button>
                                <button onClick={e=>setadduser('adduser')}>+ Add Role</button>
                            </div>
                        </div>
                        <div className="tablex">
                            <div className="tablehead">
                                <input type="checkbox"   checked={deletedata.length===roles.length} onClick={e=>selectall()}/>
                                <h1>Role</h1>
                        
<h1>Status</h1>
                            </div>
                     {currentItems&&currentItems.map((val,index)=>(   
                        
                        <div className={`tablebody ${index%2===0?'lg':''}`}>
                            <input type="checkbox" checked={deletedata.includes(val._id)} onChange={(e) => {
          const id = val._id;
          setdeletedata((prevIds) =>
            e.target.checked ? [...prevIds, id] : prevIds.filter((item) => item !== id)
          );
        }} />
                       
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

export default RoleManage