import React,{useState} from 'react'
import {Button} from './Button'
import './Navbar.css'
import {Link} from 'react-router-dom'






function Navbar(){
  const [click,setClick ] =useState('false');


  const handleClick = () => setClick(!click);

  
  
    return(
        <header>

          

  <nav class="menu">
    <ul onClick={handleClick} className={click? 'dropdown-menu clicked' : 'dropdown-menu'  }>
        <li>
    <Link to='/' className='navbar-logo '>PULL</Link> </li>
      <li class="has-sub-menu"><Link>Product</Link>
        <div class="sub-menu-wrapper">
          <ul class="sub-menu">
            <li class="sub-menu-heading"><a>Collaboration</a></li>
            <li><Link to ="/sharedinbox">Shared Inbox</Link></li>
            <li><Link>Boards</Link></li>
            <li><Link>Internal Team Chat</Link></li>
            <li><Link>Shared Labels</Link></li>
            <li><Link>Shared Drafts</Link></li>
          </ul>
          <ul class="sub-menu">
            <li class="sub-menu-heading"><a>Productivity</a></li>
            <li><Link to ="/views">Views</Link></li>
            <li><Link>Task</Link></li>
            <li><Link>Email Notes</Link></li>
            <li><Link>Checklists</Link></li>
            <li><Link>Due Dates</Link></li>
          </ul>
          <ul class="sub-menu">
            <li class="sub-menu-heading"><a>Workflow</a></li>
            <li><Link to ="/workflow">Workflow automation</Link></li>
            <li><Link>Team Reports</Link></li>
            <li><Link>Email Templates</Link></li>
            <li><Link>Email Tracking</Link></li>
            <li><Link>Email Sequences</Link></li>
          </ul>
          <ul class="sub-menu">
            <li class="sub-menu-heading"><a>Integrations</a></li>
            <li><Link>All Integrations</Link></li>
           
          </ul>

          <ul class="sub-menu">
            <li class="sub-menu-heading"><a>All Drag Features</a></li>
            <li><Link>See all Features</Link></li>
            
          </ul>
        </div>
      </li>
      <li class="has-sub-menu"><Link>Use Cases</Link>
        <div class="sub-menu-wrapper">
          <ul class="sub-menu">
            <li class="sub-menu-heading"><a>By Team </a></li>
            <li><Link>Customer Success</Link></li>
            <li><Link>Operations</Link></li>
            <li><Link>Sales</Link></li>
            <li><Link>Finance</Link></li>
            <li><Link>Marketing</Link></li>
            <li><Link>Company wide</Link></li>
          </ul>
          <ul class="sub-menu">
            <li class="sub-menu-heading"><a>By Workflow</a></li>
            <li><Link>Shared Inbox</Link></li>
            <li><Link>Help Desk</Link></li>
            <li><Link>Sales CRM</Link></li>
            <li><Link>To do List</Link></li>
            <li><Link>Marketing</Link></li>
            <li><Link>Project Management</Link></li>
          </ul>
           
        </div>
      </li>
      <li class="has-sub-menu"><Link>Learn</Link>
        <div class="sub-menu-wrapper">
          <ul class="sub-menu">
            <li class="sub-menu-heading"><a>Help  </a></li>
            <li><Link>Help Center</Link></li>
            <li><Link>Live Support</Link></li>
            <li><Link>On Boarding Guide</Link></li>
            <li><Link>Product Roadmap</Link></li>
          </ul>
          <ul class="sub-menu">
            <li class="sub-menu-heading"><a>Product Demos</a></li>
            <li><Link>Watch Recorded Demo</Link></li>
            <li><Link>Book Live Demo</Link></li>
           
          </ul>
          <ul class="sub-menu">
            <li class="sub-menu-heading"><a>Company</a></li>
            <li><Link>About us</Link></li>
            <li><Link>Customer stories</Link></li>
            <li><Link>Careers - we are hiring</Link></li>
            <li><Link>Manifesto</Link></li>
            <li><Link>Partners</Link></li>
            <li><Link>Blog</Link></li>
          </ul>
          <ul class="sub-menu">
            <li class="sub-menu-heading"><a>Featured Reads</a></li>
            <li><Link>20 best (and free) Task management software to help you at work</Link></li>
            <li><Link>The best G suite Project Management Apps</Link></li>
            <li><Link>The most insightful email statistics that are shaping 2020</Link></li>
            
          </ul>

          <ul class="sub-menu">
            <li class="sub-menu-heading"><a>Founder Content</a></li>
            <li><Link>Give a s#!t about founders</Link></li>
            
          </ul>
        </div>
      </li>
      <li>
    <Link to='/pricing' className='pricing' >PRICING</Link> </li>

      <Button />
    </ul>
  </nav>

    
</header>
  



    )


}




export default Navbar