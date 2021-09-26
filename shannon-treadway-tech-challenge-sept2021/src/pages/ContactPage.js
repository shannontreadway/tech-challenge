import React from "react";
import ContactPageText from "../components/ContactPageText";
import ContactForm from "../components/ContactForm";
import Navigation from "../components/Navigation";
import { fetchData } from "../components/FetchData";
import "./ContactPage.css";

class ContactPage extends React.Component {
    state = {
        apiData: [],
        isLoaded: false,
    };

    componentDidMount() {
        fetchData("/content/contact").then((data) => {
            this.setState({
                apiData: data.data,
                isLoaded: true,
            });
        });
    }

    render() {
        if (!this.state.isLoaded) {
            return <div>Loading</div>;
        }

        return (
            <div className="contact-page-container">
                <div className="contact-navigation">
                    <Navigation linkText="Home" linkPath="/"></Navigation>
                </div>
                <div className="contact-page-content">
                    <ContactPageText
                        title={this.state.apiData[0].title}
                        paragraph={this.state.apiData[0].content}
                    />
                    <ContactForm history={this.props.history} />
                </div>
            </div>
        );
    }
}

export default ContactPage;
