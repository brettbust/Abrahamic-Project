import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";

const NFTS = () => {


    const [showOptions, setShowOptions] = useState(false);

    const scrollToTopRef = useRef(null);
      

    return (


        <div style={styles.container}>
            <h1 style={styles.title}>NFT'S</h1>
            <div ref={scrollToTopRef} onClick={() => setShowOptions(!showOptions)}>
                
        
  <p>Abrahamic with NFT's, we take it a step further. We understand the potential of NFT's in a market that is yet to reach its full potential. We aim to create non-repeatable design structures, ensuring that each NFT holds a unique quality that competes directly with the best artistic performances out there.</p>
  
  <p>By carefully curating our NFT offerings, we bring exclusivity to the forefront. We believe in nurturing a non-saturated market where each NFT holds immense value and stands out from the crowd. Our focus is on quality over quantity, allowing collectors and enthusiasts to engage with truly exceptional pieces of digital art.</p>
  
  <p>With an unwavering commitment to artistic excellence, we monitor every aspect of our NFT ecosystem. We will collaborate efficiently with renowned artists, designers, and creators who push the boundaries of creativity. Our stringent standards ensure that only the highest caliber of artwork finds its way into our curated collections.</p>
  
  <p>Through our platform, artists could showcase their talents on a global stage. We empower them to reach a broader audience, establish their reputation, and elevate their careers in the digital art realm. At the same time, collectors and investors have the privilege of owning one-of-a-kind digital assets that appreciate in value over time.</p>
  
  <p>Abrahamic stands at the forefront of the NFT revolution, harnessing its power to redefine the art world and revolutionize the way we appreciate, collect, and trade art. We invite you to join us on this extraordinary journey, where innovation and creativity merge to create a new paradigm in the art market.</p>
  
  <p>Join us on a journey to unleash the boundless possibilities of NFTs, where scarcity, uniqueness, and extraordinary artistic expressions take center stage. Abrahamic is at the forefront of revolutionizing the digital art landscape, propelling it into a realm of unparalleled innovation. Our relentless commitment to research and development drives us to address challenges and refine the NFT market.</p>
  
  <p>We have already made significant strides in our quest, conducting thorough investigations and studies to better understand and harness the true potential of NFTs. Our team is tirelessly working towards implementing groundbreaking improvements that will reshape the NFT landscape as we know it.</p>
  
  <p>While we are still a work in progress, we are eager to share our remarkable advancements with the world. Stay tuned as we unveil our final innovations, set to propel NFTs to new heights and empower artists and collectors worldwide.</p>
  
  <p>Together, let us embark on this transformative passage, where the fusion of technology and art ushers in a new era of creative expression and limitless possibilities. With Abrahamic, the future of NFTs is ready to transcend boundaries and captivate imaginations. We will shape the future of digital art and redefine its value in the global creative landscape.</p>
            
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

export default NFTS;