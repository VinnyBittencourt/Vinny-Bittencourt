import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Old from "./pages/oldversion";


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/oldversion'  component={Old} />
            </Switch>
        </BrowserRouter>
    );
}