import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";


const Methods = () => {
    const [showOptions, setShowOptions] = useState(false);
    return (
        <div>
            <div onClick={() => setShowOptions(!showOptions)}>Docs</div>
            {/* para que en lugar de un boton sea un enlace lo hago asi */}
        {showOptions && (
          <ul>
            <li>
                <Link className="link" to="/methods">Methods</Link>
            </li>
            <li>
                <Link className="link" to="/quality">Quality Assurence</Link>
            </li>
            <li>
                <Link className="link" to="/businessdevelopment">Business Development</Link>
            </li>
            <li>
                <Link className="link" to="/security">Security</Link>
            </li>
            <li>
                <Link className="link" to="/seeallservices">All Services</Link>
            </li>
            <li>
                <Link className="link" to="/services">Services</Link>
            </li>
            <li>
                <Link className="link" to="/reliability">Reliability</Link>
            </li>
          </ul>
        )}
      </div>
    );
};

export default Methods;