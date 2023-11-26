import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import ReturnHome from "../../components/Buttons/returnhome";

const CustomerCare= () => {


    const [showOptions, setShowOptions] = useState(false);

    const scrollToTopRef = useRef(null);
      

    return (


        <div style={styles.container}>
            <h1 style={styles.title}>Customer Care</h1>
            <div ref={scrollToTopRef} onClick={() => setShowOptions(!showOptions)}>
    
<p>If you require additional information or assistance, please reach out to our Customer Care team via email at <a href="mailto:info@Abrahamic.org">info@Abrahamic.org</a>. But, please note that we are currently exclusively accessible via email for inquiries. At this moment, we are a work-in-progress website, and soon we will be updating and upgrading our customer care site. Furthermore, it is important to acknowledge that while we strive for seamless operation, we cannot guarantee uninterrupted service due to potential connectivity issues. We are actively working on site improvements, periodically undergoing updates, maintenance, and organization to enhance your browsing experience. We appreciate your patience as we work diligently to serve you better.</p>

<p>Soon, we will be expanding and upgrading our Customer Care services as well as our representative section. This upgrade will offer an array of resources, including registration forms, educational materials, tips, and comprehensive information about the services that will be available at <a href="xxxxxxxxxxxx">xxxxxxxxxxxx</a>.</p>

<p>Our team is committed to providing you with the most up-to-date information and assistance. We recommend reviewing our code of conduct before accessing this page. We thank you for your patience, and we eagerly anticipate the opportunity to serve you effectively soon.</p>

<h2>Special Notes: Termination and Monitoring</h2>

<p>We recommend reviewing our code of conduct before accessing this page. If you violate these Terms, Abrahamic may suspend or terminate your use of the Site. Abrahamic has the right to suspend or terminate your use of the Site even if a breach is committed unintentionally or without your authorization. This action may be taken if Abrahamic believes that suspension or termination is necessary to ensure compliance with Applicable Laws or to protect the rights, safety, privacy, security, or property of Abrahamic, its customers, or third parties.</p>

<p>Abrahamic reserves the right, but does not assume the obligation, to investigate any violation of these Terms or misuse of the Site. In its sole discretion, Abrahamic may edit, refuse to post, or remove any Content posted, displayed, published, or made available for download or use on the Site that Abrahamic finds to be in violation of these Terms. Abrahamic may also report any activity that it suspects violates any law or regulation to appropriate law enforcement officials, regulators, or other appropriate third parties. Such reporting may include disclosing appropriate customer data. Furthermore, Abrahamic may cooperate with appropriate law enforcement agencies, regulators, or other appropriate third parties to assist with the investigation and prosecution of illegal conduct by providing network and systems information related to alleged violations.</p>

<p>If a user submits a review, the user accepts these conditions of use, including the following conditions for submitting customer reviews.</p>

<h2>Rights of Use</h2>

<p>When you submit a review on our website, you grant, free of charge, the exclusive rights to use the review, including any attached photos, videos, and other content (hereinafter collectively referred to as the “Review”), without any limitation in terms of time, territory, or type of use. Abrahamic is exclusively entitled to publish, reproduce, and exploit the Review for its own purposes or those of third parties, either in whole or in part, either directly or through third parties, in any manner whatsoever, globally, and for an unlimited period, through all forms of media (both offline and online).</p>

<p>Abrahamic has the right to transfer the granted rights, either in whole or in part, to third parties (including group companies) and to grant sublicenses to third parties. Additionally, Abrahamic reserves the right to edit the Review as necessary. If you include your name in the Review, Abrahamic is entitled, but not obligated, to mention your name when publishing the Review.</p>

<h2>Our Team and Our Commitment to Excellence: Unleashing the Power of Us</h2>

<p>Every day, we chart a course for the future, anchored in our fundamental strengths. Our top priorities revolve around delivering sustainable growth through our unwavering ambition, upholding the pillars of corporate responsibility that drive positive change in the communities where we operate, and nurturing a proficient and skilled workforce that exemplifies our cherished values. This, we believe, is the embodiment of our commitment to progress.</p>

<p><strong>Our Approach</strong></p>

<p>At Abrahamic, our approach is guided by our vision, purpose, priorities, and core values. We are not merely interested in the present; we strive to leave a lasting mark on history through our continuous pursuit of meaningful results. Our commitment to these principles forms the foundation of our organization.</p>

<p><strong>Vision and Purpose:</strong></p>

<p>We envision a future where our contributions have a lasting impact. Our purpose is to create positive change by embracing innovation, responsibility, and inclusivity.</p>

<p><strong>Priorities:</strong></p>

<p>We prioritize sustainable growth, driven by cutting-edge technologies, and continuous research and development. Additionally, we are dedicated to fulfilling our corporate responsibilities, actively advancing the communities in which we operate.</p>

<p><strong>Values:</strong></p>

<p>Our values define us. We believe in innovation, responsibility, and inclusivity. These principles guide our actions, decisions, and relationships, both within our organization and with our stakeholders.</p>

<p><strong>Targets and Priorities:</strong></p>

<p>Our corporate responsibility targets and priorities are clear. We are determined to become a globally recognized and iconic brand. This recognition stems from our unwavering commitment to excellence, ethics, and societal contributions.</p>

<p>In summary, Abrahamic is not just an organization; it's a visionary force committed to shaping a better future. We aim to leave a legacy of innovation, responsibility, and inclusivity that will be remembered for generations to come. Our journey toward becoming a global iconic brand is driven by our dedication to these principles.</p>

<p>This policy is effective as of 23 October 2023.</p>
    
               
       
            </div>

            <ReturnHome />
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

export default CustomerCare;