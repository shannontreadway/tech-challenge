import React from "react";
import Swal from "sweetalert2";
import "./JavaScriptPuzzle.css";

class JavaScriptPuzzle extends React.Component {
    arrA = ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"];
    arrB = ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"];
    outputListCached = false;

    state = {
        jointArray: [],
    };

    mergeArrays = (...arrays) => {
        let jointArray = [];
        arrays.forEach((array) => {
            jointArray = [...jointArray, ...array];
        });
        return jointArray;
    };

    removeDuplicates = (array) => {
        const uniqueArray = array.filter(
            (item, index) => array.indexOf(item) === index
        );
        return uniqueArray;
    };

    linkClicked = (event) => {
        event.preventDefault()
        if (this.outputListCached) {
            Swal.fire("This action has already been performed.");
            return;
        }
        const jointArray = this.mergeArrays(this.arrA, this.arrB);
        const uniqueArray = this.removeDuplicates(jointArray);
        this.setState({ jointArray: uniqueArray });
        this.outputListCached = true;
    };

    render() {
        return (
            <div className="javascript-puzzle-container">
                <h1>
                    <span className="underline">Heading</span> One
                </h1>
                <p className="instructions">
                    Remove the duplicates in 2 Javascript objects and output the
                    list of distinct names in an unordered list when{" "}
                    <a href="/#" onClick={this.linkClicked}>
                        this link
                    </a>{" "}
                    is clicked. If the operation has been completed already
                    notify the user that this has already been done.
                </p>
                <ul className="list">
                    {this.state.jointArray.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default JavaScriptPuzzle;
