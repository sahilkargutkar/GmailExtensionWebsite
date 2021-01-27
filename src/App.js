import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import FrontPage from './components/Pages/FrontPage';
import Footer from './components/Footer/Footer'
import Pricing from './components/Pages/Pricing'
import Workflow from './components/Pages/Workflow'
import SubFooter from './components/SubFooter/SubFooter';
import Views from './components/Pages/Views';
import SharedInbox from './components/Pages/SharedInbox';
// import { InfodataOne } from './components/InfoSection/InfoData';


function App() {
  return (
    <Router>  
    <Navbar />
    <Route exact path ="/pricing" component={Pricing} />
    <Route exact path="/sharedinbox" component={SharedInbox} />
    <Route exact path="/workflow" component={Workflow} />
    <Route exact path ="/views" component={Views} />
    <Route exact path ="/" component={FrontPage} />
    <SubFooter/>
    <Footer />
    </Router> 
  );
}

export default App;
