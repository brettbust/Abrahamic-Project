import React from "react";
import {Link } from "react-router-dom";

import { useState } from "react";


const SocialChannels = () => {
    const [showOptions, setShowOptions] = useState(false);
    return (
        <div>
            <div onClick={() => setShowOptions(!showOptions)}>Social Channels</div>
            {/* para que en lugar de un boton sea un enlace lo hago asi */}
        {showOptions && (
          <ul>
            <li>
                <Link className="link" to="/meetup">Meetup</Link>
            </li>
            <li>
                <Link className="link" to="/telegram">Telegram</Link>
            </li>
            <li>
                <Link className="link" to="reddit">Reddit</Link>
            </li>
            <li>
                <Link className="link" to="/weibo">Weibo</Link>
            </li>
            <li>
                <Link className="link" to="/medium">Medium</Link>
            </li>
            <li>
                <Link className="link" to="/line">Line</Link>
            </li>
            <li>
                <Link className="link" to="/github">Git Hub</Link>
            </li>
            <li>
                <Link className="link" to="/twitter">Twitter</Link>
            </li>
            <li>
                <Link className="link" to="/youtube">Youtube</Link>
            </li>
            <li>
                <Link className="link" to="/linkeding">Linkeding</Link>
            </li>
            <li>
                <Link className="link" to="/facebook">Facebook</Link>
            </li>
            <li>
                <Link className="link" to="/discord">Discord</Link>
            </li>
            <li>
                <Link className="link" to="/instagram">Instagram</Link>
            </li>
          </ul>
        )}
      </div>
    );
};

export default SocialChannels;


