import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './SidebarData';
import {IconContext} from 'react-icons'
import './Navbar.css'


function Navbar() {
const [sidebar, setSidebar] = useState(false)

const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{color: '#212426'}}>
      <div className='navbar'>
        <Link to="#" className='menu-bars' onClick={showSidebar}>
           <FaIcons.FaBars size={25}  /> 
        </Link>
      </div>
      <nav className={sidebar ? 'nav-manu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return(
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}
export default Navbar