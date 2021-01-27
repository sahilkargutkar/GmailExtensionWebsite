
import React,{useState} from 'react'
// import {MenuItems } from './MenuItems'
import {Link} from 'react-router-dom'
import './Dropdown.css'

const Dropdown = () => {
    const [click,setClick] = useState(false)


    const handleClick = () => setClick(!click)
    

           
                return(
                    <nav class="menu">
                    <ul>
                        <li class="has-sub-menu"><a href="#">Product</a>
                     <div class="sub-menu-wrapper">
                        <ul class="sub-menu">
                             <li class="sub-menu-heading"><a>Team</a></li>
                                   <li><a href="#">Team 1</a></li>
                                   <li><a href="#">Team 2</a></li>
                                 <li><a href="#">Team 3</a></li>
                                 <li><a href="#">Team 4</a></li>
                                        </ul>
                            <ul class="sub-menu">
                                <li class="sub-menu-heading"><a>Business</a></li>
                                <li><a href="#">Business 1</a></li>
                                <li><a href="#">Business 2</a></li>
                                <li><a href="#">Business 3</a></li>
                                <li><a href="#">Business 4</a></li>
                            </ul>
                            <ul class="sub-menu">
                                <li class="sub-menu-heading"><a>Timing</a></li>
                                <li><a href="#">Timing 1</a></li>
                                <li><a href="#">Timing 2</a></li>
                                <li><a href="#">Timing 3</a></li>
                                <li><a href="#">Timing 4</a></li>
                            </ul>
                            <ul class="sub-menu">
                                <li class="sub-menu-heading"><a>Rules</a></li>
                                <li><a href="#">Rule 1</a></li>
                                <li><a href="#">Rule 2</a></li>
                                <li><a href="#">Rule 3</a></li>
                                <li><a href="#">Rule 4</a></li>
                            </ul>
                            </div>
                        </li>
                        <li class="has-sub-menu"><a href="#">Use Cases</a>
                            <div class="sub-menu-wrapper">
                            <ul class="sub-menu">
                                <li class="sub-menu-heading"><a>Cosmetics</a></li>
                                <li><a href="#">Cosmetic 1</a></li>
                                <li><a href="#">Cosmetic 2</a></li>
                                <li><a href="#">Cosmetic 3</a></li>
                                <li><a href="#">Cosmetic 4</a></li>
                            </ul>
                            <ul class="sub-menu">
                                <li class="sub-menu-heading"><a>Food</a></li>
                                <li><a href="#">Food 1</a></li>
                                <li><a href="#">Food 2</a></li>
                                <li><a href="#">Food 3</a></li>
                                <li><a href="#">Food 4</a></li>
                            </ul>
                            <ul class="sub-menu">
                                <li class="sub-menu-heading"><a>Cars</a></li>
                                <li><a href="#">Car 1</a></li>
                                <li><a href="#">Car 2</a></li>
                                <li><a href="#">Car 3</a></li>
                                <li><a href="#">Car 4</a></li>
                            </ul>
                            <ul class="sub-menu">
                                <li class="sub-menu-heading"><a>Sports</a></li>
                                <li><a href="#">Sports 1</a></li>
                                <li><a href="#">Sports 2</a></li>
                                <li><a href="#">Sports 3</a></li>
                                <li><a href="#">Sports 4</a></li>
                            </ul>
                            </div>
                        </li>
                        <li class="has-sub-menu"><a href="#">Learn</a>
                            <div class="sub-menu-wrapper">
                            <ul class="sub-menu">
                                <li class="sub-menu-heading"><a>Development</a></li>
                                <li><a href="#">Development 1</a></li>
                                <li><a href="#">Development 2</a></li>
                                <li><a href="#">Development 3</a></li>
                                <li><a href="#">Development 4</a></li>
                            </ul>
                            <ul class="sub-menu">
                                <li class="sub-menu-heading"><a>Engineering</a></li>
                                <li><a href="#">Engineering 1</a></li>
                                <li><a href="#">Engineering 2</a></li>
                                <li><a href="#">Engineering 3</a></li>
                                <li><a href="#">Engineering 4</a></li>
                            </ul>
                            <ul class="sub-menu">
                                <li class="sub-menu-heading"><a>Softwares</a></li>
                                <li><a href="#">Software 1</a></li>
                                <li><a href="#">Software 2</a></li>
                                <li><a href="#">Software 3</a></li>
                                <li><a href="#">Software 4</a></li>
                            </ul>
                            <ul class="sub-menu">
                                <li class="sub-menu-heading"><a>SEO</a></li>
                                <li><a href="#">SEO 1</a></li>
                                <li><a href="#">SEO 2</a></li>
                                <li><a href="#">SEO 3</a></li>
                                <li><a href="#">SEO 4</a></li>
                            </ul>
                            </div>
                        </li>
                                    
                                       </ul> </nav>
                )


            
            
            
        
    
}

export default Dropdown
