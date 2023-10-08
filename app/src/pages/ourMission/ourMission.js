import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReturnHome from "../../components/Buttons/returnhome";

const OurMission = () => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Our Mission</h1>
            <div onClick={() => setShowOptions(!showOptions)}>
                <ul>
                    <li>To create a more secure and transparent financial system by providing a cryptocurrency platform backed by tangible assets.</li>
                    <li>To empower individuals and businesses with the ability to invest in and utilize cryptocurrency as a stable and consistent form of payment.</li>
                    <li>To revolutionize the way the world views and utilizes digital currency.</li>
                    <li>To create a more stable and reliable system that benefits both investors and the environment.</li>
                    <li>To recognize the negative impact that the infrastructure supporting fiat money has on our planet and the collateral damage that it brings.</li>
                    <li>To utilize and create environmentally friendly and socially responsible practices and a valuable and sustainable system set as an example for the industry.</li>
                    <li>To build a brighter and more equitable future for all by using cutting-edge technology.</li>
                </ul>
            </div>
            {showOptions && (
                <ul>
                    <li>
                        <Link className="link" to="/ourmission">Our Mission/Social Impact</Link>
                    </li>
                </ul>
            )}

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
    button: {
        backgroundColor: "white",
        color: "#282c34",
        padding: "10px 20px",
        borderRadius: "5px",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "16px",
        marginTop: "20px",
        boxShadow: "0px 0px 5px white",
        transition: "all 0.2s ease-in-out",
        cursor: "pointer",
        border: "none"
    },
    buttonHover: {
        backgroundColor: "#282c34",
        color: "white",
        boxShadow: "0px 0px 5px white",
    }
}

export default OurMission;
