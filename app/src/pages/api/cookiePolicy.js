import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import ReturnHome from "../../components/Buttons/returnhome";

const CookiePolicy = () => {


    const [showOptions, setShowOptions] = useState(false);

    const scrollToTopRef = useRef(null);
      

    return (


        <div style={styles.container}>
            <h1 style={styles.title}>Use of Cookies</h1>
            <div ref={scrollToTopRef} onClick={() => setShowOptions(!showOptions)}>
                <ul> 
                <h2>Use of Cookies</h2>
      <p>
        Similar to the use of cookies, our site(s) may also use other types of tracking technologies such as web beacons, pixels, or tags. These technologies help us to understand how you interact with our site(s) and allow us to tailor your experience to better suit your needs.
      </p>
      <p>
        Like cookies, web beacons and pixels are small pieces of code that are placed on a webpage or within an email. They allow us to collect information about how you interact with our site(s), such as which pages you visit and which links you click on. This information is then used to help us improve our site(s) and to provide you with a more personalized experience.
      </p>
      <p>
        In addition, we may also use tags to track the effectiveness of our advertising campaigns. These tags allow us to see which ads are being clicked on and which are not, so that we can adjust our campaigns accordingly.
      </p>
      <p>
        We take your privacy seriously and we only use these tracking technologies in accordance with our privacy policy. If you do not wish to have your information collected through the use of these technologies, you can opt-out by adjusting your browser settings. Cookies can be set by the website you are visiting or by third-party providers such as advertisers, social media platforms, and analytics services. Cookies can be used for various purposes such as personalization, analytics, and advertising.
      </p>
      <p>
        By using our site(s), you consent to the use of these tracking technologies and to the collection and use of your information as described in our privacy policy. Some users may prefer to disable cookies or use browser extensions to manage them. Many websites now provide options for users to manage their cookie preferences, including opting out of third-party cookies or deleting cookies altogether.
      </p>
      <h3>Personalization Cookies</h3>
      <p>
        Personalization Cookies are used to improve the user experience and make the website more personalized and relevant to the user's interests. These cookies may include third-party cookies, such as those used for analytics and tracking user behavior. The information collected by these cookies may be used to customize content and advertising, and to measure the effectiveness of advertising campaigns. These cookies are not essential for the functioning of the site, but they do enhance its performance and functionality. Users may choose to disable these cookies if they do not wish to receive a personalized experience on the site. However, doing so may limit certain features and functionalities of the site.
      </p>
      <h3>Strictly Necessary Cookies</h3>
      <p>
        Strictly necessary cookies are essential for the proper functioning of our site(s). These cookies cannot be disabled and are usually set in response to actions made by you, such as setting your privacy preferences, logging in, or filling in forms.
      </p>
      <p>
        These cookies allow you to navigate our site(s) and access secure areas of the website. Without these cookies, certain features of our site(s) may not be available to you.
      </p>
      <p>
        Examples of strictly necessary cookies include:
                    </p>
                    <h2>Authentication cookies:</h2>
      <p>
        These cookies are used to identify you when you log in to our site(s) and ensure that you can access the appropriate pages and features.
      </p>
      <h2>Session cookies:</h2>
      <p>
        These cookies enable you to navigate our site(s) and use its features. They are deleted once you close your browser.
      </p>
      <h2>Load-balancing cookies:</h2>
      <p>
        These cookies are used to ensure that the site(s) load quickly and efficiently by distributing the load across multiple servers.
      </p>
      <p>
        We do not require your consent to use strictly necessary cookies because they are necessary for the functioning of our site(s). By using our site(s), you agree to the use of these cookies. If you disable these cookies, certain features of our site(s) may not be available to you, and the site(s) may not function as intended.
      </p>
      <h2>Performance Cookies:</h2>
      <p>
        Performance cookies, also known as statistical cookies, are used to collect information about how visitors use our site(s). These cookies help us measure and improve the performance of our site(s) by providing information about which pages are the most and least popular, how visitors move around the site, and where they come from. All information collected by these cookies is aggregated and anonymous, meaning it cannot be used to identify individual visitors. We use this information to understand how our site(s) is used and make improvements to enhance the user experience.
      </p>
      <p>
        Examples of performance cookies include:
      </p>
      <ul>
        <li>Analytics cookies: These cookies are used to track visitor behavior and collect information about how visitors use our site(s).</li>
        <li>Conversion tracking cookies: These cookies help us track the success of our marketing campaigns by recording when a visitor completes a specific action, such as filling out a form.</li>
      </ul>
      <p>
        We use performance cookies with your consent, which you can withdraw at any time by adjusting your cookie preferences. If you do not allow these cookies, we will not be able to monitor the performance of our site(s) or improve its functionality. By allowing these cookies, you help us improve the user experience of our site(s) and ensure we are providing relevant and helpful information.
      </p>
      <h2>Targeting Cookies:</h2>
      <p>
        Targeting cookies are used to track visitors across websites and are typically set by our advertising partners. These cookies allow us to personalize our marketing efforts and show you relevant ads based on your interests. These cookies may be used by our advertising partners to build a profile of your interests and show you targeted ads on other sites. They do not store directly personal information, but they are based on uniquely identifying your browser and internet device.
      </p>
      <p>
        By allowing targeting cookies, you can experience more personalized and relevant advertising. However, if you do not allow these cookies, you may see less targeted advertising.
      </p>
      <p>
        Examples of targeting cookies include:
      </p>
      <ul>
  <li>Advertising cookies: These cookies are used to show you targeted ads based on your interests and online behavior.</li>
  <li>Analytics cookies: These cookies are used to track your behavior on our site(s) and other websites to provide us with insights into your interests and preferences.</li>
                    </ul>
                    We use targeting cookies with your consent, which you can withdraw at any time
by adjusting your cookie preferences. You can also opt-out of targeted advertising
by visiting the Digital Advertising Alliance or Network Advertising Initiative opt-out

pages. However, please note that opting out of targeting cookies does not mean
                    you will no longer see ads, but they will be less relevant to you.
                    <h2>Third-Party Use of Cookies</h2>
                    <p>We do not control these third parties' tracking technologies or how they may be used. If you have any questions about an advertisement or other targeted content, you should contact the responsible provider directly.</p>
        <p>Our site(s) may use third-party cookies to provide you with personalized content or advertising based on your interests. These cookies are set by third-party providers such as advertisers, ad networks and servers, content providers, and application providers.</p>
        <p>These third-party cookies may collect information about your browsing behavior and online activities, which may be associated with your personal information. They may also collect information about your interactions with our site(s) or other websites and online services.</p>
        <p>We do not control these third-party cookies or how they are used. We recommend that you review the privacy policies of these third-party providers to understand their data collection and use practices. If you have any questions or concerns about targeted content or advertising, you should contact the responsible provider directly.</p>
        <p>Examples of third-party cookies include:</p>
        <ul>
          <li>Advertising cookies: These cookies are used to show you targeted ads based on your interests and online behavior.</li>
          <li>Analytics cookies: These cookies are used to track your behavior on our site(s) and other websites to provide us with insights into your interests and preferences.</li>
          <li>Social media cookies: These cookies are used to integrate social media functionality into our site(s), such as allowing you to share content or follow us on social media platforms.</li>
        </ul>
                    <p>You can manage your cookie preferences by adjusting your browser settings or by using the cookie consent banner on our site(s). However, please note that disabling third-party cookies may affect your user experience and limit your ability to access certain features or content on our site(s).</p>
                    
                    <h2>The Cookie Law</h2>
                    <p>The Cookie Law, also known as the EU Cookie Directive, requires websites to
obtain the user's consent before storing or accessing cookies on their device. This
is to ensure that users have control over their personal data and privacy. When
visiting a website, users should be provided with clear and comprehensive
information about the types of cookies being used, their purpose, and how long
they will be stored on the device. Additionally, users should be given the option to
accept or reject cookies based on their preferences. However, it's important to
note that blocking certain types of cookies may limit the functionality and user
                        experience of a website.</p>
                    <h2>How can I control cookies?</h2>
                    <p>In addition to the options available on this page, you can also control cookies
through your browser settings. Depending on the browser you are using, you can
typically find cookie settings in the "Preferences," "Settings," or "Options" menu of
your browser. From there, you can choose to block or allow cookies, as well as
manage specific cookie preferences for individual websites. If you have any
questions or concerns about managing cookies in your specific browser, you can
                        contact your browser's support team for further assistance.</p>
                    <p>It is important to note that disabling or blocking cookies may impact the functionality and
performance of certain websites, and may prevent you from accessing certain features or
                        services.</p>
                    <h2>Important Notes</h2>
                    <p>At the Abrahamic, we take your privacy seriously and do not sell your personal
data to third parties for their own marketing purposes in exchange for monetary
                        consideration.</p>
                    <p>Please note that if you access our website on a different browser or device, you
will need to adjust your preferences on this screen again. Additionally, if you clear
your cookies on your browser, you will need to revisit this screen to re-save your
                        preferences.</p>
                    
                  
                    

                </ul>
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
        padding: "50px 400px 40px 40x",
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

export default CookiePolicy;