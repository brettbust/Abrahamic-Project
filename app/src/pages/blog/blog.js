import React from "react";
import {Link } from "react-router-dom";

import { useState } from "react";
import SocialChannels from "./socialChannels";


const Blog = () => {
    const [showOptions, setShowOptions] = useState(false);
    return (
        <div>
            <div onClick={() => setShowOptions(!showOptions)}>Announcements</div>
            {/* para que en lugar de un boton sea un enlace lo hago asi */}
        {showOptions && (
          <ul>
            <li>
                <Link className="link" to="/community">Community</Link>
            </li>
            <li>
                <Link className="link" to="/newsletterandevents">News Letter & Events</Link>
            </li>
            <li>
                <Link className="link" to="publications">Publications</Link>
            </li>
            <li>
                <Link className="link" to="/"><SocialChannels/></Link>
            </li>
            <li>
                <Link className="link" to="/milestone">Milestone</Link>
            </li>
            <li>
                <Link className="link" to="/forum">Forum</Link>
            </li>
          </ul>
        )}
      </div>
    );
};

export default Blog;


