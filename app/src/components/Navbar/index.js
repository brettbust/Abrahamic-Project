import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import Logo from '../../images/abrah.png';
import About2 from '../../pages/aboutUs/about2';
import Careers from '../../pages/careers/careers';
import { useRef } from 'react';
import Resources from '../../pages/resources/resources';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next'
import whitepaperPDF from './pdf/whitepaper.pdf';



const Navbar = ({ toggle }) => {


  /* Languages */
  
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = whitepaperPDF;
    link.download = 'whitepaper.pdf';
    link.click();
  };
  


  const [mostrarSubMenu, setMostrarSubMenu] = useState(false);
  const [mostrarSubMenu2, setMostrarSubMenu2] = useState(false);
  const [mostrarSubMenu3, setMostrarSubMenu3] = useState(false);
  const [mostrarSubMenu4, setMostrarSubMenu4] = useState(false);
  const [mostrarSubMenu5, setMostrarSubMenu5] = useState(false);
  const [mostrarSubMenu6, setMostrarSubMenu6] = useState(false);
  const [mostrarSubMenu7, setMostrarSubMenu7] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  //English

  const [mostrarVideo, setMostrarVideo] = useState(false);


  //Japanese

  const [mostrarVideoJapones, setMostrarVideoJapones] = useState(false);

  const mostrarVideoHandlerJapones = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setMostrarVideo(false); // ocultar video en inglés si se estaba reproduciendo
    setMostrarVideoJapones(true); // mostrar video en japonés
  };
  
  const ocultarVideoHandlerJapones = () => {
    setMostrarVideoJapones(false); // ocultar video en japonés al salir del enlace
  };


  const videoRef = useRef(null);
const videoJaponesRef = useRef(null);

