import React from "react";
import Navigation from "../components/Navigation";
import './SuccessfulSubmission.css';

const SuccessfulSubmission = () => (
    <div className="success-page">
        <Navigation linkText="Home" linkPath="/"></Navigation>
        <h1 className="success-text">Success!  Your form has <br/> been submitted!</h1>
    </div>
)

export default SuccessfulSubmission;