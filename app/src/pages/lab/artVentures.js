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
            <h1 style={styles.title}>Art Ventures</h1>
            <div ref={scrollToTopRef} onClick={() => setShowOptions(!showOptions)}>
                
            <p>Continuing the path of artistic innovation, Abrahamic will go beyond art to introduce the new concept of Art Ventures. We believe that art should not only be admired but also fostered and nurtured for the benefit of artists and art enthusiasts alike.</p>
  
            <p>Through our Art Ventures, we establish collaborative partnerships with emerging and established artists, providing them with the resources, support, and exposure they need to thrive in the ever-evolving art world. We will act as a bridge between artists and investors, creating a symbiotic relationship that fuels artistic expression and financial growth.</p>
  
            <p>Our vision is to curate a diverse portfolio of art ventures that span various mediums, styles, and cultures. From traditional paintings and sculptures to digital installations and multimedia experiences, we seek to capture the essence of artistic exploration in all its forms. Each art venture represents a unique opportunity for investors to participate in the growth and success of exceptional artists.</p>
  
            <p>We carefully select artists based on their talent, vision, and potential for long-term artistic development. By providing them with financial support, mentorship, and exhibition opportunities, we empower them to take their creativity to new heights. Through these collaborations, we foster an environment where artists can freely express their ideas, experiment with new techniques, and push the boundaries of their craft.</p>
  
            <p>For investors, our Art Ventures present a compelling opportunity to not only acquire valuable artworks but also support the artistic community. We will offer exclusive access to limited editions, special releases, and behind-the-scenes experiences, allowing investors to engage with the art world in a meaningful way. As the art ventures flourish, the value of these investments appreciates, providing both financial returns and the satisfaction of supporting artistic endeavors.</p>
  
            <p>Abrahamic is committed to transparency, fairness, and the ethical treatment of artists. We ensure that artists receive their deserved recognition and compensation for their creations, fostering an ecosystem that values and preserves artistic integrity. Our platform will serve as a marketplace where artists can connect with a global audience, and art enthusiasts can discover unique and meaningful works that resonate with them.</p>
  
            <p>Together, let us embark on a journey that transcends traditional notions of art and investment. With Abrahamic Art Ventures, we redefine the relationship between artists and investors, shaping a future where artistic expression flourishes, and the art market thrives.</p>
  
            <p>Thank you for joining us on this transformative artistic adventure.</p>
            
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