const mostrarVideoHandler = () => {
  if (videoJaponesRef.current) {
    videoJaponesRef.current.pause();
  }
  setMostrarVideo(true);
  setMostrarVideoJapones(false);
};


  const mostrarSubMenuHandler = () => {
    setMostrarSubMenu(true);
  };

  const ocultarSubMenuHandler = () => {
    setMostrarSubMenu(false);
  };

  const mostrarSubMenuHandler2 = () => {
    setMostrarSubMenu2(true);
  };

  const ocultarSubMenuHandler2 = () => {
    setMostrarSubMenu2(false);
  };

  const mostrarSubMenuHandler3 = () => {
    setMostrarSubMenu3(true);
  };

  const ocultarSubMenuHandler3 = () => {
    setMostrarSubMenu3(false);
  };

  const mostrarSubMenuHandler4 = () => {
    setMostrarSubMenu4(true);
  };

  const ocultarSubMenuHandler4 = () => {
    setMostrarSubMenu4(false);
  };

  const mostrarSubMenuHandler5 = () => {
    setMostrarSubMenu5(true);
  };

  const ocultarSubMenuHandler5 = () => {
    setMostrarSubMenu5(false);
  };

  const mostrarSubMenuHandler6 = () => {
    setMostrarSubMenu6(true);
  };

  const ocultarSubMenuHandler6 = () => {
    setMostrarSubMenu6(false);
  };

  const mostrarSubMenuHandler7 = () => {
    setMostrarSubMenu7(true);
  };

  const ocultarSubMenuHandler7 = () => {
    setMostrarSubMenu7(false);
    setMostrarVideo(false); // ocultar video en inglés al salir del menú
    setMostrarVideoJapones(false); // ocultar video en japonés al salir del menú
  };
  

  function ImagenesLista({ imagenes }) {
    return (
      <ul>
        {imagenes.map((imagen, index) => (
          <li key={index}>
            <img src={imagen.src} alt={imagen.alt} />
          </li>
        ))}
      </ul>
    );
  }

  const imagenes = [
    { src: 'ai_presentation.png', alt: 'Imagen 1', width: '200px', height: '200px' }
  ];

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  
  

  return (
      <>
    <Nav scrollNav={scrollNav}> 
    <NavbarContainer>
    <NavLogo to="/" onClick={toggleHome}><img src={Logo} alt="Abrahamic" width="250" height="250" /></NavLogo>
    <MobileIcon onClick={toggle}>
    <FaBars />
    </MobileIcon>
    <NavMenu>

    <NavItem onMouseEnter={mostrarSubMenuHandler} onMouseLeave={ocultarSubMenuHandler}>
      <NavLinks to="quienesSomos"
        smooth={true}
        duration={400}
        spy={true}
        exact='true'
        offset={50}
      >
        Information
      </NavLinks>
      {mostrarSubMenu && (
        <ul style={{ 
          position: 'absolute', 
          top: '80px', 
          left: '448px', 
                  backgroundColor: '#041F26',
          padding: '10px',
          listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
                  alignItems: 'flex-start',
                  fontSize: '19px',
        }}>
          <li><a style={{ color: '#fff', }} href=""><About2/></a></li>
          <li><a style={{ color: '#fff' }} href="/ourmission">Our Mission</a></li>
          <li><a style={{ color: '#fff' }} href="/ourresearch">Our Research</a></li>
          <li><a style={{ color: '#fff' }} href="#"><Careers/></a></li>
          <li><a style={{ color: '#fff' }} href="#"><Resources/></a></li>
        </ul>
              )}
            </NavItem>
            
            <NavItem onMouseEnter={mostrarSubMenuHandler2} onMouseLeave={ocultarSubMenuHandler2}>
        <NavLinks
          to="features"
          smooth={true}
          duration={400}
          spy={true}
          exact='true'
          offset={80}
        >
          Features
        </NavLinks>
        {mostrarSubMenu2 && (
          <ul
            style={{
              position: 'absolute',
              top: '80px',
              left: '600px',
              backgroundColor: '#041F26',
              padding: '10px',
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
                    alignItems: 'flex-start',
                    fontSize: '19px',
            }}
          >
            <li><a style={{ color: '#fff' }} href="roadmap">Roadmap</a></li>
            <li><a style={{ color: '#fff' }} href="purpose">Purpose</a></li>
            <li><a style={{ color: '#fff' }} href="technology">Technology</a></li>
            <li><a style={{ color: '#fff' }} href="content">Content</a></li>
          </ul>
        )}
            </NavItem>
            
            <NavItem onMouseEnter={mostrarSubMenuHandler3} onMouseLeave={ocultarSubMenuHandler3}>
        <NavLinks
          to="responsability"
          smooth={true}
          duration={400}
          spy={true}
          exact='true'
          offset={80}
        >
          Responsability
        </NavLinks>
        {mostrarSubMenu3 && (
          <ul
            style={{
              position: 'absolute',
              top: '80px',
              left: '720px',
              backgroundColor: '#041F26',
              padding: '10px',
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
                    alignItems: 'flex-start',
                    fontSize: '19px',
            }}
          >
            <li><a style={{ color: '#fff' }} href="zero">Zero</a></li>
            <li><a style={{ color: '#fff' }} href="crdata">CR Data</a></li>
            <li><a style={{ color: '#fff' }} href="storiesinfo">Stories</a></li>
           {/*  <li><a style={{ color: '#fff' }} href="indexinfo">Index</a></li> */}
            <li><a style={{ color: '#fff' }} href="researchanddevelopment">Research and Development</a></li>
          </ul>
        )}
            </NavItem>
            
            <NavItem onMouseEnter={mostrarSubMenuHandler4} onMouseLeave={ocultarSubMenuHandler4}>
        <NavLinks
          to="ecosystem"
          smooth={true}
          duration={400}
          spy={true}
          exact='true'
          offset={80}
        >
          Ecosystem
        </NavLinks>
        {mostrarSubMenu4 && (
          <ul
            style={{
              position: 'absolute',
              top: '80px',
              left: '895px',
              backgroundColor: '#041F26',
              padding: '10px',
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
                    alignItems: 'flex-start',
                    fontSize: '19px',
            }}
          >
            {/* <li><a style={{ color: '#fff' }} href="welcome">Welcome</a></li> */}
            <li><a style={{ color: '#fff' }} href="cryptoeducation">Crypto Education</a></li>
            <li><a style={{ color: '#fff' }} href="#" onClick={handleDownload}>Whitepaper</a></li>
            <li><a style={{ color: '#fff' }} href="integration">Integration</a></li>
          </ul>
        )}
            </NavItem>
            
            <NavItem onMouseEnter={mostrarSubMenuHandler5} onMouseLeave={ocultarSubMenuHandler5}>
        <NavLinks
          to="lab"
          smooth={true}
          duration={400}
          spy={true}
          exact='true'
          offset={80}
        >
          Lab
        </NavLinks>
        {mostrarSubMenu5 && (
          <ul
            style={{
              position: 'absolute',
              top: '80px',
              left: '1030px',
              backgroundColor: '#041F26',
              padding: '10px',
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
                    alignItems: 'flex-start',
                    fontSize: '19px',
            }}
                >
            <li><a style={{ color: '#fff' }} href="auctionhouse">Auction House</a></li>      
            <li><a style={{ color: '#fff' }} href="artventures">Art Venture</a></li>
            <li><a style={{ color: '#fff' }} href="FinanceAndInvestment">Finance and Investment</a></li>
            <li><a style={{ color: '#fff' }} href="fineart">Fine ART</a></li>
            <li><a style={{ color: '#fff' }} href="governance">Governance</a></li>
            <li><a style={{ color: '#fff' }} href="labecosystemfunction">Lab Ecosystem Function</a></li>
            <li><a style={{ color: '#fff' }} href="nfts">NFT'S</a></li>
          </ul>
        )}
            </NavItem>
            
            <NavItem onMouseEnter={mostrarSubMenuHandler6} onMouseLeave={ocultarSubMenuHandler6}>
        <NavLinks
          to="partners"
          smooth={true}
          duration={400}
          spy={true}
          exact='true'
          offset={80}
        >
          Partners
        </NavLinks>
        {mostrarSubMenu6 && (
          <ul
            style={{
              position: 'absolute',
              top: '80px',
              left: '1100px',
              backgroundColor: '#041F26',
              padding: '10px',
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
                    alignItems: 'flex-start',
                    fontSize: '19px',
            }}
          >
            <li><a style={{ color: '#fff' }} href="abrahamicfoundation">Abrahamic Foundation</a></li>
            <li><a style={{ color: '#fff' }} href="artengstudio">Artengstudio</a></li>
          </ul>
        )}
            </NavItem>
            
            {/* <NavItem onMouseEnter={mostrarSubMenuHandler7} onMouseLeave={ocultarSubMenuHandler7}>
  <NavLinks
    to="languages"
    smooth={true}
    duration={400}
    spy={true}
    exact='true'
    offset={80}
  >
    Languages
  </NavLinks>
  {mostrarSubMenu7 && (
    <ul
      style={{
        position: 'absolute',
        top: '80px',
        left: '1220px',
        backgroundColor: '#041F26',
        padding: '10px',
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
                    alignItems: 'flex-start',
                    fontSize: '19px',
      }}
    >
      <li>
        <a style={{ color: '#fff' }} href="#" onClick={()=>handleClick('en')}>English</a>
        {mostrarVideo && (
          <video
            ref={videoRef}
            src="https://talks-api-results.d-id.com/auth0%7C6425ff341e6006b657ea8bd3%2Ftlk_WvBynoxDFGa7rBOh4sPr4%2Fimage.mp4"
            type="video/mp4"
            autoPlay
            style={{
              position: 'fixed',
              top: 280,
              left: 980,
              width: '15%',
              height: '45%',
              backgroundColor: '#041F26',
              zIndex: 9999
            }}
          />
        )}
      </li>
      <li>
        <a style={{ color: '#fff' }} href="#" onClick={()=>handleClick('ko')} >Korean</a>
        {mostrarVideoJapones && (
          <video
            ref={videoJaponesRef}
            src="https://talks-api-results.d-id.com/auth0%7C64388d5eae1dd5a7069c203d%2Ftlk_qVWMOsuvw_HbkgiffEOFQ%2Fimage.mp4"
            type="video/mp4"
            autoPlay
            style={{
              position: 'fixed',
              top: 270,
              left: 990,
              width: '20%',
              height: '50%',
              backgroundColor: '#041F26',
              zIndex: 9999,
            }}
          />
        )}
      </li>
    </ul>
  )}
</NavItem> */}



    </NavMenu>
    </NavbarContainer>
    </Nav>
    </>
  );
  
};

export default Navbar;
