import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Old from "./pages/oldversion";
import Tablet from "./pages/tablet"
import Rf from "./pages/RF"


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/oldversion'  component={Old} />
                <Route path='/tablet'  component={Tablet} />
                <Route path='/rf'  component={Rf} />
            </Switch>
        </BrowserRouter>
    );
}