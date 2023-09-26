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
import {GoLinkExternal} from 'react-icons/go'
import { BsCalendar2Date } from 'react-icons/bs'
import a6 from '../../images/a6.png'
import user from '../../images/user.png'
import a7 from '../../images/a7.png'
import {BiArrowBack} from 'react-icons/bi'
import {RiShareForward2Fill} from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
import { api } from '../apis'
const Project = () => {
function deleted(){

    axios.post(`${api}project/delete`,{
       ids:deletedata
    }).then(res=>{
        axios.get(`${api}project/getallusers`).then(res2=>{
            setprojects(res2.data.Projects)
                        console.log(res2)
                        setdeletedata([])
        
                setcurrentItems(res2.data.Projects&&res2.data.Projects.slice(itemOffset, endOffset))
                setpageCount(Math.ceil(res2.data.Projects&&res2.data.Projects.length / 4))
                setadduser('adduser1')
                        
                    })
    
    })
}
const [deletedata, setdeletedata] = useState([])
    const [title, settitle] = useState('')
    const [status, setstatus] = useState('Pending')
    const [start, setstart] = useState('')
    const [end, setend] = useState('')
    const [priority, setpriority] = useState('High')
    const [phone, setphone] = useState('')
    const [projects, setprojects] = useState([])
    const [itemOffset, setItemOffset] = useState(0);
const [currentItems, setcurrentItems] = useState([])
    const endOffset = itemOffset + 4;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const [adduser, setadduser] = useState('adduser1')
    const [pageCount, setpageCount] = useState(0)

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * 4) % projects.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
      
    };
    useEffect(() => {
      
        axios.get(`${api}project/getallusers`).then(res2=>{
    
            setprojects(res2.data.Projects)
            console.log(res2)
setcurrentItems(res2.data.Projects.slice(itemOffset, endOffset))
setpageCount(Math.ceil(res2.data.Projects.length / 4))
        })
      return () => {
        
      }
    }, [])
    useEffect(() => {
    
        setcurrentItems(projects&&projects.slice(itemOffset, endOffset))
        setpageCount(Math.ceil(projects&&projects.length / 4))
          
            return () => {
              
            }
          }, [itemOffset])
          
    function aduser(){
        axios.post(`${api}project/add`,{
            title:title,
            status:status,
            end:end,
            start:start,
            priority:priority,
            status:status,
            Task:[]
        }).then(res=>{

            console.log(res)
            axios.get(`${api}project/getallusers`).then(res2=>{
    setprojects(res2.data.Projects)
                console.log(res2)

        setcurrentItems(res2.data.Projects&&res2.data.Projects.slice(itemOffset, endOffset))
        setpageCount(Math.ceil(res2.data.Projects&&res2.data.Projects.length / 4))
        setadduser('adduser1')
                
            })
        })
    }

    function aduser2(){
        axios.post(`${api}project/updatetask`,{
           task:{
            task:ttitle,
            status:tstatus,
            end:tend,
            start:tstart,
            description:desc,
            manager:tlead,
           },
            id:currproject._id
        }).then(res=>{
settitle('')
settstatus('')
settend('')
settstart('')
setdesc('')
settlead('')
console.log(res)
            axios.get(`${api}project/getallusers`).then(res2=>{
    setprojects(res2.data.Projects)
                console.log(res2)

        setcurrentItems(res2.data.Projects&&res2.data.Projects.slice(itemOffset, endOffset))
        setpageCount(Math.ceil(res2.data.Projects&&res2.data.Projects.length / 4))
        setadduser2('adduser1')
      openthis(res2.data.Projects&&res2.data.Projects.find((item)=>item._id===currproject._id))
            })
        })
    }
    const [window, setwindow] = useState(0)

function selectall(){
    
    console.log(deletedata)
    if(projects.length===deletedata.length){
        setdeletedata([])
    }
    else{
        setdeletedata([])
        console.log(projects)
    projects.forEach(element => {
      
     
        setdeletedata((prevdeletedata) => [...prevdeletedata, element._id]);

       console.log(element)
        
    });
}
}
const [adduser2, setadduser2] = useState('adduser1')
const [ttitle, setttitle] = useState('')
const [tend, settend] = useState('')
 const [tstart, settstart] = useState('')
 const [currproject, setcurrproject] = useState()
 function openthis(val){
    setcurrproject(val)
    setwindow(1)
 }
