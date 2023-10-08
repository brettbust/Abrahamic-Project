import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import ReturnHome from "../../components/Buttons/returnhome";

const AbrahamicFoundation = () => {


    const [showOptions, setShowOptions] = useState(false);

    const scrollToTopRef = useRef(null);
      

    return (


        <div style={styles.container}>
            <h1 style={styles.title}>Abrahamic Foundation</h1>
            <div ref={scrollToTopRef} onClick={() => setShowOptions(!showOptions)}>
                <ul> 
            <p style={styles.p}>The Abrahamic Foundation will be a non-profit organization that aims to create a positive social and environmental impact. Through this foundation, individuals and organizations can donate to various causes and initiatives without concerns of their investments being misused or mismanaged. The foundation provides a platform for transparent and organized execution of donations, ensuring that they go towards the intended purpose. The team behind Abrahamic is working tirelessly to make this a reality and will be open to the public soon. The foundation represents Abrahamic's commitment to helping the community and creating a better world for all.</p>
            <p style={styles.p}>The Abrahamic Foundation has a strong focus on helping widows and orphans. We plan to provide assistance by opening bank accounts for the college education of orphans, ensuring that they receive the necessary financial support to pursue their dreams. Additionally, we will be opening bank accounts with benefits for widows and their children, helping to alleviate financial burdens and improve their quality of life. We believe that these initiatives will have a meaningful and long-lasting impact on the lives of those in need.</p>
            <p style={styles.p}>Additionally, the Abrahamic Foundation will provide access to special programs to improve the quality of education for widows and orphans. As they may have lacked a male role model to guide them or have experienced the loss of the person who was teaching them, it's essential to provide additional support to ensure their academic success. Through the Foundation, we aim to create a positive impact on their lives and empower them to reach their full potential.</p>
            <p style={styles.p}>At the Abrahamic Foundation, we believe that our responsibility extends beyond just helping those in need. We also recognize the importance of protecting our environment for future generations. The Abrahamic Foundation is dedicated to creating a positive impact on both widows and orphans as well as the planet. With your support, we can make a lasting difference. Our goal is to promote biodiversity for the environment and protect our planet's natural resources, including oceans, rivers, lakes, air, soil, and more. Through the foundation, we plan to launch initiatives that will help to preserve and sustain these resources for the future. We understand the urgent need to act now to secure a better world for generations to come.</p>
            <p style={styles.p}>Together, we can create a healthier and cleaner planet for our children and grandchildren. We understand that promoting the well-being of widows and orphans is not just about providing financial assistance or access to education. We must also ensure that they have access to clean resources like water and air, as well as safe and healthy environments in which to live and thrive. By focusing on environmental initiatives, we are not only protecting the planet but also directly benefiting the widows and orphans we seek to support. By promoting sustainability and protecting natural resources, we can help create a world where everyone has access to the basic necessities for a healthy and fulfilling life. Together, we can make a positive impact on both the lives of widows and orphans and the health of our planet, creating a better future for generations to come.</p>
            <p style={styles.p}>In addition to financial contributions, we are also seeking volunteers who share our vision and passion for making a positive impact on both the lives of widows and orphans and the health of our planet. Whether you have expertise in environmental conservation, education, or simply a desire to help others, we welcome your support. Together, we can create a better future for all.</p>
            <p style={styles.p}>If you are passionate about making a positive impact on the lives of widows, orphans, and the environment, we would love to have your support. Our Abrahamic Foundation is currently under construction and our team is working hard to bring it to life. Whether you're interested in volunteering or simply learning more about our initiatives, we encourage you to visit our work in
        progress website and reach out to us. We will also be providing more information in our
        newsletter, so be sure to sign up to stay up to date on our progress. Together, we can make a
        difference and create a better future for all.</p>

      <p style={styles.p}>We recognize that this is a big undertaking and we cannot do it alone. We need help from
        generous donors like you to reach as many widows and orphans as possible and provide them
        with the education and financial support they need to thrive. With your support, we can provide
        them access to special programs to enhance the quality of their education and give them
        opportunities they may not have otherwise had. Your donation will go a long way in empowering
        these children and helping them build a brighter future, not just for themselves, but for their
                        communities and the world at large.</p>
                </ul>
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
        minHeight: "100vh"
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

export default AbrahamicFoundation;
