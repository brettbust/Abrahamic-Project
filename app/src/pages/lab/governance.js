import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import ReturnHome from "../../components/Buttons/returnhome";

const Governance = () => {


    const [showOptions, setShowOptions] = useState(false);

    const scrollToTopRef = useRef(null);
      

    return (


        <div style={styles.container}>
            <h1 style={styles.title}>Governance</h1>
            <div ref={scrollToTopRef} onClick={() => setShowOptions(!showOptions)}>
            
            <p>Abrahamic is characterized by its community, The users of the Abrahamic blockchain. Its governance model encompasses the mechanisms, processes, and systems that drive decision-making, establish rules and policies, and exercise authority.</p>
            <p>Within the Abrahamic blockchain network, governance plays a pivotal role in determining the network's direction and development. Our unique governance model sets us apart by prioritizing autonomy, transparency, and community involvement, in contrast to traditional centralized models.</p>
            <p>One of the key aspects of Abrahamic governance architecture model is that we believe in giving every member of our community a voice. Our governance relies on the active participation of stakeholders, including Abrahamic token holders, who will have the opportunity to contribute to key decisions through a proposal and voting system. This inclusive approach ensures that the entire community has a say in shaping the network, fostering accountability and transparency throughout the process.</p>
            <p>The governance of Abrahamic serves as a foundation for our operations, establishing the rules and processes that guide the network's evolution and growth. Unlike centralized models where decisions are made by a select few, our community-driven approach empowers individuals holding tokens to directly influence the protocol's trajectory and development. This not only promotes transparency but also ensures that decisions are made collectively, with the input of a diverse group of stakeholders.</p>
            <p>Transparency and accountability are crucial elements of our governance model. All stakeholders can assess proposals and exercise their voting rights based on their own judgment. This decentralized decision-making process reduces the risk of any single entity exerting disproportionate influence. In the world of cryptocurrency and blockchain, where trust and legitimacy are paramount, our governance model paves the way for an autonomous and fair ecosystem that benefits both users and developers.</p>
            <p>By involving the entire community in governance, we foster a sense of ownership and responsibility among our users. This participatory approach aligns with our vision of creating a more equitable and user-centric blockchain ecosystem. We believe that empowering our community members to shape the network leads to greater innovation, resilience, and long-term success.</p>
            <p>The Abrahamic governance model represents a significant step forward in the blockchain space. We are committed to building a decentralized future, where decisions are made collectively, and the voices of our community members are heard. Together, we are creating an ecosystem that promotes autonomy, simplicity, and fairness for all.</p>
                
            <h2>This are some of the initial concepts that we will introduce as we grow together in our
                    governance:</h2>
                
                <h3>Governance tokens enable decentralized decision-making.</h3>

                <ul>
                    <li>Developers create protocols with governance.</li>
                    <li>Decentralized autonomous organizations offer governance.</li>
                </ul>

                <h3>Token holders can vote on protocol changes.</h3>

                <ul>
                <li>The holders have the right to vote on the future of the protocol.</li>
                <li>Voting is done through governance.</li>
                </ul>

                <h3>Smart contracts automate questions, but manual changes are still used in some cases.</h3>

                <ul>
                <li>Smart contracts are used for question implementation.</li>
                <li>Old-school manual approaches are still used for implementing changes in some cases.</li>
                </ul>

                <h3>Off-chain solutions and governance are important in blockchain projects.</h3>
                Snapshot is an off-chain solution being considered.
                The use of governance tokens varies from project to project.

                <h3>Maker Dao’s governance token allows users to vote on important decisions.</h3>

                <ul>

                <li>Examples of decisions include whether or not to raise the debt ceiling.</li>
                <li>Users can also vote on changes to rules to maintain or improve the system.</li>
                    
                </ul>

                <h3>Balancer incentivizes liquidity providers with BAL token.</h3>

                <ul>

                <li>Liquidity providers are encouraged to participate in decision making.</li>
                    <li>BAL token is given to liquidity providers as a reward.</li>
                    
                </ul>

                <h3>Governance incentivizes liquidity providers.</h3>

                <ul>

                <li>Liquidity providers may not care about anything other than earnings.</li>

                <li>Hassle-free voting and perks sweeten the deal.</li>
                
                </ul>

                <p>Introducing a transformative blueprint for change, driven by the collective and the select few. This blueprint aims to redistribute power, eliminating unnecessary intermediaries and fostering a paradigm shift that enhances the lives of everyone involved.</p>
                <p>At its core, this concept challenges traditional structures that concentrate power in the hands of a few. By embracing a more inclusive approach, we empower individuals and communities to actively participate in decision-making processes. This collective effort ensures that the needs, aspirations, and well-being of all stakeholders are considered and prioritized.</p>
                <p>By removing unnecessary intermediaries, we streamline processes and create more direct pathways to impact. This opens opportunities for innovation, efficiency, and equitable distribution of resources. The goal is to create a system that benefits the many, breaking down barriers and enabling individuals to thrive on their own terms.</p>
                <p>This blueprint for change recognizes that true progress requires collaboration, transparency, and a reimagining of traditional power dynamics. It strives to create an environment where everyone's voice is heard and valued, fostering a sense of shared ownership and responsibility.</p>
                <p>Through this redistribution of power, we aim to cultivate a society that empowers individuals to shape their own destinies, encourages creativity and entrepreneurship, and ultimately improves the quality of life for all. It is a bold vision that invites collective action and stands as a testament to the transformative potential of unity and collaboration.</p>
                <p>Together, we have the power to enact meaningful change and build a future that is fair, inclusive, and beneficial to every member of society. Let us embrace this blueprint for change, driven by the many and the few, as we work towards a world where the lives of all individuals are uplifted and transformed.</p>
                <p>Thank you for joining us on this journey towards a more inclusive and sustainable blockchain governance model to bring the best ideas individually (One-by-one) for voting, bringing proof of ownership to the table for a clearly defined way to the platform, which references sustainable development and participation. This is where the best ideas thrive.</p>
   
            </div>

            <button style={styles.button}><Link style={{ textDecoration: 'none' }} to="/workinprogress" onClick={() => scrollToTopRef.scrollIntoView({ behavior: 'smooth', block: 'start'})}  >Participate</Link></button>
            <button style={styles.button}><Link style={{ textDecoration: 'none' }} to="/workinprogress" onClick={() => scrollToTopRef.scrollIntoView({ behavior: 'smooth', block: 'start'})}  >Voting</Link></button>
            <button style={styles.button}><Link style={{ textDecoration: 'none' }} to="/workinprogress" onClick={() => scrollToTopRef.scrollIntoView({ behavior: 'smooth', block: 'start'})}  >Proposals</Link></button>
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

export default Governance;
