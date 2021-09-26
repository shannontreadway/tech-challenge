import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SuccessfulSubmission from "./pages/SuccessfulSubmission";

// I know that since this is such a small project, this could technically be placed straight into App.js.  However, for the sake of practice, and since this isn't going to production, I elected to use a separate file for the router.

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={ContactPage} />
            <Route path='/success' component={SuccessfulSubmission} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