const [tstatus, settstatus] = useState('')
const [tlead, settlead] = useState('')
const [desc, setdesc] = useState('')

  return (
   <div className="adminsecond">
    <div className={adduser}>
     <div className="subadduser">   <h1>Add Project </h1>
        <div className="inpuj">
            <p>Project title *</p>
            <input type="text" value={title} onChange={e=>settitle(e.target.value)}  />
        </div>
        <div className="inpuj">
        <p>Start date</p>
            <input type="text" value={start} onChange={e=>setstart(e.target.value)} />
        </div>
        <div className="inpuj">
        <p>End Date *</p>
            <input type="text" value={end} onChange={e=>setend(e.target.value)}  />
        </div>
      
        <div className="inpuj">
            <p>Priority</p>
            <select name="" id="" value={priority} onChange={e=>setpriority(e.target.value)}>

                <option value="High">High</option>
                <option value="Medium">Medium</option>  <option value="Low">Low</option>  
                
            </select>
        </div>   
        
        
         <div className="inpuj">
            <p>Status *</p>
            <select name="" id="" value={status} onChange={e=>setstatus(e.target.value)}>

                <option value="In progress">In progress</option>

                <option value="Testing">Testing</option>

                <option value="Pending">Pending</option>

                <option value="Complete">Complete</option>
            </select>
        </div>
        <div className="inpbtns">
            <button onClick={e=>aduser()}>Save</button>
            <button className='cancel' onClick={e=>setadduser('adduser1')}>Cancel</button>
        </div>
        </div>


    </div>
    <div className={adduser2}>
     <div className="subadduser">   <h1>Add Task </h1>
        <div className="inpuj">
            <p>Task title *</p>
            <input type="text" value={ttitle} onChange={e=>setttitle(e.target.value)}  />
        </div>
        <div className="inpuj">
            <p>Task Coordinator *</p>
            <input type="text" value={tlead} onChange={e=>settlead(e.target.value)}  />
        </div>
        <div className="inpuj">
        <p>Start date</p>
            <input type="text" value={tstart} onChange={e=>settstart(e.target.value)} />
        </div>
        <div className="inpuj">
        <p>End Date *</p>
            <input type="text" value={tend} onChange={e=>settend(e.target.value)}  />
        </div>
      
    
         <div className="inpuj">
            <p>Status *</p>
            <select name="" id="" value={tstatus} onChange={e=>settstatus(e.target.value)}>

                <option value="In progress">In progress</option>

                <option value="Testing">Testing</option>

                <option value="Pending">Pending</option>

                <option value="Complete">Complete</option>
            </select>
        </div>
        <div className="inpuj inpuj2">
        <p>Description *</p>
        <textarea name="" id="" cols="30" rows="10" onChange={e=>setdesc(e.target.value)}></textarea>
        </div>
      
    


        <div className="inpbtns">
            <button onClick={e=>aduser2()}>Save</button>
            <button className='cancel' onClick={e=>setadduser2('adduser1')}>Cancel</button>
        </div>
        </div>


    </div>
      <div className="headeradmin">
                    <div className="priormenu">
                        <IoMenuOutline className='hamb' />
                        <p>Project Management</p>
                    </div>
                    <img src={user} alt="" />


                </div>
         { window===0&&      <div className="bodyheader">
                        <div className="card card1">
                            <div className="priorcard">
                                <p>         {projects.length}</p>
                                <h4>
                                    Total Projects
                                </h4>
                            </div>
                            <div className="iconcard">
                                <img src={a2} alt="" />
                            </div>

                        </div>
                        <div className="card card4">
                            <div className="priorcard">
                                <p>         {projects.length}</p>
                                <h4>
                                        Total Projects
                                </h4>
                            </div>
                            <div className="iconcard">
                                <img src={a2} alt="" />
                            </div>

                        </div>
                        <div className="card card2">
                            <div className="priorcard">
                                <p>         {projects.length}</p>
                                <h4>
                                        Total Projects
                                </h4>
                            </div>
                            <div className="iconcard">
                                <img src={a2} alt="" />
                            </div>

                        </div>
                        <div className="card card3">
                            <div className="priorcard">
                                <p>         {projects.length}</p>
                                <h4>
                                        Total Projects
                                </h4>
                            </div>
                            <div className="iconcard">
                                <img src={a2} alt="" />
                            </div>

                        </div>

                    </div>}
                <div className="tablebox">
                   {window===0? <div className="subtablebox">
                        <div className="topbaruser">
                         <div className="inputse">
                         <AiOutlineSearch  className='inh'/>
                            <input type="text" placeholder='Search' />
                          
                         </div>
                           <div className="searchbtn">
                                <button onClick={e=>deleted()}>- Delete </button>
                                <button onClick={e=>setadduser('adduser')}>+ Project</button>
                            </div>
                        </div>
                        <div className="tablex">
                            <div className="tablehead">
                                <input type="checkbox" checked={deletedata.length===projects.length} onClick={e=>selectall()} />
                                <h1>Project title</h1>
                                <h1>
                              Start date
                                </h1>   <h1>
                                  
                                  End date
                                </h1>   <h1 style={{minWidth:'250px'}}>
priority                               </h1>

<h1>
    status
</h1>
<h1></h1>
                            </div>
                     {currentItems&&currentItems.map((val,index)=>(   
                        
                        <div className={`tablebody ${index%2===0?'lg':''}`}>
                            <input type="checkbox" checked={deletedata.includes(val._id)} onChange={(e) => {
          const id = val._id;
          setdeletedata((prevIds) =>
            e.target.checked ? [...prevIds, id] : prevIds.filter((item) => item !== id)
          );
        }}/>
                                <h1>{val.title}</h1>
                                <h1 >
                                   {val.start} 
                                </h1>   <h1>
                                {val.end}
                                </h1>   <h1 style={{minWidth:'250px'}}>
                                <button  className='btnstatus' style={{backgroundColor: val.priority==='Low'?'#ffdcdc':val.priority==='High'?'#d0ffd4':'#ffdd95',color:val.priority==='Low'?'#cb0404':val.priority==='High'?'#01cd41':'#dda200'}}>


{val.priority}
</button>                          </h1>

<h1  >
    <button  className='btnstatus' style={{backgroundColor: val.status==='Pending'?'#ffdcdc':val.status==='In progress'?'#fedcff':val.status==='Complete'?'#d0ffd4':'#ffdd95',color:val.status==='Pending'?'#cb0404':val.status==='In progress'?'#bc01cd':val.status==='Complete'?'#01cd41':'#dda200'}}>


    {val.status}
    </button>
</h1>
<h1>

<button onClick={e=>openthis(val)} className='phbtn2'>open <GoLinkExternal className='phic' /></button>

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
                        
                    </div>:

                    <>
                        <div className="topbaruser">
                   
                       <div className="sdfd" onClick={e=>setwindow(0)}>
                       <BiArrowBack /> Back
                       </div>
                           <div className="searchbtn">
                             
                            </div>
                        </div>
                         <div className="topbaruser">
                       
                       <div className="sdfd">
<h4>Tasks</h4>
                       </div>
                           <div className="searchbtn">
                             
                                <button onClick={e=>setadduser2('adduser')}>+ Task</button>
                            </div>
                        </div>
                    <div className="tasks">
                   {currproject&&currproject.Task.map((val)=>(  <div className="task">
                        <div className="heade">
                            <img src={user} alt="" />
                            <div className="intr">
                                <h3>
                                   {
                                   val.manager}
                                </h3>
                                <h4>
                               {val.start}
                                </h4>
                            </div>
                        </div>

                        <div className="desc">
                    {val.description}
                     </div>
                        <div className="team">
                            <p>Team</p>
                            <h6>Waqar, John +6 more</h6>
                        </div>
                        <div className="foote">
                            <h3>
                                Due date: <p>{val.end}</p>
                            </h3>
                          <div className="klo" >
                            {val.status}
                          </div>

                    
                        </div>
                     </div>))

                   }

                    </div>
                    </>

}
                </div>

   </div>
  )
}

export default Project