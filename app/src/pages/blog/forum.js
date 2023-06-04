import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";


const Forum = () => {
    const [showOptions, setShowOptions] = useState(false);
    return (
        <div>
            <div onClick={() => setShowOptions(!showOptions)}>Our Mission</div>
            {/* para que en lugar de un boton sea un enlace lo hago asi */}
        {showOptions && (
          <ul>
            <li>
                <Link to="/ourmission">Our Mission/Social Impact</Link>
            </li>
          </ul>
        )}
      </div>
    );
};

export default Forum;