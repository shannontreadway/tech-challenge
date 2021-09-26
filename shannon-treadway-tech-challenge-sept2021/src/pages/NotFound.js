import React from "react";
import Navigation from "../components/Navigation";
import './NotFound.css';

const NotFound = () => (
    <div className="error-page">
        <Navigation linkText="Home" linkPath="/"></Navigation>
        <h1 className="error404">404 Error, Page Not Found.</h1>
    </div>
)

export default NotFound;