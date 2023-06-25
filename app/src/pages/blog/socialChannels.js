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
            <a className="link" href="https://www.reddit.com" target="_blank" rel="noopener noreferrer">Reddit</a>
          </li>
          <li>
            <a className="link" href="https://www.weibo.com" target="_blank" rel="noopener noreferrer">Weibo</a>
          </li>
          <li>
            <a className="link" href="https://medium.com" target="_blank" rel="noopener noreferrer">Medium</a>
          </li>
          <li>
            <a className="link" href="https://line.me" target="_blank" rel="noopener noreferrer">Line</a>
          </li>
          <li>
            <a className="link" href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a className="link" href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
          <li>
            <a className="link" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </li>
          <li>
            <a className="link" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a className="link" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li>
            <a className="link" href="https://www.discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
          </li>
          <li>
            <a className="link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
        </ul>
        )}
      </div>
    );
};

export default SocialChannels;


