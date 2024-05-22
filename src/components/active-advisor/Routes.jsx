import React from "react"
import Homepage from "./Homepage"
import About from "../pages/About";
import Communities from "../pages/Communities"
import Contact from "../pages/Contact"
import Profile from "../pages/Profile";
import Error from "../pages/Error";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import Chat from "../pages/Chat"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export const Routes =() => {
    return (
        <Router>
            <Switch>
            <Route path="/" exact component={Homepage} />   
            <Route path="/Homepage">
                <Homepage />
            </Route>
            <Route path="/About" >
                <About />
            </Route>
            <Route path="/Communities" >
                <Communities />
            </Route>
        
            <Route path="/Contact" >
                <Contact />
            </Route>
            <Route path="/LogIn">
                <LogIn />
            </Route>
            <Route path="/SignUp">
                <SignUp />
            </Route>
            <Route path="/Profile">
                <Profile />
            </Route>
            
            <Route path="/*" >
                <Error />
            </Route>
            
            </Switch>
        </Router>
    )
}