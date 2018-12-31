import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Profile from './components/Profile'

export class Router extends React.Component
{
    render()
    {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/profile"} component={Profile}/>
                    <Redirect path={"/home"} to={'/'}/>
                </Switch>
            </BrowserRouter>)
    }
}