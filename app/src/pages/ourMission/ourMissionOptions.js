import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pages_styles.css";

const OurMissionOptions = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [height, setHeight] = useState("0px");
  const [padding, setPadding] = useState("0px");

  const handleLinkClick = () => {
    setShowOptions(false);
    window.scrollTo(0, 0);
  }

  const handleAboutClick = (event) => {
    event.preventDefault();
    setShowOptions(!showOptions);
    if (!showOptions) {
      setHeight("auto");
      setPadding("10px");
    } else {
      setHeight("0px");
      setPadding("0px");
    }
  };

  return (
    <div>
      <a style={{ color: 'white', position:' relative', left:'0px', bottom:'40px', textDecoration: 'none'}} href="/" onClick={handleAboutClick}>
        Our Mission
      </a>
      <ul style={{
          listStyle: 'none',
          textAlign: "left",
          overflow: "hidden",
          height: height,
          padding: padding,
        transition: "height 0.3s ease-out, padding 0.3s ease-out",
        position: ' relative', left: '0px', bottom: '70px',
        
          
        }}>
            <li>
                <Link className="link" to="/ourmission">Our Mission/Social Impact</Link>
            </li>
          </ul>
    </div>
  );
};

export default OurMissionOptions;
