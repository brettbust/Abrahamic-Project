import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import ReturnHome from "../../components/Buttons/returnhome";

const AuctionHouse = () => {


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
                
                <p>It's important to emphasize that AI (FOAT) will not seek to imitate, control, mimic,
possess, dominate, measure, rule, or manipulate human artistry. AI (FOAT) lacks the
human touch and other essential elements, which sets it apart. In artwork it refers to the
unique qualities and characteristics that are infused by the artist's personal involvement,
skill, creativity, and expression. It encompasses the artist's individuality, emotions, and
subjective interpretation that are conveyed through their artistic process and techniques.
The human touch is often associated with the physical presence and direct influence of
the artist's hand, brushstrokes, gestures, or craftsmanship in traditional mediums such
as painting, sculpture, or printmaking. It represents the human element, intuition, and the
artist's ability to create something original and imbued with their personal vision,
perspective, and artistic sensibility. The human touch adds depth, authenticity, and a
distinct sense of connection between the artist and the artwork, capturing the essence of
their artistic voice.</p>
<p>However, this does not rule out the possibility of a separate category in the future. Artists
utilizing AI (FOAT) may require a different form of exhibition that allows them to
showcase their work effectively. Artists under Abrahamic umbrella will be excluded from
participation in auction houses and will be subjected to fines and penalties, leading up to
a lawsuit if we discover the use of AI (FOAT). The artist needs to provide substantial
evidence that they are the original creator of the artwork including tangible fine art.</p>
<p>To prove that an artwork is original, an artist can provide several types of evidence,
which may vary depending on the context and medium of the artwork. Here are some
common forms of evidence that can help establish the originality of an artwork:</p>
<p>Certificate of Authenticity (COA): This is a document issued by the artist or a reputable
authority that verifies the authenticity of the artwork. It typically includes details such as
the artist's name, the artwork's title, medium, dimensions, date of creation, and a
                    statement declaring its authenticity.</p>
                
<p>Provenance: Provenance refers to the documented history of ownership and custody of the artwork, tracing its lineage back to the artist. It can include records of previous sales, exhibitions, or ownership by reputable collectors, galleries, or institutions. A comprehensive provenance can strengthen the claim of an artwork's originality.</p>
<p>Documentation of the Creation Process: Artists can provide evidence of their creative process, such as sketches, studies, progress photos, or videos, demonstrating the development and evolution of the artwork. These documents can showcase the artist's unique approach and contribute to establishing the authenticity of the final piece.</p>
<p>Artist's Signature: The presence of the artist's signature on the artwork, preferably in a consistent and recognizable manner, is a traditional way to authenticate the piece. The signature should be compared to known examples of the artist's signature to ensure its validity.</p>
<p>Expert Opinions: In some cases, artists may seek the opinion of art experts, appraisers, or authenticators specializing in the particular style, period, or artist's work. These experts can assess the artwork based on their knowledge and expertise and provide a professional opinion on its originality.</p>
<p>Copyright Registration: Artists can register their artwork with relevant copyright authorities, which can serve as additional evidence of original authorship. Copyright registration provides legal protection and establishes the artist as the rightful creator of the work.</p>
<p>It's crucial to acknowledge that AI (FOAT) owes its existence to human creativity. This separation highlights the distinction and reverence for human artists. AI (FOAT) may participate in alternative exhibition categories, but it will be separate from digital art. The value of an artist's signature remains a significant aspect, and as AI (FOAT) progresses, it enhances the value of both digital and tangible art bearing the artist's signature.</p>
<p>By recognizing the individual growth and value of AI (FOAT) while preserving the essence of human artistry, we create a framework that respects and supports artistic innovation in the digital realm.</p>
<p>By establishing our own auction houses, Abrahamic reaffirms its commitment to supporting artists, promoting the appreciation of tangible art, and shaping a dynamic and inclusive art market. We believe that every artist deserves the opportunity to showcase their talent, gain recognition, and thrive financially. Through our auction houses, we provide the platform for artists to achieve these goals and contribute to the rich tapestry of the art world.</p>
<p>Join us on this exciting venture as we redefine the landscape of art auctions, empower artists, and celebrate the beauty and significance of tangible art.</p>
<p>Thank you for being a part of our vision for the future of art auctions.</p>
                

            
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

export default AuctionHouse;