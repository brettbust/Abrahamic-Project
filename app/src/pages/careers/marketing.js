import React from 'react';
import ReturnHome from "../../components/Buttons/returnhome.js";

const Marketing = () => {
    return (
        <div style={styles.container}>
            <h1 style={{ textAlign: 'center' }}>Marketing</h1>
            <p>(We do not have openings right at this moment, but soon we will be adding jobs and projects. Keep an eye out for upcoming job openings and career opportunities.)</p>
            <br/><br/><br/><div><ReturnHome/></div>
        </div>
    )
}


export default Marketing;

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
        minHeight: "100vh",
        textAlign: "justify",
    },
    title: {
        textAlign: "center",
        fontSize: "36px",
        margin: "0 0 20px 0"
    },
    p: {
        textAlign: "justify",
    }
        
    
}