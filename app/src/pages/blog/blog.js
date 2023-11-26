import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import SocialChannels from "./socialChannels";

const Blog = () => {
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
      <div onClick={() => setShowOptions(!showOptions)}>Announcements</div>
      {showOptions && (
        <ul>
          <li>
            <Link className="link" to="/community" onClick={handleMilestoneClick}>
              Community
            </Link>
          </li>
          <li>
            <Link className="link" to="/newsletterandevents" onClick={handleMilestoneClick}>
              Newsletter & Events
            </Link>
          </li>
          <li>
            <Link className="link" to="publications" onClick={handleMilestoneClick}>
              Publications
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              <SocialChannels />
            </Link>
          </li>
          <li>
            <Link className="link" to="/milestone" onClick={handleMilestoneClick}>
              Milestone
            </Link>
          </li>
          <li>
            <Link className="link" to="/forum" onClick={handleMilestoneClick}>
              Forum
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Blog;
