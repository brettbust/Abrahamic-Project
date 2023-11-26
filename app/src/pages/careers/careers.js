import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pages_styles.css";

const About2 = () => {
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
      <a style={{ color: 'white', position:' relative', right:'54px'}} href="/" onClick={handleAboutClick}>
        Careers
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
                <Link className="link" to="/jobopenings">Job Openings</Link>
            </li>
            <li>
                <Link className="link" to="/administration">Administration</Link>
            </li>
            <li>
                <Link className="link" to="/ecommerce">E-commerce</Link>
            </li>
            <li>
                <Link className="link" to="/marketing">Marketing</Link>
            </li>
            <li>
                <Link className="link" to="/management">Management</Link>
            </li>
            <li>
                <Link className="link" to="/customerservice">Customer Service</Link>
            </li>
            <li>
                <Link className="link" to="/finance">Finance</Link>
            </li>
            <li>
                <Link className="link" to="/merchandising">Merchandising</Link>
            </li>
            <li>
                <Link className="link" to="/sales">Sales</Link>
            </li>
            <li>
                <Link className="link" to="/design">Design</Link>
            </li>
            <li>
                <Link className="link" to="/informationtecnology">Information Tecnology</Link>
            </li>
            <li>
                <Link className="link" to="/sourcing">Sourcing</Link>
            </li>
            <li>
                <Link className="link" to="/others">Others</Link>
            </li>
          </ul>
    </div>
  );
};

export default About2;



