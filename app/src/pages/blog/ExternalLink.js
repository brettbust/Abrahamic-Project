
import React from 'react';
  
const ExternalLink = ({ url, text }) => {
    const handleRedirect = () => {
      window.open(url, '_blank');
    };

  return (
    <a className="link" onClick={handleRedirect} href={url} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
};

export default ExternalLink;
