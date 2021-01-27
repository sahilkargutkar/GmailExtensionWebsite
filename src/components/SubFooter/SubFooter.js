import React from 'react'
import { Button2 } from '../Button2/Button2'
import { Button } from '../Navbar/Button'
import './SubFooter.css'



const SubFooter = () => {
    
    return (
        <>
            <div className="SubFooterContainer">
                <h2 >Join 30K+ users<span style={{color: "red"}} >.</span> From teams like <span style={{color: "#f2ba2e"}} >Uber</span>, <span style={{color: "#4b8aef"}}  >Airbnb</span> and<span style={{color: "#3fa65a"}}  > Canva</span>. </h2>
                <h1>Get started in minutes<span style={{color: "red"}} >.</span></h1>
            <p>We have world-class support ready to help (and waiting!)</p>
                <Button/>  <button className="stn"  >Start a chat</button>

            </div>
        </>
    )
}

export default SubFooter
