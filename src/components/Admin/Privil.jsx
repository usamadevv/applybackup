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
const Privil = () => {

const [roles, setroles] = useState([])
    const [i, seti] = useState(0)
    function handle(index,val){
        if(val==='view'){
            var tr=roles
            seti(i+1)
            tr[index].view==='true'?tr[index].view='false':tr[index].view='true'
            setroles(tr)
            console.log(tr)
            console.log(roles)
        }
        else if(val==='delete'){
            var tr=roles
            seti(i+1)
            tr[index].delete==='true'?tr[index].delete='false':tr[index].delete='true'
            setroles(tr)
            console.log(tr)
            console.log(roles)
        } else if(val==='detail'){
            var tr=roles
            seti(i+1)
            tr[index].detail==='true'?tr[index].detail='false':tr[index].detail='true'
            setroles(tr)
            console.log(tr)
            console.log(roles)
        }
        else if(val==='edit'){
            var tr=roles
            seti(i+1)
            tr[index].edit==='true'?tr[index].edit='false':tr[index].edit='true'
            setroles(tr)
            console.log(tr)
            console.log(roles)
        }else {
            var tr=roles
            seti(i+1)
            tr[index].add==='true'?tr[index].add='false':tr[index].add='true'
            setroles(tr)
            console.log(tr)
            console.log(roles)
        }
    }
    useEffect(() => {
      
    
      return () => {
        
      }
    }, [i,roles])
    
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
function updatedata(){


    axios.post(`${api}role/updatedata`,roles).then(res=>{
console.log(res)
alert('Updated')
})
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
                        <p>Role Priviliges Management</p>
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
                            </div>
                        </div>
                        <div className="tablex">
                            <div className="tablehead">
                                <input type="checkbox"   checked={deletedata.length===roles.length} onClick={e=>selectall()}/>
                                <h1>Role</h1>
                        
<h1>View</h1>
<h1>Add</h1>
<h1>Edit</h1>
<h1>Delete</h1>
<h1>Detail</h1>
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
    <input type="checkbox" className='chk' onClick={e=>handle(index,'view')} checked={val.view==='true'} />
</h1>
<h1>
    <input type="checkbox" className='chk' onClick={e=>handle(index,'add')} checked={val.add==='true'} />
</h1><h1>
    <input type="checkbox" className='chk' onClick={e=>handle(index,'edit')} checked={val.edit==='true'} />
</h1><h1>
    <input type="checkbox" className='chk' onClick={e=>handle(index,'delete')} checked={val.delete==='true'} />
</h1><h1>
    <input type="checkbox" className='chk' onClick={e=>handle(index,'detail')} checked={val.detail==='true'} />
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
                   <div className="max100 maxend">

<button onClick={e=>updatedata()}>Update</button>
                   </div>
                          
                     </div>
                     
                        </div>
                        
                    </div>

                </div>

   </div>
  )
}

export default Privil