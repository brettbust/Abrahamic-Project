import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjfour, homeObjfive, homeObjsix } from '../components/InfoSection/Data';
import { animateScroll } from 'react-scroll';



const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  const [selectedSection, setSelectedSection] = useState('home');
  

  return <>
  
      
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
    <HeroSection/>
      <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo} />
    <InfoSection {...homeObjThree} />
    <InfoSection {...homeObjfour} />
    <InfoSection {...homeObjfive} />
    <InfoSection {...homeObjsix} />
    
      {/* <Projects/> */}

    {selectedSection === 'home' && (
        <Footer handleSelectSection={setSelectedSection} />
      )}
  
    

  </>;
};

export default Home;
