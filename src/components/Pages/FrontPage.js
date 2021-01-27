import React from 'react'
import {Button} from '../Navbar/Button'
import {Button2 } from '../Button2/Button2'
import './FrontPage.css'
import graphicDesign from '../images/image1.png'

// import {InfodataOne} from '../InfoSection/InfoData'

// import {FrontPageContainer,FrontPageWrapper,Fronth1,Fronth3,MidContainer,Midh1,Midh2,Midspan,
    // FrontImg,ContentContainer,Contenth3,Contentp,ContentImg,BottomContainer,Bottomh2,Bottomh1,Bottomspan} from './FrontElements'

const FrontPage = () => {
    return (
        <>
        <div className="Container" >

            <div className="Wrapper">
            <h1>All-in-one workspace in Gmail.</h1>
                <h3>Stop switching between tools. Run your entire workflow from your inbox.</h3>
               <div className='buttonclass' ><Button/>   <button className="stn"  >Watch demo</button> </div>
                
                <div className="topimage"><img src={graphicDesign} /></div>

                <div className="ContentContainer">
            <div className="ContentWrapper">
            <h3>One workspace, in Gmail.</h3>

            <p>No more navigating between tools or forwarding or cc’ing between internal teams.</p>
              <p>   Drag turns Gmail into your team’s workspace – one single workspace to run your business.</p>
            
              <button className="btn"  >See all features</button>
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
                <h2>Work, your way.</h2>
                <p>
                Different teams need different things at different times, and usually, it starts from email. Control teamwork in one simple way, across the business.

                </p>
                <button className="btn"  >See all features</button>
                </div>

               


            </div>


                <div className="BottomContainer">
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


                </div>
                </div>
        
        
        
        
        
        
        </div>


                    
        </>
    )
}

export default FrontPage
