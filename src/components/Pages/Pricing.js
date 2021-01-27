import React, { useState } from 'react'
import '../Pricing/Pricing.css'
import {Button} from '../Navbar/Button'


const Pricing =() =>{



    const [active, setactive] = useState("FirstContainer")

    return(
        <>
                 
          <div  className="PricingContainer" id="/pricing">
                <h1>Simple Pricing.</h1>
          
                <div className="PricingWrapper ">

                    <div className="BillingContainer">

                        <div className="BillingWrapper">

                            <ul className="Navigationtab" >
                                    <li>
                    <a   onClick={() =>setactive ("FirstContainer")} style={{textDecoration:"none",color:"black"}}><span>Billed Yearly</span></a></li>
                 <li><a  onClick={() =>setactive ("SecondContainer")} style={{textDecoration:"none",color:"black"}}><span>Billed Monthly</span></a></li>
                                  




                            </ul>

  {/* first container */}

       {active === "FirstContainer" && <div  >
                            <div className="BillingRowContainer"> 
                            <div className="BillingRowWrapper">
                                <div className="BillingColumnContainer" >

                                <div className="BillingColumnWrapper">

                                        <h2>Free</h2>
                                      <h1>$0</h1>
                                      <h3>user/month</h3>      
                                    <span>Forever Free.For individuals that need essentials</span>
                                    <ul>
                                        <li>Solo inbox</li>
                                            <li>10 boards</li>
                                            <li>Unlimited productivity</li>
                                            <li>Unlimited integration</li>
                                    <li>Limited workflow</li>
                                    <li></li>
                                    </ul>

                                        <Button />

                                </div>





                                </div>

                                <div className="BillingColumnContainer">

<                                   div className="BillingColumnWrapper">

                                            <h2>Pro</h2>
                                        <h1>$8</h1>
                                        <h3>user/month</h3>      
                                        <span>For Teams that want to control their work in one tool,in gmail </span>
                                        <ul>
                                        <li>Unlimited shared inbox</li>
                                                <li>Unlimited shared boards</li>
                                                <li>Unlimited collaboration</li>
                                                <li>Unlimited workflow</li>
                                        <li>Consolidated billing</li>
                                        <li>Dedicated Support</li>
                                        <li>Remove 'Sent by Drag'</li>
                                        </ul>


                                        <Button />
                                    </div>





                                    </div>






                            </div>
                            
                        
                            </div>




</div>      }


{/* Second container */}

{active === "SecondContainer" && <div>
                            <div className="BillingRowContainer"> 
                            <div className="BillingRowWrapper">
                                <div className="BillingColumnContainer" >

                                <div className="BillingColumnWrapper">

                                        <h2>Free</h2>
                                      <h1>$0</h1>
                                      <h3>user/month</h3>      
                                    <span>Forever Free.For individuals that need essentials</span>
                                    <ul>
                                    <li>Solo inbox</li>
                                            <li>10 boards</li>
                                            <li>Unlimited productivity</li>
                                            <li>Unlimited integration</li>
                                    <li>Limited workflow</li>
                                    </ul>


                                    <Button />
                                </div>





                                </div>

                                <div className="BillingColumnContainer">

<                                   div className="BillingColumnWrapper">

                                            <h2>Pro</h2>
                                        <h1>$10</h1>
                                        <h3>user/month</h3>      
                                        <span>For Teams that want to control their work in one tool,in gmail </span>
                                        <ul>
                                        <li>Unlimited shared inbox</li>
                                                <li>Unlimited shared boards</li>
                                                <li>Unlimited collaboration</li>
                                                <li>Unlimited workflow</li>
                                        <li>Consolidated billing</li>
                                        <li>Dedicated Support</li>
                                        <li>Remove 'Sent by Drag'</li>
                                        </ul>


                                        <Button />
                                    </div>





                                    </div>






                            </div>
                            
                            
                            
                            
                            
                            
                            </div>

                            </div>

    }










                        </div>









                    </div>











                </div>











            </div>



    
    
    
    
        </>
        )

}
  export default Pricing