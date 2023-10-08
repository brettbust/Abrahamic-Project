import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import RoadmapDiagram from '../../images/diagram.png';


import ReturnHome from "../../components/Buttons/returnhome";



const Roadmap = () => {

    const [showOptions, setShowOptions] = useState(false);

    const scrollToTopRef = useRef(null);
      

    return (


        <div style={styles.container}>
            <h1 style={styles.title}>Roadmap</h1>
            <div ref={scrollToTopRef} onClick={() => setShowOptions(!showOptions)}>
            
            <p>
        The Abrahamic Ecosystem is a new innovation in financial engineering that is tangible to customers and investors. Investors can purchase the Abrahamic cryptocurrency, which is invested in the Abrahamic lab ecosystem fund.
      </p>
      <p>
        The Abrahamic Ecosystem includes the following branches:
      </p>
      <ol>
        <li>Research and Development</li>
        <li>Financial Resources (venture capital, private equity, investment funds, hedge funds and others)</li>
        <li>Integration Design Systems (architectural development, engineering development)</li>
        <li>Energy Resources (renewable energy, minerals, research & development for the separation and extraction from brines and other metals, biogas, algae)</li>
        <li>Tourism</li>
        <li>Creative Arts (fine arts, art venture and NFT’s)</li>
        <li>Agricultural Resources (beekeeping, organic growing and farming, organic fertilizers and compost, agricultural data, research and testing, filtering systems)</li>
        <li>Health (organic pharmaceuticals, nutrition & wellness)</li>
        <li>Manufacturing (3D printing farm, CO2 laser, micro jet cut, CNC water jet, forging, modern furniture, sporting goods, and recreation gear)</li>
        <li>Logistics (international export for business products, national distribution, co-packing)</li>
      </ol>
      
      <h3>1. Research and Development</h3>
      <p>The Abrahamic Ecosystem lab provides a research and development department for all branches. All relevant information will be included in the graphs.</p>
      
      <h3>2. Financial Resources</h3>
      <p>Venture Capital and private equity support market products and services. Venture capital is focused on start-ups, micro businesses, invention, technology products, software, product service, and others. Direct private funds, investment funds, hedge funds, and real estate funds are part of the 2nd phase of the roadmap.</p>
      
      <h3>3. Integration Design Systems</h3>
      <p>
        Integration design systems include architectural and engineering development. Architectural development is focused on new designs of prefabricated panels, new types of concrete material which is more efficient and durable having new types of ingredients, and new insulation materials designed to make the building materials last longer. Engineering development includes iron fluid batteries, sand batteries, HVAC maintenance, natural cleaning solutions for HVAC systems, and others.
      </p>
      
      <h3>4. Energy Resources</h3>
      <p>
        Renewable energy includes fluid batteries, vertical wind power generation, solar collectors, solar tube panels technology, geothermal piping devices, and others. Minerals and metals include the extraction of brines from sea salt, alkalai metals, alkaline metals, transition metals, basic metals, semimetals, nonmetals, and others. Biogas, clean energy resources, tank distribution, and direct distribution are also included. Biodiesel and algae are part of the 2nd phase of the roadmap.
            </p>
            <h3>5. Tourism</h3>
  <p>
    It will include products from local and national producers aimed at tourist’s demands. Only the best products will be selected and placed on the market including online international sales. Products such as:
  </p>
  <ul>
    <li>Wine</li>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Honey</li>
    <li>Wood work</li>
    <li>Soaps and others</li>
  </ul>
  <h3>6. Creative arts</h3>
  <p>
    Tangible assets of fine arts, art venture and sculptures include:
  </p>
  <ul>
    <li>Auction houses</li>
    <li>Artists (fair trade)</li>
    <li>Galleries</li>
    <li>Private collectors</li>
  </ul>
  <p>
    NFT’s include:
  </p>
  <ul>
    <li>Original artwork</li>
    <li>Art market</li>
    <li>Clean art (no profanities, swearwords, vulgar language, coarse language, crudities, offensiveness) and others</li>
  </ul>
  <h3>7. Agricultural resources</h3>
  <p>
    Beekeeping focus is on:
  </p>
  <ul>
    <li>Organic raw honey with excellent qualities and benefits</li>
    <li>Pollen</li>
    <li>Propolis and other</li>
  </ul>
  <p>
    Organic growing and farming is focused on:
  </p>
  <ul>
    <li>Productivity</li>
    <li>Crop quality</li>
    <li>Reduce operation costs</li>
    <li>Quality yield and others</li>
  </ul>
  <p>
    Organic fertilizers and compost in 2nd phase Agricultural data, research, and testing for new products:
  </p>
  <ul>
    <li>viticulture</li>
    <li>Coffee</li>
    <li>Tea and others</li>
  </ul>
  <h3>8. Health</h3>
  <p>
    Organic Pharmaceuticals will be focused on natural supplements for nutritional Deficiencies such as lack of vitamins: A, B, B6, B12, D, E, Potassium, Mg, Zn including products for mineral deficiency and others.
  </p>
  <p>
    Nutrition &amp; wellness will be focusing on
  </p>
  <ul>
    <li>Civilians</li>
    <li>Military members</li>
  </ul>
  <p>
    With products not only offering vitamins and minerals but also nutritional energy bars, cookies, crackers, mixed energy slurry concentrated new custom creation.
  </p>
  <h3>9. Manufacture</h3>
  <p>3D printing farm will be focusing on:</p>
  <ul>
    <li>Application by technology industries in addition with 3D metal printing like aluminum, copper, brass, and other alloys.</li>
    <li>Plastic, nylon, carbon fiber, rubber, flexible parts including product development, consumer goods, prototyping and much more. Bringing innovation to life, simplifying ordering of parts by making it quick and efficient.</li>
    <li>Made for clients such as: Aerospace, nuclear, automotive, electronics, Manufacturing, energy, medical, robotics and many others</li>
  </ul>
  <h3>CO2 laser/ micro jet cut</h3>
  <ul>
    <li>CO2 laser cuts at bigger tolerance, products like metal and nonmetal and fabrics, any type of wood, all types of plastic, acrylic, fiber glass and many others.</li>
    <li>Micro jet will be cutting at micro tolerance and will be including cuts with a water micro jet precision machine.</li>
  </ul>
  <h3>CNC water jet</h3>
  <p>Is used when the tolerance needs to be cut in between CO2 laser and micro jet cut. Same products different manufacturing that does not need Precision cuts at a micro level tolerance, bigger parts, and bigger pieces for research of for prototyping level</p>
  <ul>
    <li>Kitchen products</li>
    <li>Custom products</li>
    <li>Industrial products</li>
    <li>Architectural products</li>
    <li>Engineering products and others.</li>
  </ul>
  <p>Modern furniture, sporting goods, and recreation gear in 2nd part of the road map.</p>
  <h3>10. Logistics</h3>
        <p>Co-packing and national distribution – in the 1st part of the road map Most of the above-mentioned products will be utilized on a co-packing level for a national distribution. Some of the other products will be utilized for national distribution only. International export for business products – in the 2nd part of the roadmap.</p>
          
        </div>
          
          <img src={RoadmapDiagram} alt="Roadmap Diagram" width={700} height={700} />

            
           

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

export default Roadmap;