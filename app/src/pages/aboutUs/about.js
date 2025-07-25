import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pages_styles.css";

const About = () => {
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
      <a style={{ color: 'white', position:' relative', left:'0px', bottom:'0px', textDecoration: 'none'}} href="/" onClick={handleAboutClick}>
        About      </a>
      <ul style={{
          listStyle: 'none',
          textAlign: "left",
          overflow: "hidden",
          height: height,
          padding: padding,
        transition: "height 0.3s ease-out, padding 0.3s ease-out",
        position: ' relative', left: '0px', bottom: '30px',
 
        }}>
         {/*    <li >
                <Link className="link" to="/founders">Founders</Link>
            </li> */}
          {/*   <li>
                <Link className="link" to="/executives">Executives</Link>
            </li> */}
          {/*   <li>
                <Link className="link" to="/research">Research</Link>
            </li> */}
      
            <li>
                <Link className="link" to="/welcome">Welcome</Link>
        </li>
        <li>
                <Link className="link" to="/development">Development</Link>
            </li>
            {/* <li>
                <Link className="link" to="/technicalsupport">Technical Support</Link>
            </li> */}
          </ul>
    </div>
  );
};

export default About;



