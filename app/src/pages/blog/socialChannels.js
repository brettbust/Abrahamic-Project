import React from "react";
import { Link } from "react-router-dom";
import ExternalLink from './ExternalLink'; 

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
       <ExternalLink url="https://www.meetup.com" text="Meetup" />
     </li>
     <li>
       <ExternalLink url="https://web.telegram.org" text="Telegram" />
     </li>
     <li>
       <ExternalLink url="https://www.reddit.com" text="Reddit" />
     </li>
     <li>
       <ExternalLink url="https://www.weibo.com" text="Weibo" />
     </li>
     <li>
       <ExternalLink url="https://medium.com" text="Medium" />
     </li>
     <li>
       <ExternalLink url="https://line.me" text="Line" />
     </li>
     <li>
       <ExternalLink url="https://github.com" text="GitHub" />
     </li>
     <li>
       <ExternalLink url="https://twitter.com" text="Twitter" />
     </li>
     <li>
       <ExternalLink url="https://www.youtube.com" text="YouTube" />
     </li>
     <li>
       <ExternalLink url="https://www.linkedin.com" text="LinkedIn" />
     </li>
     <li>
       <ExternalLink url="https://www.facebook.com" text="Facebook" />
     </li>
     <li>
       <ExternalLink url="https://www.discord.com" text="Discord" />
     </li>
     <li>
       <ExternalLink url="https://www.instagram.com" text="Instagram" />
     </li>
   </ul>
   
        )}
      </div>
    );
};

export default SocialChannels;


