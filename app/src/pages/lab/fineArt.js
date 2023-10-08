import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import ReturnHome from "../../components/Buttons/returnhome";

const FineArt = () => {


    const [showOptions, setShowOptions] = useState(false);

    const scrollToTopRef = useRef(null);
      

    return (


        <div style={styles.container}>
            <h1 style={styles.title}>Fine Art</h1>
            <div ref={scrollToTopRef} onClick={() => setShowOptions(!showOptions)}>
            
            <h1>Fine Art</h1>
                
            <p>Continuing our commitment to artistic innovation, Abrahamic will expand its horizons to include the realm of fine art. We recognize the immense cultural and historical significance of fine art and aim to preserve and promote this timeless form of artistic expression.</p>
  
            <p>Through our platform, we will introduce a curation process in the future, carefully selecting sophisticated works of art. We will also launch a certificate of authenticity exclusively for live artists, aiming to eliminate and replace the fraudulent practices that plague the tangible art industry in our program. Our goal is to cultivate a collection of exceptional fine art pieces, representing a diverse range of genres, styles, and periods.</p>
  
            <p>From classical masterpieces to contemporary creations, we celebrate the vibrant tapestry of artistic expression that has influenced and enriched our world. Every artwork is meticulously chosen, taking into account its artistic merit, craftsmanship, and cultural significance.</p>
  
            <p>By collaborating with renowned galleries, collectors, and artists, we will bring together a diverse range of fine art offerings. Our goal is to create a platform that showcases the very best of the art world, allowing collectors and enthusiasts to explore and acquire exquisite pieces that resonate with their passion and taste.</p>
  
            <p>We understand that investing in fine art is not only a financial endeavor but also a deeply personal and enriching experience. As such, we provide comprehensive information and expert guidance to assist collectors in making informed decisions. We strive to foster a transparent and trustworthy environment where collectors can engage with the art market confidently.</p>
  
            <p>Abrahamic commitment to supporting artists extends to the realm of fine art as well. We work closely with emerging and established artists, providing them with the necessary resources, exposure, and opportunities to showcase their talent and connect with a global audience. Through exhibitions, residencies, and collaborations, we nurture artistic growth and contribute to the legacy of fine art.</p>
  
            <p>For collectors, our platform offers an unparalleled opportunity to acquire museum-quality artworks that appreciate in value over time. We facilitate the acquisition process, ensuring seamless transactions and secure ownership records. Additionally, our platform serves as a digital gallery, allowing collectors to explore and admire an extensive range of fine art from the comfort of their homes.</p>
  
            <p>By integrating cutting-edge technologies, such as virtual reality and augmented reality, we will enhance the tangible fine art experience, allowing collectors to immerse themselves in the beauty and intricacies of each artwork. Through these innovative tools, we bridge the gap between the physical and digital worlds, making fine art accessible to a broader audience.</p>
  
            <p>Abrahamic is dedicated to the preservation and promotion of fine art, recognizing its power to inspire, provoke thought, and evoke emotions. Join us on this artistic journey as we continue to elevate the world of fine art, connecting artists, collectors, and enthusiasts in a vibrant and dynamic ecosystem.</p>
  
            <p>Thank you for being a part of our vision for the future of fine art.</p>
            
            </div>

            <ReturnHome/>
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

    p: {
        textAlign: "justify",
    }
        
    
}

export default FineArt;
