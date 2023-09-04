import React from "react";
import { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import classes from "./spinner.module.css";
const Spinner = () => {
    let [color] = useState("#ed4c4e");

    return (
        <div className={classes.spinner_container}>
            <FadeLoader
                color={color}
                size={25}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Spinner;