import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import ReturnHome from "../../components/Buttons/returnhome";

const PrivacyPolicy = () => {


    const [showOptions, setShowOptions] = useState(false);

    const scrollToTopRef = useRef(null);
      

    return (


        <div style={styles.container}>
            <h1 style={styles.title}>Privacy Policy for The Abrahamic Crypto</h1>
            <div ref={scrollToTopRef} onClick={() => setShowOptions(!showOptions)}>  
      <p>
        Effective Date: July 1, 2023
      </p>
      <h3>Introduction:</h3>
      <p>
        Thank you for visiting our Abrahamic crypto website. We are committed to protecting the privacy and
        security of your personal information. At Abrahamic Crypto Group, we prioritize the privacy and security
        of your personal information. This unique Privacy Policy aims to provide you with a comprehensive
        understanding of how we collect, utilize, disclose, and protect your data when you engage with our
        website. We are committed to maintaining the utmost transparency regarding our data practices to
        ensure your peace of mind. By accessing or using our website, you consent to the terms of this Privacy
        Policy and the processing of your information as described herein.
      </p>
      <h3>Information We Collect:</h3>
      <p>
        Personal Information: When you use our website, we may collect certain personally identifiable
        information, such as your name, email address, and any other information you provide voluntarily. We
        only collect this information when you provide it to us knowingly and consent to its collection.
      </p>
      <p>
        Non-Personal Information: We may also collect non-personal information, such as your IP address,
        browser type, device information, and usage data. This information is collected automatically through
        cookies, web beacons, and similar technologies to enhance your browsing experience and analyze trends
        on our website.
      </p>
      <h3>Use of Information:</h3>
      <p>
        Provide and Improve Services: We may use your information to provide and maintain our services,
        customize your experience, respond to your inquiries, and communicate with you about our offerings,
        updates, and promotions.
      </p>
      <p>
        Analytics and Research: We may use non-personal information for analytical purposes to understand user preferences, optimize
        our website, and improve our services.
      </p>
      <p>
        Security and Fraud Prevention: Your information helps us protect the security and integrity of our
        website, detect, and prevent fraud or unauthorized access, and comply with legal obligations.
      </p>
      <p>
        Marketing Communication: With your consent, we may use your contact information to send you
        promotional materials and newsletters. You can opt out of receiving such communications at any time.
      </p>
      <h3>Disclosure of Information:</h3>
      <p>
        Collaboration with Trusted Partners: In order to ensure seamless operation of our website, conduct
        essential business activities, and provide you with exceptional services, we may collaborate with
        dependable third-party service providers. These trusted partners collaborate closely with us to assist in
        various aspects of our operations, ensuring a smooth and efficient experience for our valued users.
      </p>
      <p>
        Legal Compliance: We may disclose your information if required to do so by law, court order, or governmental authority.
        We may also disclose your information to protect our rights, property, or safety, or the rights, property, or safety of others.
        </p>

        <h2>Data Security</h2>
      <p>
        We employ reasonable security measures to safeguard your information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or electronic storage method is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
      </p>
      <h2>Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites or services. We do not control these third-party websites or their privacy practices. We encourage you to review the privacy policies of any third-party websites you visit.
      </p>
      <h2>Children's Privacy</h2>
      <p>
        Our website is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to delete such information from our systems.
      </p>
      <h2>Changes to this Privacy Policy</h2>
      <p>
        We reserve the right to update this Privacy Policy at any time. Any changes will be effective when posted on our website. We encourage you to review this Privacy Policy periodically for any updates.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at Abrahamic.org.
      </p>
      <h2>Abrahamic Crypto Group</h2>
      <p>
        Abrahamic Crypto Group is committed to providing a secure and trustworthy environment for its users. As part of this commitment, we have implemented measures for the prevention and suppression of fraud and abusive behaviors, including those by third parties, which conflict with industry standards, contractual provisions, and principles of integrity and good faith. The lawful basis for this process is our legitimate interest in performing security activities and controls to prevent and protect against fraudulent activities and abusive behaviors. In 2024, we will be able to provide you with detailed information, upon request, in a PDF file, regarding our legitimate interest and the corresponding balancing test.
      </p>
      <h2>Marketing Communications</h2>
      <p>
        With your consent, which is entirely optional, Abrahamic Crypto may use your personal data for marketing purposes. By subscribing to our newsletter, you agree to receive promotions, commercial or advertising communications about our products, services, and events. Our marketing activities may also include market research, surveys to gauge your satisfaction level, and statistical analyses utilizing aggregated anonymous data. The processing of your data for marketing purposes is based on your voluntary consent, and providing your data is optional. However, without providing your data, you will be unable to read the newsletter and essential information.
      </p>
      <p>
        To send you marketing communications or personalized offers, we employ various methods such as email, newsletters, SMS, MMS, chat, instant messaging, social networks, and traditional mail. This may include invitations to events organized by Abrahamic. You have the option to unsubscribe from newsletters by accessing the corresponding section of your personal account or by clicking the unsubscribe link, which is located at the bottom of every commercial communication.
        </p>
        
        <p>
  We value your privacy and the security of your personal information. Our commitment to preventing fraud and abusive behavior, along with our marketing practices, is designed to enhance your experience and provide relevant information about our products and services. If you have any questions, concerns, or would like further information, please contact us using the provided contact details.
</p>
<p>
  By subscribing to our newsletter and continuing to use our services, you acknowledge that you have read, understood, and consent to the practices described in this concept.
</p>
<p>
  Your personal data is processed by each controller within their respective areas of authority, as well as for the following purposes:
</p>
<h2>Management of Personal Data Protection Rights</h2>
<p>
  We process your personal data to manage requests related to the exercise of your rights regarding data protection. This processing is necessary to fulfill our legal obligations as a data controller.
</p>
<h2>Compliance with Personal Data Protection Requirements</h2>
<p>
  In certain circumstances, personal data protection legislation requires us, as a data controller, to use your contact details to provide you with specific information regarding the processing of your data. This may include notifying you about any security breaches affecting your information and the measures implemented to address them (referred to as data breaches). Additionally, we may inform you about significant updates to this privacy policy. This processing is necessary to fulfill our legal obligations as a data controller.
</p>
<p>
  We are committed to upholding the relevant legal obligations and ensuring compliance with personal data protection requirements.
</p>
<p>
  We utilize personal information about you for various purposes, ensuring that we provide you with a tailored and meaningful experience. The original description of these purposes is as follows:
</p>
<h2>Provision of Relevant Information and News</h2>
<p>
  Our aim is to keep you informed and updated with relevant information and news that may be of interest to you.
</p>
<h2>Personalized Communications</h2>
<p>
  Based on your activity on our website(s) or the website of our partners, we may send you personalized communications that align with your preferences. These communications may include details about campaigns, activities, and events.
</p>
<h2>Effectiveness Measurement</h2>
<p>
  We strive to understand and measure how effectively we serve you and others. This includes making suggestions and recommendations regarding services that may be of interest to you, utilizing insights gathered from your activity on our website(s) or the website of our partners.
</p>
<h2>Analytics and Profiling</h2>
<p>
  We conduct analytics and profiling activities to create aggregate trend reports, assess visitor engagement, track responses to marketing campaigns, and determine the most effective marketing channels and messages.
</p>
<h2>Seeking Your Views or Comments</h2>
<p>
  We value your feedback and may seek your views or comments on the service we provide to enhance your experience.
</p>
<h2>Notification of Changes</h2>
<p>
  We will notify you of any changes to our service, policies, and terms of use that may impact you.
</p>
<p>
  Regarding the access to your information, we prioritize your privacy and have established the following measures:
</p>
<h2>No Sale or Rental of Information</h2>
<p>
  We do not sell or rent your information to third parties, ensuring that your personal data remains secure.
</p>
<h2>No Sharing for Marketing Purposes</h2>
<p>
  We do not share your information with third parties for marketing purposes.
        </p>
        
        <h2>Limited Disclosure to Service Providers</h2>
<p>
  We may disclose your information to third-party service providers, agents, subcontractors, and associated organizations who perform tasks and provide services on our behalf. These entities are contractually bound to maintain the security of your information and are prohibited from using it for their own direct marketing purposes.
</p>
<h2>Protection of Privacy Rights</h2>
<p>
  We take necessary steps to protect your privacy rights and ensure that your personal information remains safeguarded.
</p>
<p>
  We regularly review our retention periods for personal information to ensure that we only retain it for as long as necessary for the relevant activities. Your privacy and data security are of utmost importance to us, and we are committed to upholding these principles.
</p>
<h2>Your Choices and Your Rights</h2>
<p>
  We respect your choices and uphold your rights regarding the processing of your personal information for newsletters. You have the right to inform us if you do not want us to process your personal information for marketing purposes. You can exercise this right by checking or unchecking specific boxes on the data collection forms. We will not contact you for marketing purposes unless you have provided your prior consent. You have the freedom to change your preferences at any time.
</p>
<h2>Updating Your Information</h2>
<p>
  Ensuring the accuracy of your information is essential to us. If there are any changes to your email address or any other information we hold that is inaccurate or outdated, please notify us by sending an email to [Abrahamic.org](mailto:info@abrahamic.org). We are committed to promptly updating and rectifying any inaccuracies. Additionally, you have the right to request a copy of the information that Abrahamic.org holds about you.
</p>
<h2>Security Measures to Protect Your Information</h2>
<p>
  We prioritize the security of your personal information. When you provide us with personal information, we will take appropriate steps to ensure its secure treatment. While non-sensitive details such as your email address may be transmitted unencrypted over the internet, we strive to protect your personal information. However, please note that the transmission of information over the internet is not completely secure, and we cannot guarantee the absolute security of any data you transmit to us.
</p>
<h2>Review of this Policy</h2>
<p>
  We keep this Policy under regular review. This Policy was last updated on May 14, 2023.
</p>
    
</div>
<div style={{position: 'relative', left: '0px', bottom: '0px', textAlign: 'center', width: '100%'}}>
        <ReturnHome />
        </div>
        </div>
    );
};

const styles = {
    container: {
      /* margin: 100, */
          backgroundColor: "#041f26",
      color: "white",
      /* padding: "10px 20px 0px 0px",  */
          padding: "50px 400px 40px 40px",
          boxShadow: "0px 0px 10px #282c34",
      minHeight: "100vh",
          //justificamos el contenido del texto
    textAlign: "justify",
    alignItems: "center",
    
        
      },
      title: {
          textAlign: "center",
          fontSize: "36px",
          margin: "0 0 20px 0"
      },
}

export default PrivacyPolicy;