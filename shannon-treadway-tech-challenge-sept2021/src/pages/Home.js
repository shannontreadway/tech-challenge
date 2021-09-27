import React from "react";
import Navigation from "../components/Navigation";
import TileContents from "../components/TileContents";
import JavaScriptPuzzle from "../components/JavaScriptPuzzle";
import "./Home.css";
import { fetchData } from "../components/FetchData";

class Home extends React.Component {
    images = ["/assets/Talkie.png", "/assets/Rabbit.png", "/assets/Shield.png"];
    state = {
        apiData: [],
        isLoaded: false,
    };

    componentDidMount() {
        fetchData("/content/home").then((data) => {
            this.setState({
                apiData: data.data,
                isLoaded: true,
            });
        });
    }

    render() {
        const { isLoaded, apiData } = this.state;

        if (!isLoaded) {
            return <div>Loading</div>;
        }
        if (isLoaded) {
            return (
                <div className="home-page-container">
                    <Navigation
                        linkText="Contact"
                        linkPath="/contact"
                    ></Navigation>
                    <div className="tile-set">
                        {apiData.map((data, index) => (
                            <TileContents
                                key={index}
                                title={data.title}
                                paragraph={data.content}
                                image={this.images[index]}
                            />
                        ))}
                    </div>

                    <JavaScriptPuzzle />
                </div>
            );
        }
    }
}

export default Home;
