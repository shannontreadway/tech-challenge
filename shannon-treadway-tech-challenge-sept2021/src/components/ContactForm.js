import React from "react";
import PropTypes from "prop-types";
import { BASE_URL } from "./FetchData";
import { validate as validateEmail } from "email-validator";
import "./ContactForm.css";

class ContactForm extends React.Component {
    static propTypes = {
        history: PropTypes.object,
    };

    state = {
        hasSubmitted: false,
        inputs: {
            firstName: {
                value: "",
                isValid: false,
            },
            lastName: {
                value: "",
                isValid: false,
            },
            title: {
                value: "",
                isValid: false,
            },
            email: {
                value: "",
                isValid: false,
            },
            message: {
                value: "",
                isValid: false,
            },
        },
    };

    required = (value) => value !== "";

    validators = {
        firstName: this.required,
        lastName: this.required,
        title: this.required,
        email: validateEmail,
        message: this.required,
    };

    formContainsErrors = () => {
        for (const key of Object.keys(this.state.inputs)) {
            const hasError = !this.state.inputs[key].isValid;
            if (hasError) {
                return true;
            }
        }
        return false;
    };

    handleChange = (event) => {
        const inputs = this.state.inputs;
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;
        inputs[name].value = value;
        inputs[name].isValid = this.validators[name](value);
        this.setState({ inputs });
    };

    showErrors = (name) =>
        this.state.hasSubmitted && !this.state.inputs[name].isValid;

    resetState = () => {
        const hasSubmitted = false;
        const inputs = this.state.inputs;

        for (const key of Object.keys(this.state.inputs)) {
            inputs[key] = { value: "", isValid: false };
        }

        this.setState({ hasSubmitted, inputs });
        console.log(this.state);
    };

    submitContact = (event) => {
        event.preventDefault();
        if (this.formContainsErrors()) {
            this.setState({ hasSubmitted: true });
            return;
        }
        const contactSubmission = {
            first_name: this.state.inputs.firstName,
            last_name: this.state.inputs.lastName,
            title: this.state.inputs.title,
            email: this.state.inputs.email,
            message: this.state.inputs.message,
        };

        this.resetState();
        this.props.history.push("/success");

        fetch(`${BASE_URL}/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contactSubmission),
        }).then(() => {
            console.log("Form submitted.");
        });
        return contactSubmission;
    };

    render() {
        return (
            <div className="contact-form-container">
                <div className="contact-form">
                    <h2>Heading Two</h2>
                    <form onSubmit={this.submitContact} noValidate>
                        <div className="input-form">
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={this.handleChange}
                                    className={
                                        this.showErrors("firstName")
                                            ? "error"
                                            : ""
                                    }
                                />
                                <span
                                    className={
                                        this.showErrors("firstName")
                                            ? "show"
                                            : "hide"
                                    }
                                >
                                    Required
                                </span>
                            </div>

                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    onChange={this.handleChange}
                                    className={
                                        this.showErrors("lastName")
                                            ? "error"
                                            : ""
                                    }
                                />
                                <span
                                    className={
                                        this.showErrors("lastName")
                                            ? "show"
                                            : "hide"
                                    }
                                >
                                    Required
                                </span>
                            </div>

                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    onChange={this.handleChange}
                                    className={
                                        this.showErrors("title") ? "error" : ""
                                    }
                                />
                                <span
                                    className={
                                        this.showErrors("title")
                                            ? "show"
                                            : "hide"
                                    }
                                >
                                    Required
                                </span>
                            </div>

                            <div className="input-wrapper">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={this.handleChange}
                                    className={
                                        this.showErrors("email") ? "error" : ""
                                    }
                                />
                                <span
                                    className={
                                        this.showErrors("email")
                                            ? "show"
                                            : "hide"
                                    }
                                >
                                    Required
                                </span>
                            </div>

                            <div className="textarea-wrapper">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    onChange={this.handleChange}
                                    rows="7"
                                    className={
                                        this.showErrors("message")
                                            ? "error"
                                            : ""
                                    }
                                />
                                <span
                                    className={
                                        this.showErrors("message")
                                            ? "show"
                                            : "hide"
                                    }
                                >
                                    Required
                                </span>
                            </div>
                        </div>
                        <div className="submit-btn-container">
                            <button type="submit" className="submit-btn">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactForm;
