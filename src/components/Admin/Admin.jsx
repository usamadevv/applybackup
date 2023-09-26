import React, { useState } from 'react'
import a1 from '../../images/a1.png'
import a2 from '../../images/a2.png'
import b1 from '../../images/b1.png'
import b2 from '../../images/b2.png'
import a3 from '../../images/a3.png'
import a4 from '../../images/a4.png'
import { HiFilter } from 'react-icons/hi'
import logo from '../../images/logo.png'
import a5 from '../../images/a5.png'
import { IoMenuOutline } from 'react-icons/io5'
import { BsCalendar2Date } from 'react-icons/bs'
import a6 from '../../images/a6.png'
import user from '../../images/user.png'
import a7 from '../../images/a7.png'
import Usermanage from './Usermanage'
import RoleManage from './RoleManage'
import Contractor from './Contractor'
import Jobseeker from './Jobseeker'
import Common from './Common'
import Privil from './Privil'
import Hired from './Hired'
import Project from './Project'
const Admin = () => {
    const [i, seti] = useState(0)
    return (
        <div className="admin">
            <div className="adminfirst">
                <img src={logo} alt="" />
                <h1>HR Management</h1>
                <div className="menuitem" onClick={e=>seti(0)}>
                    <img src={b1} alt="" />
                    <p>Dashboard </p>
                </div>    <div className="menuitem" onClick={e=>seti(1)}>
                    <img src={a1} alt="" />
                    <p>User Management</p>
                </div>    <div className="menuitem" onClick={e=>seti(2)}>
                    <img src={a2} alt="" />
                    <p>Role Management</p>
                </div>    <div className="menuitem" onClick={e=>seti(3)}>
                    <img src={a5} alt="" />
                    <p>Role Priviliges Management</p>
                </div>    <div className="menuitem" onClick={e=>seti(4)}>
                    <img src={a7} alt="" />
                    <p>Contractor Management</p>
                </div>    <div className="menuitem" onClick={e=>seti(5)}>
                    <img src={b2} alt="" />
                    <p>Job Seeker Management</p>
                </div>    <div className="menuitem" onClick={e=>seti(7)}>
                    <img src={a4} alt="" />
                    <p>Hired Job seeker and Contractor</p>
                </div>  
                <h1 >Projects</h1>
                <div onClick={e=>seti(8)} className="menuitem" s>
                    <img src={a5} alt="" />
                    <p>Project Management</p>
                </div>  
                <h1 onClick={e=>seti(6)} >
                   
                    Common site settings
                </h1>
                <h1>
                    Notification settings
                </h1>

            </div>
          {i===0&&  <div className="adminsecond">
                <div className="headeradmin">
                    <div className="priormenu">
                        <IoMenuOutline className='hamb' />
                        <p>Dashboard</p>
                    </div>
                    <img src={user} alt="" />


                </div>
                <div className="bodyadmin">
                    <div className="bodyheader">
                        <div className="priorbody">
                            <p>Overview</p>
                            <h5>   <BsCalendar2Date className='lp' />19-9-2023</h5>
                        </div>
                        <button>
                            <HiFilter />
                            Filter
                        </button>

                    </div>
                    <div className="bodyheader">
                        <div className="card card1">
                            <div className="priorcard">
                                <p>          143,34</p>
                                <h4>
                                    Total Roles
                                </h4>
                            </div>
                            <div className="iconcard">
                                <img src={a2} alt="" />
                            </div>

                        </div>
                        <div className="card card4">
                            <div className="priorcard">
                                <p>          143,34</p>
                                <h4>
                                    Total Roles
                                </h4>
                            </div>
                            <div className="iconcard">
                                <img src={a2} alt="" />
                            </div>

                        </div>
                        <div className="card card2">
                            <div className="priorcard">
                                <p>          143,34</p>
                                <h4>
                                    Total Roles
                                </h4>
                            </div>
                            <div className="iconcard">
                                <img src={a2} alt="" />
                            </div>

                        </div>
                        <div className="card card3">
                            <div className="priorcard">
                                <p>          143,34</p>
                                <h4>
                                    Total Roles
                                </h4>
                            </div>
                            <div className="iconcard">
                                <img src={a2} alt="" />
                            </div>

                        </div>

                    </div>
                    <div className="bodyheader">
                        <div className="contcard">
                            <div className="topcld">
                                Job Seeker Application
                                <div className="stats">
                                    +123.3%
                                </div>
                            </div>
                            <div className="botcld">
                                <div className="frst">
                                    <h2>1233</h2>
                                    <p>Selected</p>
                                </div> <div className="scnd">
                                    <h2>1233</h2>
                                    <p>Selected</p>
                                </div>
                            </div>
                            
                        </div>
                           <div className="contcard">
                            <div className="topcld">
                                Job Seeker Application
                                <div className="stats redstats">
                                    +123.3%
                                </div>
                            </div>
                            <div className="botcld">
                                <div className="frst">
                                    <h2>1233</h2>
                                    <p>Selected</p>
                                </div> <div className="scnd">
                                    <h2>1233</h2>
                                    <p>Selected</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>

          }
          {i===1&&
          <Usermanage />

          }
            {i===2&&
          <RoleManage />

          }
          {i===4&&
        <Contractor />

        }
         {i===5&&
        <Jobseeker />

        }

{i===6&&
        <Common />

        }


{i===7&&
        <Hired />

        }

        {i===3&&
                <Privil />
        
                }

        {i===8&&
                <Project />
        
                }
        </div>
    )
}

export default Admin