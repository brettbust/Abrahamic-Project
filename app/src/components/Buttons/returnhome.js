import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";


  

const ReturnHome= () => {


const scrollToTopRef = useRef(null);
    return (    
            <Link to="/" onClick={() => scrollToTopRef.scrollIntoView({ behavior: 'smooth', block: 'start'})}  style={styles.button}>Return Home</Link>

    );
};

const styles = {
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

export default ReturnHome;