import React from 'react'
import {Button} from '../Navbar/Button'
import {Button2} from '../Button2/Button2'
import './SharedInbox.css'
import graphicDesign from '../images/image1.png'

const SharedInbox = () => {
    return (
        <>
        
        <div className="Container" >

            <div className="Wrapper">
            <h1>Shared inbox for G Suite.</h1>
                <h3>Manage group emails like support@, sales@ or any other team email right from Gmail.</h3>
               <div className='buttonclass' ><Button/>   <button className="stn"  >Get a demo</button> </div>
                
                <div className="topimage"><img src={graphicDesign} /></div>

                <div className="ContentContainer">
            <div className="ContentWrapper">
            <h3>The most visual Shared Inbox around.</h3>

            <p>Connect real accounts or Google Groups to Drag boards and share them with your team. If you’re collaborating with customers or contractors, you can share them, cross-domain.

</p>
              <p>    Customize them your way with kanban or list views, sort & filter, rename, rearrange or expand columns.</p>
            
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
                    More than Emails: workflows.</h2>
                <p>
                Emails are the focus of most workflows. But sometimes email alone is not enough. Have all the context you need around a workflow from one place: email, contact info, to-do lists, notes, files.

                </p>
                {/* <button className="btn"  >See all features</button> */}
                </div>

               


            </div>


                <div className="BottomContainer">
                <h1 className="Bottomh2"></h1>

                <div className="BottomWrapper">
                <h2>
                        You choose who can see what.</h2>
                <p>
                Collaborate with your team from one tool – your teams can manage customers, close sales and plan projects without being spread across lots of different tools.

                </p>
                {/* <button className="btn"  >See all features</button> */}



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

export default SharedInbox
