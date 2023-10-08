import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pages_styles.css";

const Resources = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [height, setHeight] = useState("0px");
  const [padding, setPadding] = useState("0px");

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
      <a style={{ color: 'white', position:' relative', right:'36px'}} href="/" onClick={handleAboutClick}>
        Resources
      </a>
      <ul style={{
          listStyle: 'none',
          textAlign: "left",
          overflow: "hidden",
          height: height,
          padding: padding,
          transition: "height 0.3s ease-out, padding 0.3s ease-out",
        }}>
            <li>
                <Link className="link" to="/designdevelopment">Design Development</Link>
            </li>
           {/*  <li>
                <Link className="link" to="/resorcesgeneral">General operations</Link>
            </li> */}
         {/*    <li>
                <Link className="link" to="/resourcesprojectm">Project Managment</Link>
            </li> */}
            <li>
                <Link className="link" to="/resourcesbusiness">Business Analysis</Link>
            </li>
          </ul>
    </div>
  );
};

export default Resources;



