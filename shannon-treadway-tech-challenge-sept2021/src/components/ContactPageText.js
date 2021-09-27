import React from "react";
import PropTypes from "prop-types";
import "./ContactPageText.css";

class ContactPageText extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        paragraph: PropTypes.string,
    };

    render() {
        return (
            <div className="contact-text-container">
                <div className="contact-text-content">
                    <h1 className="title">
                        <span className="underline">Heading</span> One
                    </h1>
                    <p>{this.props.title}</p>
                    <p>{this.props.paragraph}</p>
                </div>
            </div>
        );
    }
}

export default ContactPageText;
