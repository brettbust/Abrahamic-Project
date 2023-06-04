import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";

const Welcome = () => {


    const [showOptions, setShowOptions] = useState(false);

    const scrollToTopRef = useRef(null);
      

    return (


        <div style={styles.container}>
            <div ref={scrollToTopRef} onClick={() => setShowOptions(!showOptions)}>
            <h1 style={styles.title}>Welcome to Abrahamic Cryptocurrency</h1><br /><br />
  <p>Today, we are excited to introduce you to Abrahamic, a revolutionary new decentralized cryptocurrency.</p>
  <p>With Abrahamic, investors can maximize their portfolio with socially accountable companies while benefiting from the financial returns offered by tangible assets. This is a valuable promising investment opportunity that the world has been waiting for in the crypto market. And the best part is that the Abrahamic ecosystem is based on blockchain, making it more valuable and secure than traditional investment options.</p>
  <p>Abrahamic is managed by a team of experts in venture capital, private equity, digital payments, direct private funds, asset management, and other fields, all working together to provide investors with the best possible experience. And with its focus on digital as well as tangible assets, Abrahamic is not only a smart asset but also a liable one.</p>
  <p>So, what is it that sets Abrahamic apart from other cryptocurrencies?</p>
  <p>The unique approach of Abrahamic is a statement of its superiority. Abrahamic is a decentralized cryptocurrency centered around enhancing security and transparency for investors, providing greater confidence in the value and stability of their financing. We are focusing on responsible companies and organizations, based on utilities inside a robust ecosystem platform.</p>
  <p>So, if you're looking for a cryptocurrency that can help you grow your portfolio while making a positive impact on the world, look no further than Abrahamic. Let us embrace this opportunity and support the innovative vision of Abrahamic to revolutionize the world of finance as we know it.</p>
  <p>Thank you.</p>


            </div>
            <Link to="/" onClick={() => scrollToTopRef.scrollIntoView({ behavior: 'smooth', block: 'start'})}  style={styles.button}>Return to Home</Link>
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
        alignItems: "justify",
        justifyContent: "justify",
        minHeight: "100vh",
        textAlign: "justify",
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
        boxShadow: "0px 0px 5px white",
        transition: "all 0.2s ease-in-out",
        cursor: "pointer",
        border: "none",
        width: "12%",
        position: "relative",
        left: "44%",
        top: "30px",
        textAlign: "center",
    },
    buttonHover: {
        backgroundColor: "#282c34",
        color: "white",
        boxShadow: "0px 0px 5px white",
    },

    p: {
        textAlign: "justify",
    }
        
    
}

export default Welcome;
