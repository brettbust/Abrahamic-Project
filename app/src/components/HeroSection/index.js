import React from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP} from './HeroElements';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next'
import { useState } from 'react';
import ia_presentation from '../../images/ai_presentation.png';

const HeroSection = () => {

  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  const [showVideo, setShowVideo] = useState(false);

  const mostrarVideoHandler = () => {
    setShowVideo(true);
  }

  const cerrarVideoHandler = () => {
    setShowVideo(false);
  }


  const handleImageClick = () => {
    setShowVideo(false);
  };

  const handleVideoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.paused) {
      e.currentTarget.play();
    } else {
      e.currentTarget.pause();
    }
  };

  return (

    <>
      
      <style>
      {`
        video::-webkit-media-controls {
          display:none !important;
        }
      `}
    </style>
      
      <HeroContainer>
  <HeroBg>
  <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
  </HeroBg>
  <HeroContent>
      <HeroH1 style={{position: 'relative', top: '150px'}}>{t('Main.1')}</HeroH1>
      <HeroP style={{position: 'relative', top: '150px'}}>
        We provide a set of technological solutions with the aim of making your company or business grow..
      </HeroP>
      <div style={{position: 'relative', left: '702px', bottom: '71px'}}>
        <img 
              src={ia_presentation} 
          style={{ width: '118px', height: '320px'}} 
          onClick={() => setShowVideo(!showVideo)}
        />
        {showVideo && (
          <video
            id="video"
            src="https://talks-api-results.d-id.com/auth0%7C6425ff341e6006b657ea8bd3%2Ftlk_WvBynoxDFGa7rBOh4sPr4%2Fimage.mp4"
            style={{ position: 'absolute', top: 170, right: 40, width: '218px', height: '150px' }}
            autoPlay
            controlsList="nodownload"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (e.currentTarget.paused) {
                e.currentTarget.play();
              } else {
                e.currentTarget.pause();
              }
            }}
          />
        )}
      </div>
    </HeroContent>




      </HeroContainer>
      
      

{/* <p>
<h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3> 
</p> */}
</>
  
  )
};

export default HeroSection;
