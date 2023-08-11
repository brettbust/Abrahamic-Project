import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Docs = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToTopRef = useRef(null);

  const [showOptions, setShowOptions] = useState(false);

  const handleMilestoneClick = () => {
    scrollToTop();
    setShowOptions(false);
  };

  return (
    <div>
      <div onClick={() => setShowOptions(!showOptions)}>Docs</div>
      {showOptions && (
       <ul>
       <li>
           <Link className="link" to="/methods" onClick={scrollToTop}>Methods</Link>
       </li>
       <li>
           <Link className="link" to="/quality" onClick={scrollToTop}>Quality Assurence</Link>
       </li>
       <li>
           <Link className="link" to="/businessdevelopment" onClick={scrollToTop}>Business Development</Link>
       </li>
       <li>
           <Link className="link" to="/security" onClick={scrollToTop}>Security</Link>
       </li>
       <li>
           <Link className="link" to="/services" onClick={scrollToTop}>Services</Link>
       </li>
       <li>
           <Link className="link" to="/reliability" onClick={scrollToTop}>Reliability</Link>
       </li>
     </ul>
      )}
    </div>
  );
};

export default Docs;