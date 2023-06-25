import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";

const FineArt = () => {


    const [showOptions, setShowOptions] = useState(false);

    const scrollToTopRef = useRef(null);
      

    return (


        <div style={styles.container}>
            <h1 style={styles.title}>Auction House</h1>
            <div ref={scrollToTopRef} onClick={() => setShowOptions(!showOptions)}>
            
            <p>In our dedication to supporting artists and the appreciation of tangible art, Abrahamic is thrilled to introduce a groundbreaking initiative and new ideas: Our and other auction houses exclusively tailored for artists creating tangible artworks in another level. These auction houses will revolutionize the way artists engage with the art market and provide them with unparalleled opportunities for recognition, exposure, and financial success.</p>
            <p>By establishing a dedicated auction house and working with other auction houses, we aim to empower artists, ensuring that their works receive the attention and value they deserve. These auction houses will serve as platforms where artists can showcase their tangible creations to a global audience of collectors, art enthusiasts, and industry professionals.</p>
            <p>We recognize the unique challenges faced by artists working in traditional mediums, such as painting, sculpture, and others forms of art. Our auction houses will cater specifically to their needs, offering comprehensive support throughout the entire auction process. From the initial evaluation of artworks to the promotion of the auction and the final sale, we will provide artists with the guidance and expertise necessary to maximize their success.</p>
            <p>Through the auction houses, artists will have the opportunity to exhibit their works alongside esteemed and established artists, fostering a sense of community and camaraderie within the art world. This integration of emerging and established artists ensures a vibrant and diverse auction environment that appeals to a wide range of collectors and buyers.</p>
            <p>Our auction houses will leverage advanced technologies to enhance the auction experience for both artists and collectors. Through virtual exhibitions, online bidding platforms, and immersive digital experiences, we will break down geographical barriers and connect artists with a global network of art enthusiasts. This innovative approach will enable artists to expand their reach and attract a broader audience, ultimately increasing the visibility and value of their tangible artworks.</p>
            <p>Transparency, fairness, and ethical practices are at the core of our auction houses. We will prioritize the interests of both artists and collectors, ensuring that the auction process is conducted with utmost integrity. Our team of experts will provide accurate valuations, facilitate secure transactions, and maintain a high standard of professionalism throughout the entire auction journey.</p>
            <p>Abrahamic will establish norms to define and reference digital art and AI (FOAT) - Form of Art Tool. Our goal is to set clear boundaries for digital art and protect its artistic integrity. We acknowledge that digital art and AI (FOAT) are distinct from one another, and AI (FOAT) cannot be classified as traditional art within an auction house setting. Instead, we will explore another avenue, such as MTF (Medium Tool Form), which will not compete directly with digital art but will offer its unique qualities. This separation ensures that AI (FOAT) can flourish and grow while respecting the deserving recognition of human artists.</p>
                

            
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
    },

    p: {
        textAlign: "justify",
    }
        
    
}

export default FineArt;