import React from "react";
import PropTypes from "prop-types";
import './Navigation.css';

class Navigation extends React.Component {
    static propTypes = {
        linkPath: PropTypes.string,
        linkText: PropTypes.string,
    };

    render() {
        return (
            <div className="project-header">
                <div className="header-container">
                    <div className="header-flex">
                        <img className="company-logo" src="/assets/Logo.png" alt="website logo" />
                        <a className="nav-link" href={this.props.linkPath}>{this.props.linkText}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;
