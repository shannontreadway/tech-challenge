import React from "react";
import PropTypes from "prop-types";
import "./TileContents.css";

class TileContents extends React.Component {
    static propTypes = {
        image: PropTypes.string,
        title: PropTypes.string,
        paragraph: PropTypes.string,
    };

    render() {
        return (
            <div className="heading-two-tile">
                <div className="tile-text">
                    <div className="tile-image-container">
                        <img
                            className="img"
                            src={this.props.image}
                            alt=""
                        ></img>
                    </div>
                    <h2>{this.props.title}</h2>
                    <p className="justified-text">{this.props.paragraph}</p>
                </div>
                <div className="tile-button">
                    <button className="btn">Learn More</button>
                </div>
            </div>
        );
    }
}

export default TileContents;
