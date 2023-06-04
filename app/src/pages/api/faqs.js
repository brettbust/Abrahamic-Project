import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";

const Faqs = () => {
    const [showOptions, setShowOptions] = useState(false);

    const scrollToTopRef = useRef(null);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Frequently Asked Questions</h1>
            <div onClick={() => setShowOptions(!showOptions)}>
    <p style={styles.paragraph}><strong>What is Abrahamic?</strong></p>
    <p style={styles.paragraph}>Abrahamic is a decentralized cryptocurrency that is backed by tangible assets and offers a return on investment within a cell managed by various entities such as venture capitalists, private equity firms, digital asset funds, and others. It operates within an ecosystem and digital system, utilizing the blockchain to enhance its value and security. The aim of Abrahamic is to provide financial benefits for its investors by maximizing their portfolio with socially responsible companies. This investment opportunity is a game-changer for the crypto market.</p>
    <p style={styles.paragraph}>Abrahamic's unique approach to decentralized finance focuses on enhancing security and transparency, providing investors with greater confidence in the value and stability of their investments. Additionally, Abrahamic supports social and environmental initiatives, making it a complete package that benefits everyone who invests in this cryptocurrency.</p>
    <p style={styles.paragraph}><strong>What kind of companies does Abrahamic invest in?</strong></p>
    <p style={styles.paragraph}>Abrahamic invests in companies across various industries that meet strict criteria for profitability, sustainability, and social responsibility. These companies are carefully selected and monitored to ensure that they align with Abrahamic's values and investment strategy.</p>
    <p style={styles.paragraph}><strong>How does Abrahamic ensure that the companies it invests in are socially responsible?</strong></p>
    <p style={styles.paragraph}>Abrahamic has a rigorous screening process that evaluates companies based on their technological advancement, best products, best services, environmental friendliness, value, great standards, social governance (ESG) practices, fair trade, and fair work environment. This includes fair wages and benefits, reasonable working hours, safe and healthy working conditions, protection against discrimination and harassment, opportunities for training and development, and much more. We also consider factors such as their carbon footprint, labor practices, and community engagement to ensure that we are making a positive impact. Only companies that meet these high standards are considered for investment, as we want to ensure high yield and reliability within the assets. There is a desire to set an example for the world and inspire people on a personal level. This will be achieved not only by words, but also by actions, and the impact of Abrahamic will be visible and noteworthy enough to serve as a model for others to follow. It is hoped that this will have a positive emotional effect on individuals. The goal is to make a significant and positive impact on the world, both in terms of tangible results and emotional resonance.</p>
    <p style={styles.paragraph}><strong>What are the benefits of investing in Abrahamic?</strong></p>
    <p style={styles.paragraph}>Investing in Abrahamic offers several benefits, including potential long-term financial gains and the opportunity to support a decentralized cryptocurrency backed by tangible assets. In addition, Abrahamic aims to create positive social and environmental impact through its initiatives, which can provide investors with a sense of purpose beyond financial returns.</p>
    <p style={styles.paragraph}><strong>How can I invest in Abrahamic?</strong></p>
    <p style={styles.paragraph}>Investing in Abrahamic is made simple and convenient for everyone. Currently, Abrahamic is available for purchase on Binance, and in the future, it will be accessible through other platforms and exchanges. Our team is working hard to ensure the widest possible distribution for our investors. To invest, you can purchase Abrahamic tokens using your preferred cryptocurrency or fiat currency. <strong>"However, before investing, it is important to do your own research and consider your risk tolerance. Please keep in mind that investing involves risks and you should only invest what you can afford to lose. It's important to take the time to educate yourself about investing and to ensure that Abrahamic aligns with your personal investment goals and values. We encourage you to do your homework and learn about investing before considering Abrahamic."</strong></p>
    <p style={styles.paragraph}><strong>Is Abrahamic environmentally friendly?</strong></p>
    <p style={styles.paragraph}>Yes, Abrahamic is committed to promoting sustainability and protecting natural resources. The Abrahamic Foundation is dedicated to supporting initiatives that promote biodiversity, protect oceans, rivers, lakes, air, soil, and more. By investing in Abrahamic, investors are also supporting a cryptocurrency that prioritizes environmental sustainability.</p>
    <p style={styles.paragraph}><strong>Why choose us?</strong></p>
    <p style={styles.paragraph}>• At Abrahamic, we are dedicated to leveraging technology to create a positive impact on the future. Our approach combines the advantages of decentralized finance with the security of tangible assets, providing a unique investment opportunity that benefits both our investors and the broader community. Our team is committed to upholding principles of transparency, integrity, and innovation, with the aim of building a more equitable financial system for all.</p>
    <p style={styles.paragraph}>• We believe that investing in Abrahamic offers a one-of-a-kind chance to earn a profit while also contributing to social, environmental impact and generated wealth. By joining us on this journey, investors have the opportunity to be part of a positive change that generates long-term growth and expansion of their portfolio. Furthermore, our focus on transparency and security provides a sense of security for our investors, giving them peace of mind. So, if you're searching for an investment that aligns with your values and makes a difference, we welcome you to join us.</p>
    <p style={styles.paragraph}>• We aim to provide our investors with access to an independent network of experts in the field of business. Our team of experts is available to provide guidance and support at any time, ensuring that our investors have the necessary resources to make informed investment decisions. We believe that this access will provide valuable insights and increase the potential for success. In addition, we are committed to providing ongoing education and training to our investors, ensuring that they stay informed and up-to-date with the latest developments in the world of business and finance.</p>
    <p style={styles.paragraph}>• At Abrahamic, we are committed to helping young entrepreneurs turn their ideas into successful businesses. We have developed a comprehensive program that provides information, resources, and support to recent graduates who are interested in starting a technology-based product or service company. Our goal is to help turn good ideas into profitable ventures by providing guidance on business planning, funding, and market research. We also provide mentorship and networking opportunities to connect these entrepreneurs with experienced professionals in their field. With our program, we aim to inspire innovation, promote economic growth, and create new job opportunities in the technology sector. At Abrahamic, we believe that investing in young entrepreneurs is an investment in the future, and we are committed to supporting them every step of the way.</p>
    <p style={styles.paragraph}>• We believe that our commitment to entrepreneurs extends beyond providing funding. We understand that entrepreneurs need support and guidance to reach their full potential. That is why we have created consultation programs to help entrepreneurs sharpen their education in areas such as business, new technology, and more. We have allocated a small portion of the assets for these programs, which will benefit them in the long run. We are committed to creating an ecosystem that supports the success and growth of our entrepreneurs, including those found on Venture Capital, Private Equity, Art Venture, and other platforms. Our goal is to ensure that our entrepreneurs receive the best service in the world. This commitment is a reflection of our belief that our success is intertwined with theirs. We are committed to providing our entrepreneurs with the tools, resources, and support they need to thrive. Whether it is through education, mentorship, or access to networks, we are here to help. Our consultation programs are designed to provide entrepreneurs with the guidance and support they need to succeed in today's dynamic business environment.</p>
    <p style={styles.paragraph}><strong>What are the tangible assets that back Abrahamic?</strong></p>
    <p style={styles.paragraph}>Abrahamic is unique in that it is backed by tangible assets, which provides greater stability and security compared to traditional cryptocurrencies that are often backed by nothing. These assets include valuable products that can be sold, used, exported, imported, precious metals, and other valuable commodities. Additionally, we offer services that utilize convenient products, such as eco-friendly cleaning supply products, as well as technology such as software and applications that add value to these assets.</p>
    <p style={styles.paragraph}>This combination of tangible assets and technology enhances the value and stability of Abrahamic, making it an attractive investment opportunity for those looking to diversify their portfolio with a more secure and stable investment option. By backing our cryptocurrency with this base utility, we aim to create a new standard in the world of decentralized finance, one that promotes both financial growth and social impact.</p>
    <p style={styles.paragraph}><strong>What is the Abrahamic Foundation?</strong></p>
    <p style={styles.paragraph}>The Abrahamic Foundation is a non-profit organization established by Abrahamic that provides a platform for individuals and organizations to donate to various causes and initiatives, including helping widows and orphans and promoting sustainability and biodiversity.</p>
    <p style={styles.paragraph}><strong>Will my investment with Abrahamic go towards the Abrahamic Foundation?</strong></p>
    <p style={styles.paragraph}>No. While Abrahamic and the Abrahamic Foundation are affiliated, your investment with Abrahamic is separate from any donations made to the foundation. The foundation operates as a non-profit organization and any donations made are used solely for its charitable initiatives.</p>
    <p style={styles.paragraph}><strong>Can I volunteer or get involved with Abrahamic or the Abrahamic Foundation?</strong></p>
    <p style={styles.paragraph}>Yes! We welcome anyone who is passionate about making a positive impact on the lives of widows, orphans, and the environment. Please be patient, our team is working diligently to make this platform available to the public soon. Once it's up and running, you will be able to visit our work in progress website for the Abrahamic Foundation and reach out to us to learn more about volunteer opportunities or other ways to get involved. More information will also be added to the newsletter.</p>
    <p style={styles.paragraph}><strong>How can I donate to the Abrahamic Foundation?</strong></p>
    <p style={styles.paragraph}>Once our website is launched, you will be able to donate directly through the Abrahamic Foundation's platform. Stay tuned for updates on our progress and be sure to sign up for our newsletter for more information.</p>
    <p style={styles.paragraph}><strong>What are the benefits of supporting the Abrahamic Foundation?</strong></p>
    <p style={styles.paragraph}>By supporting the Abrahamic Foundation, individuals and organizations can make a positive impact on the lives of widows, orphans, and the environment. The Foundation aims to provide education and financial support to widows and orphans, while also promoting sustainability and protecting natural resources. Additionally, supporting the Foundation can provide a sense of purpose beyond financial returns, allowing donors to contribute to causes they care about.</p>
    <p style={styles.paragraph}><strong>How will the Abrahamic Foundation help widows and orphans?</strong></p>
    <p style={styles.paragraph}>The Abrahamic Foundation recognizes the importance of supporting widows and orphans directly by providing financial assistance and access to educational programs. Through the foundation's efforts, bank accounts for college education will be opened for orphans, while widows and their children will receive bank benefits. In addition, special programs will be offered to ensure the quality of their education and empower them financially, thus investing in the future of our communities. It is crucial to provide support for those who have lost male role models or primary breadwinners. With the Abrahamic Foundation's initiatives, widows and orphans will have the resources they need to thrive and succeed in their lives.</p>
    <p style={styles.paragraph}><strong>How will the Abrahamic Foundation help the environment?</strong></p>
    <p style={styles.paragraph}>The Abrahamic Foundation is committed to promoting environmental sustainability and safeguarding natural resources such as oceans, rivers, lakes, air, and soil. We plan to launch a range of initiatives that will help preserve and sustain these resources for future generations. These initiatives will include programs aimed at promoting biodiversity, reducing pollution, supporting renewable energy, and preserving natural resources. Our goal is to create a healthier, cleaner, and more sustainable world for everyone, including schools, universities, workplaces, governments, and individuals. We believe that by investing in these initiatives, we can make a positive impact on the environment and create a better future for all. To share information about our initiatives, we will be providing pamphlets and incentivizing our community. If you want to learn more, we will have information available soon in a PDF file when we launch our website.</p>
    <p style={styles.paragraph}><strong>How to Explain Abrahamic to a 5th grader!</strong></p>
    <p style={styles.paragraph}>Abrahamic is a special kind of money called a cryptocurrency. It's like regular money that you can use to buy things, but instead of being printed on paper or metal coins, it's made on a computer.
But Abrahamic is special because it's not just made up out of nowhere. It's backed by things that are real and valuable, like produce, and services, and other important things. And people who invest in Abrahamic can make money from it, sort of like how you can make money if you put your allowance in a piggy bank and it grows over time.
All of this happens inside a special system called a blockchain, which is like a big computer network that keeps everything safe and secure. And there are special people who help manage everything and make sure it's working well.
So basically, Abrahamic is a new kind of money that is backed by real things, and it's kept safe and secure on a big computer network. And people can make money from it if they invest in it.
            </p>
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
        minHeight: "100vh"
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
    }
}

export default Faqs;
