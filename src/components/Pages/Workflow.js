import React from 'react'
import {Button} from '../Navbar/Button'
import {Button2} from '../Button2/Button2'
import './Workflow.css'
import graphicDesign from '../images/image1.png'

const Workflow = () => {
    return (
        <>
        <div className="Container" >

            <div className="Wrapper">
            <h1>Automate teamwork.</h1>
                <h3>Create rules to automate your workflows. It helps your team focus on the things that matter the most.</h3>
               <div className='buttonclass' ><Button/>   <button className="stn"  >Get a demo</button> </div>
                
                <div className="topimage"><img src={graphicDesign} /></div>

                <div className="ContentContainer">
            <div className="ContentWrapper">
            <h3>Automatically move cards across boards.</h3>

            <p>Let Drag organize incoming emails for you. If you are using different aliases, you can organize them in different workflows automatically – send emails from a client, supplier, or contractor to their respective boards. If emails are coming from online forms, you can move them into exactly the right place where actions are taken.</p>
              {/* <p>   Drag turns Gmail into your team’s workspace – one single workspace to run your business.</p> */}
            
              {/* <button className="btn"  >See all features</button> */}
            </div>

            <div className="ContentImage">
            <img src={graphicDesign} />

            </div>


            </div>

            <div className="MidContainer">
                <h2 className="Midh2"></h2>

                <div className="MidImage">
                <img src={graphicDesign} />

                </div>


                <div className="MidWrapper">
                <h2>
Tag, assign or color code.</h2>
                <p>
                
                No need to tag, assign or color code cards over and over again. Simply create rules to put your workflow organization in the auto-pilot. So you can focus on what matters.

                </p>
                {/* <button className="btn"  >See all features</button> */}
                </div>

               


            </div>


                {/* <div className="BottomContainer">
                <h1 className="Bottomh2"></h1>

                <div className="BottomWrapper">
                <h2>Bring your team together.</h2>
                <p>
                Collaborate with your team from one tool – your teams can manage customers, close sales and plan projects without being spread across lots of different tools.

                </p>
                <button className="btn"  >See all features</button>



                </div>

                <div className="MidImage">
                <img src={graphicDesign} />

                </div>


                </div> */}
                </div>
        
        
        
        
        
        
        </div>


                    
        </>
    )
}

export default Workflow
