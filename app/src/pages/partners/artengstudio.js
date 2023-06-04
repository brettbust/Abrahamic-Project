import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import audiomp3_1 from "./audios/arteng_audio_1.mp3";
import audiomp3_2 from "./audios/arteng_audio_2.mp3";
import ai_audio from "../../images/ai_audio.png";


const ArtengStudio = () => {


    const [showOptions, setShowOptions] = useState(false);

    const scrollToTopRef = useRef(null);

    const [showAudio, setShowAudio] = useState(false);

    const mostrarAudioHandler = () => {
        setShowAudio(true);
      }
    
      const cerrarVideoHandler = () => {
        setShowAudio(false);
      }
    
    
      const handleImageClick = () => {
        setShowAudio(false);
    };

    //audio 2

    const [showAudio2, setShowAudio2] = useState(false);

    const handlePlay = (index) => {
        if (index === 1) {
          setShowAudio(true);
        } else if (index === 2) {
          setShowAudio2(true);
        }
    };
    
    const handlePause = (index) => {
        if (index === 1) {
          setShowAudio(false);
        } else if (index === 2) {
          setShowAudio2(false);
        }
    };
    
    const [activeAudio, setActiveAudio] = useState(null);

     const handlePlay2 = (audio) => {
    setActiveAudio(audio);
  };

  const handlePause2 = (audio) => {
    setActiveAudio(null);
    };
    
    //no se puede reproducir un audio si el otro esta sonando

   /*  const [isPlaying, setIsPlaying] = useState(false); */

    

    return (


        <div style={styles.container}>
            <h1 style={styles.title}>ARTENG</h1>
            <div>
  <div style={{ position: 'relative', left: '696px', bottom: '10px'}}>
    <img 
      src={ai_audio} 
      style={{ width: '128px', height: '350px'}} 
      onClick={() => {
        setShowAudio(!showAudio);
        setShowAudio2(!showAudio2);
      }}
                
    />
    {showAudio && (
      <div style={{ position: 'absolute', top: '270px', right: '80px'}}>
        <div style={{ width: '220px', height: '25px', background: '#f1f1f1', borderRadius: '0px', overflow: 'hidden' }}>
  <audio
    id="audio"
    src={audiomp3_1}
    style={{ width: '100%', height: '100%', outline: 'none' }}
    controls
    controlsList="nodownload noplaybackrate"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.currentTarget.paused) {
        e.currentTarget.play();
      } else {
        e.currentTarget.pause();
      }
    }}
  />
</div>

      </div>
    )}
  </div>
  
  <div style={{ position: 'relative', left: '616px', bottom: '45px'}}>
    {showAudio2 && (
              <div style={{ position: 'absolute', top: '0', right: '0' }}>
        <div style={{ width: '220px', height: '25px', background: '#f1f1f1', borderRadius: '0px', overflow: 'hidden' }}>
  <audio
    id="audio2"
    src={audiomp3_2}
    style={{ width: '100%', height: '100%', outline: 'none' }}
    controls
    controlsList="nodownload noplaybackrate"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.currentTarget.paused) {
        e.currentTarget.play();
      } else {
        e.currentTarget.pause();
      }
    }}
  />
</div>

      </div>
    )}
  </div>
</div>


            <div ref={scrollToTopRef} onClick={() => setShowOptions(!showOptions)}>          
            <p>Welcome to ARTENG, the international certificate of authenticity provider.</p>
<p>An International Certificate of Authenticity, (ICOA) by ARTENG is a formal document that serves as a proof of the genuineness and origin of a piece of artwork. It will be a globally recognized and standardized certificate that provides essential information about the artwork, such as title, artist's name, medium, materials used, dimensions, and creation date. It’ll also include additional details such as care instructions, exhibition history, and any relevant publications.</p>
<p>One of the unique features of an ARTENG (ICOA) will be the inclusion of a unique code or numbering system that uniquely identifies the artwork, adding an extra layer of security, authenticity and more. An internal code and a track can be used to verify the artwork's authenticity on the issuer's website (currently being built on a trusted platform). ARTENG (ICOA) will be used by artists around the world, art and private collectors, galleries, art venture, museums, auction houses and others to establish the provenance and value of artwork pieces, and to protect the artist's rights and interests.</p>
<p>ARTENG (ICOA) will be a particularly important in the art market, where the issue of forgery and fake artworks can be prevalent. By having a standardized and internationally recognized certificate of authenticity, artists can provide assurance to buyers and collectors that their artwork is genuine and original. ARTENG (ICOA) will also help maintain a transparent and trustworthy art market, as they will be providing a verifiable record of an artwork's authenticity and origin.</p>
<p>In addition to establishing the authenticity of an artwork, ARTENG (ICOA) can also be used as a marketing tool for artists. By providing a formal certificate of authenticity with their artworks, artists will be able to add perceived value to their creations, enhance their professional image, and make their artworks more attractive to potential buyers. ARTENG (ICOA) can also facilitate the resale of artworks in the secondary market, as they will provide a documented history of the artwork's authenticity, including key details to reinforce credibility and trustworthiness for potential art buyers. Art collectors can rely on the (ICOA) by ARTENG as proof of the artwork's authenticity and value.</p>
<p>To create a comprehensive (ICOA) by ARTENG, artists should consider including additional information such as the exact materials used, where the artwork was created, whether it is an original or reproduction (lithography each signed by the artist), and any unique features for limited editions.</p>
<p>In addition to factual information, the (ICOA) by ARTENG should also include the artist's full name and date of certification, along with contact information such as address, email, and a link to the artist's website. This allows collectors to verify the artist's identity and contact them if needed.</p>
<p>To protect the artist's rights, the (ICOA) by ARTENG will declare that all copyrights are retained by the artist and that reproduction of the artwork without consent is prohibited. The (ICOA) by ARTENG will include a waterproof ink signature on high-quality, durable paper to further add to its authenticity as well as instructions on how to take care of it (e.g., keeping it in a dry area). It's also important to include care instructions for the artwork, such as avoiding fluorescent lighting, direct sunlight, and high humidity, and maintaining normal room temperature (18-23C or 64-73F) for optimal preservation.</p>
          <p>By following these guidelines, artists can create a unique and comprehensive (ICOA) by ARTENG that enhances the value and trustworthiness of their artwork, making it more attractive to potential buyers.</p>
          <p>ARTENG will act on your behalf to track any illegal copies of your work and take appropriate actions to protect your interests.</p>
<p>For a future sign up for ARTENG (ICOA), you’ll have to send your portfolio via email or fill out our contact form when it becomes available, as our website is currently under development and is a work in progress. ARTENG will provide a valuable service for artists establishing the authenticity of their artwork and protection of their interests in the art market.</p>
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
    fontFamily: "Yu Gothic",
        fontSize: "22px",
    },
    title: {
        textAlign: "center",
        fontSize: "80px",
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
  },
    


    
        
    
}

export default ArtengStudio;
