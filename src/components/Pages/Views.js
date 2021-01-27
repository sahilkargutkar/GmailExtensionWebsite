import React from 'react'
import {Button} from '../Navbar/Button'
import {Button2} from '../Button2/Button2'
import './Views.css'
import graphicDesign from '../images/image1.png'

const Views = () => {
    return (
        <>
        <div className="Container" >

            <div className="Wrapper">
            <h1>Your workspace, your way.</h1>
                <h3>Set up your boards with the best view for the way that best suits your team.</h3>
               <div className='buttonclass' ><Button/>   <button className="stn"  >Get a Demo</button> </div>
                
                <div className="topimage"><img src={graphicDesign} /></div>

                <div className="ContentContainer">
            <div className="ContentWrapper">
            <h3>Kanban vs list.</h3>

            <p>Our default view is kanban, but you can switch to list view if you prefer. Want to turn your own inbox into a Drag board?</p>
              <p>   Just use the toggle button on the top right to navigate between your normal Gmail inbox view and Drag board view.</p>
            
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
                <h2>Sort & filter.</h2>
                <p>
                Want to see only cards assigned to you, or only unread emails, or only cards with certain colors or tags? Filter your boards in one-click. If you prefer to sort emails by due date you can sort them in different ways in one-click too.

                </p>
                <button className="btn"  >See all features</button>
                </div>

               


            </div>


                <div className="BottomContainer">
                <h1 className="Bottomh2"></h1>

                <div className="BottomWrapper">
                <h2>Customize columns.</h2>
                <p>
                Need more columns? Need to insert a column in between existing one? No problem. Rename, rearrange or even expand columns like in a spreadsheet. Your workflow, your way.

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

export default Views
