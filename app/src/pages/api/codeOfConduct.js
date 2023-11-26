import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import ReturnHome from "../../components/Buttons/returnhome";

const CodeOfConduct= () => {


    const [showOptions, setShowOptions] = useState(false);

    const scrollToTopRef = useRef(null);
      

    return (


        <div style={styles.container}>
            <h1 style={styles.title}>Code of conduct</h1>
            <div ref={scrollToTopRef} onClick={() => setShowOptions(!showOptions)}>

         <div>
      <h2 style={{ textAlign: 'center' }}>Abrahamic Code of Conduct - Customer Interaction</h2>
      <h2 style={{ textAlign: 'center' }}>Our Team and Commitment to Progress for the Common Good: The Power of Us</h2>
      <p style={{ textAlign: 'center' }}>Every day, our team looks toward the future, building upon our core strengths. Our foremost priorities revolve around the pursuit of sustainable growth through innovative technologies and research and development. We also remain steadfast in supporting our pillars of corporate responsibility, aimed at advancing the communities where we operate and call home. Simultaneously, we are dedicated to cultivating a talented and skilled workforce that wholeheartedly embodies our core morals.</p>

      <h2 style={{ textAlign: 'center' }}>Our Approach</h2>
      <p style={{ textAlign: 'center' }}>Our approach is guided by a clear vision, purpose, priorities, and values. We aspire to create a legacy by setting forth an ambitious timeline for achieving our objectives. The strength of the Abrahamic Ecosystem lies in our unwavering commitment to making history through innovation, responsibility, and inclusivity. These are the hallmarks that define our organization and set us apart.</p>

      <h2 style={{ textAlign: 'center' }}>Corporate Responsibility Targets and Priorities</h2>
      <p style={{ textAlign: 'center' }}>Our journey involves setting corporate responsibility targets and priorities. These encompass our dedication to being recognized as a global iconic brand, one that makes a profound impact on society and the world at large. We understand that achieving this status is not only a responsibility but also a testament to our commitment to the greater good.</p>

      <p style={{ textAlign: 'center' }}>As we move forward, our promise remains resolute: to harness the collective strength of our team and partners, uphold the highest standards of corporate ethics, and drive progress for the betterment of all. Together, we are poised to realize our vision, shaping a future where Abrahamic stands as a beacon of innovation, responsibility, and inclusivity on the global stage.</p>
    </div>

    <h2>Welcome to our Abrahamic website</h2>
<p>Where we strive to provide excellent service and maintain a respectful and inclusive environment for all visitors. We value open and constructive communication, and we expect our customers to interact with our employees, especially those in customer care, in a professional, courteous, and respectful manner. To ensure a safe and respectful online experience for all, we have established this Code of Conduct to govern customer interactions. By using our website and engaging with our customer care representatives, you agree to abide by these guidelines:</p>

<ol>
    <li>
        <strong>Respectful Communication:</strong>
        <ul>
            <li>You shall always communicate with our customer care representatives respectfully and professionally.</li>
            <li>You should not use offensive, obscene, or profane language in your interactions.</li>
        </ul>
    </li>
    <li>
        <strong>Non-Discrimination:</strong>
        <ul>
            <li>You shall not engage in discrimination, harassment, or hate speech based on race, color, religion, nationality, gender, sexual orientation, or any other protected characteristic.</li>
            <li>You shall not make derogatory comments or engage in behavior that targets individuals or groups based on their identity.</li>
        </ul>
    </li>
    <li>
        <strong>Anti-Semitism and Hate Speech:</strong>
        <p>We unequivocally prohibit the use of anti-Semitic language or the dissemination of hate speech in any form. Anti-Semitism, a deeply prejudicial and discriminatory ideology, targets individuals based on their Jewish heritage, faith, or identity. This includes but is not limited to hate speech, derogatory comments, and the spread of anti-Semitic propaganda. Such actions not only violate our Code of Conduct but also infringe upon essential principles of human rights and may be subject to legal repercussions.</p>
        <p>It is imperative to comprehend that hate speech is not a protected form of expression, neither within the framework of our community guidelines nor within the boundaries of law. Hate speech encompasses language or actions that promote violence, discrimination, or hostility towards individuals or groups based on attributes such as race, ethnicity, religion, nationality, gender, sexual orientation, or disability. Engaging in hate speech can lead to severe consequences, including civil and criminal liabilities.</p>
        <p>We are committed to maintaining an environment where every individual is treated with dignity and respect, irrespective of their background or beliefs. To fulfill this commitment, we urge all users to refrain from any form of anti-Semitism, hate speech, or discriminatory behavior when interacting with our customer care representatives or fellow users.</p>
    </li>

    <li>
    <strong>Threats and Harassment</strong>
    <p>You shall not make threats, harass, or intimidate our customer care representatives or any other users.</p>
  </li>

  <li>
    <strong>Privacy and Confidentiality</strong>
    <p>You shall respect the privacy and confidentiality of our customer care representatives. Do not inquire about or share personal information about our employees.</p>
  </li>

  <li>
    <strong>Reporting Violations</strong>
    <p>If you witness any violations of this Code of Conduct or experience inappropriate behavior during your interactions, please report it immediately using our designated reporting channels.</p>
  </li>

  <li>
    <strong>Consequences of Violation</strong>
    <p>Violating this Code of Conduct may result in the suspension or termination of your access to our website and services.</p>
    <p>Serious violations may also be reported to relevant authorities.</p>
  </li>

  <li>
    <strong>Legal Protections</strong>
    <p>Please be aware that individuals working in customer care have legal protections against harassment and discrimination under various national and international laws.</p>
  </li>

  <li>
    <strong>Legal Responsibility</strong>
    <p>Understand that individuals who engage in harassing, threatening, or discriminatory behavior may be held legally responsible for their actions. Legal action, including but not limited to civil and criminal charges, may be pursued in response to violations of this Code of Conduct.</p>
  </li>

  <li>
    <strong>Moderation and Removal of Content</strong>
    <p>We reserve the right to moderate, edit, or remove content that violates this Code of Conduct or any applicable laws. Such actions will be taken at our discretion and without prior notice.</p>
  </li>

  <li>
    <strong>Continuous Improvement</strong>
    <p>We are committed to continuously improving our customer service and online experience. Constructive feedback and suggestions for improvement are always welcome and encouraged.</p>
  </li>

  <li>
    <strong>Mutual Respect</strong>
    <p>Recognize that our customer care representatives are here to assist you to the best of their abilities. Please treat them with the same respect and courtesy that you would expect when seeking assistance.</p>
  </li>

  <li>
    <strong>Impersonation</strong>
    <p>You shall not impersonate our customer care representatives or other users of the website. Clear identification and authenticity are essential for productive communication.</p>
  </li>

  <li>
    <strong>Acknowledgment of Terms</strong>
    <p>By using our website and engaging with our customer care representatives, you acknowledge that you have read, understood, and agreed to abide by this Code of Conduct.</p>
  </li>

  <li>
    <strong>Questions and Clarifications</strong>
    <p>If you have any questions or need clarifications regarding this Code of Conduct, please do not hesitate to contact our customer care team.</p>
  </li>
                </ol>
                
                <h2>Disclaimers:</h2>

<p>The Site and all content and other items made available by Abrahamic are provided on an "as is" and "as available" basis without warranties of any kind, whether express, implied, statutory, or otherwise, including any implied warranty of title, merchantability, fitness for a particular purpose, or non-infringement, to the maximum extent permitted by applicable law. Abrahamic assumes no liability or responsibility for any of the following:</p>

<p><strong>Errors and Inaccuracies:</strong> Abrahamic is not responsible for errors, mistakes, or inaccuracies in data or information posted, displayed, published, or made available for download or use on the Site.</p>

<p><strong>Personal Injury or Property Damage:</strong> Abrahamic refuses any liability for personal injury or property damage, of any nature whatsoever, resulting from the use of the Site.</p>

<p><strong>Interruption of Transmission:</strong> Abrahamic does not guarantee uninterrupted transmission to or from the Site, and it refuses any responsibility for any interruption of service.</p>

<p><strong>Third-Party Conduct:</strong> Abrahamic is not responsible for the defamatory, offensive, or illegal conduct of any third party who is not under Abrahamic control.</p>

<p>Abrahamic reserves the right to investigate violations of these Terms or misuse of the Site, although it is not obligated to do so. In its sole discretion, Abrahamic may edit, refuse to post, or remove any content that it finds to be in violation of these Terms. Additionally, Abrahamic may report any suspicious or unlawful activity to the appropriate law enforcement officials, regulators, or other relevant third parties. This reporting may involve disclosing necessary customer data. Furthermore, Abrahamic may cooperate with law enforcement agencies, regulators, or other relevant third parties to aid in the investigation and prosecution of illegal conduct by providing network and systems information related to alleged violations.</p>

<p>These disclaimers are in place to protect both Abrahamic and its users. Users should be aware that while Abrahamic strives to maintain a safe and reliable platform, there are inherent risks associated with online interactions, and users should exercise caution and adhere to our Terms.</p>

<h2>Indemnity</h2>

<p>You agree to defend, indemnify and hold harmless Abrahamic, its affiliates and their respective employees, contractors, agents, officers and directors from and against any and all claims, damages, obligations, losses, liabilities, costs, debt or expenses (including without limitation attorneys' fees) arising out of or related to any claim, suit, action or proceeding by a third party arising out of or relating to your use of the Site, breach of these Terms (including any Datadog policy referenced in these Terms), violation of law, or any Content that you post, upload or cause to interface with the Site, or otherwise transfer, process, use or store in connection with the Site.</p>

<h2>Limitation of Liability</h2>

<p>To the fullest extent permitted by applicable law, the following limitations and exclusions apply:</p>

<ol>
  <li>(a) <strong>Indirect Damages:</strong> In no event shall Abrahamic, its affiliates, or their respective employees, contractors, agents, officers, or directors be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages. This includes, but is not limited to, damages for lost business, lost profits, loss of goodwill, use, data, or other intangible losses resulting from or connected to the Site.</li>
  <li>(b) <strong>Cumulative Liability:</strong> In no event shall Abrahamic cumulative and aggregate liability under these Terms exceed the maximum extent allowed by applicable law. The exclusions and limitations in this section apply whether the alleged liability is based on contract, tort, negligence, strict liability, or any other legal basis, even if you have been advised of the possibility of such damage.</li>
</ol>

<p>These limitations of liability are designed to define the extent of Abrahamic responsibility and protect it from certain types of claims and damages. Users should carefully review and understand these limitations, as they play a crucial role in governing the relationship between users and Abrahamic in using the Site.</p>

<h2>Community Code of Conduct</h2>

<p>The Abrahamic community is a gathering of participants who are expected to uphold principles of legality, honesty, ethics, and the best interests of the global project. This Code of Conduct establishes rules and guidelines aimed at promoting sound judgment within our community, maintaining it as a respectful and well-illuminated space for meaningful public discourse regarding the project. By becoming a member and engaging in any of the official Abrahamic community channels, you affirm your commitment to abide by this Code of Conduct.</p>

<p>The Abrahamic community team retains the authority to restrict access to the official Community channels for individuals found to be in violation of the Abrahamic Community Code of Conduct. This measure is in place to ensure that our community remains a place of constructive and respectful discussion in line with our shared values and goals. Under no circumstances shall Abrahamic or its subcontractors be held liable for any damages, including but not limited to those arising from data loss, loss of profits, or business interruption, resulting from the use or inability to use the materials presented on this website. This holds true even if an Abrahamic authorized representative has been informed, either orally or in writing, of the potential for such damages.</p>

<h2>Terms of Service Agreement</h2>

<p>By accessing the websites at www.Abrahamic.org, you acknowledge your consent to adhere to these terms of service, all relevant laws, and regulations, and affirm your responsibility for complying with any applicable local laws. If you do not concur with any of these terms, your usage or access to this site is prohibited.</p>

<p>The materials found on this website are protected by applicable copyright and trademark laws. This means that the content, including text, images, logos, and other media, is legally owned and controlled by Abrahamic or its authorized entities. These copyright and trademark laws grant specific rights to the owner, including the exclusive right to reproduce, distribute, and display the content.</p>

<p>In simple terms, these laws protect Abrahamic intellectual property, and any unauthorized use or reproduction of the website's content is prohibited. If you wish to use any materials from this website for any purpose other than personal or non-commercial use, you must obtain explicit permission from Abrahamic or the respective copyright or trademark owner. Failure to comply with these laws may result in legal action.</p>

<p>We take copyright and trademark violations seriously and will fully enforce our rights of the law to protect our intellectual property.</p>

<h2>Use License</h2>

<p>These Terms of Use grant you permission to use the Website solely for your personal, non-commercial use. However, you are expressly prohibited from doing the following:</p>

<ul>
  <li>Modifying or copying the materials.</li>
  <li>Using the materials for any commercial purpose, or for any public display (whether commercial or non-commercial).</li>
  <li>Removing any copyright or other proprietary notations from the materials.</li>
</ul>

<p>Please be aware that this license can be automatically terminated if you breach any of these restrictions. Additionally, Abrahamic reserves the right to terminate this license at any time. You must immediately delete all contents in your possession, whether they are in printed or electronic form, if your license is terminated.</p>

<p>This Use License outlines the terms under which you can use the materials on the Website. It restricts the use of these materials to personal, non-commercial purposes and prohibits any modification, commercial use, or removal of copyright notices. Failure to adhere to these terms may result in the termination of your license and potential legal consequences.</p>

<p>We are committed to providing an inclusive and respectful online environment for everyone. By following this Code of Conduct, you help us maintain a positive and productive relationship between our customers and employees. We appreciate your cooperation in making our website a safe and welcoming place for all. Thank you for taking the time to review and adhere to our Code of Conduct. We are dedicated to fostering a positive and respectful online community, and your commitment to these guidelines helps us achieve that goal. Your cooperation is appreciated.</p>

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

export default CodeOfConduct;