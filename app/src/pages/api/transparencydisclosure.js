import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import ReturnHome from "../../components/Buttons/returnhome";

const TransparencyDisclosure = () => {
    const [showOptions, setShowOptions] = useState(false);

    const scrollToTopRef = useRef(null);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Transparency Disclosuree</h1>
            <div onClick={() => setShowOptions(!showOptions)}>
 
            </div>
            <ReturnHome />
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: "#041f26",
        color: "white",
        padding: "20px",
        boxShadow: "0px 0px 10px #282c34",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh"
    },
    title: {
        textAlign: "center",
        fontSize: "36px",
        margin: "0 0 20px 0"
    },
}

export default TransparencyDisclosure;
