import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';



import Home from './pages';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//* RUTAS DEL FOOTER - SECCIÓN ABOUT US */

import Founders from './pages/aboutUs/founders';


//* RUTAS DEL FOOTER - SECCIÓN OUR MISSION */

import OurMission from './pages/ourMission/ourMission';

import OurResearch from './pages/ourResearch/ourResearch';

/* import OurMissionInfo from './pages/ourMission/ourMissionInfo'; */

//* RUTAS DEL FOOTER - SECCIÓN OUR MISSION */

/* import OurResearchInfo from './pages/ourResearch/ourResearchInfo'; */

//* RUTAS DEL FOOTER - SECCIÓN About us */

import Executives from './pages/aboutUs/executives';
import Development from './pages/aboutUs/development';
import TechnicalSupport from './pages/aboutUs/technicalSupport';

//* RUTAS DEL FOOTER - SECCIÓN Resources */

import DesignDevelopment from './pages/resources/designdevelopment';

//* RUTAS DEL FOOTER - SECCIÓN BLOG */

import Blog from './pages/blog/blog';
import Forum from './pages/blog/forum';
import SocialChannels from './pages/blog/socialChannels';

//* RUTAS DEL FOOTER - Features */

import Roadmap from './pages/features/roadmap';
import Purpose from './pages/features/purpose';
import Technology from './pages/features/technology';
import Content from './pages/features/content';

//* RUTAS DEL FOOTER - SECCIÓN API*/

import Methods from './pages/api/docs/methods';
import Overwiew from './pages/api/overview';
import QualityAssurance from './pages/api/docs/quality';
import BusinessDevelopment from './pages/api/docs/business_development';
import Security from './pages/api/docs/security';
import SeeAllServices from './pages/api/docs/see_all_services';
import Services from './pages/api/docs/services';
import Reliability from './pages/api/docs/reliability';
import CookiePolicy from './pages/api/cookiePolicy';
import CustomerCare from './pages/api/customerCare';
import Faqs from './pages/api/faqs';
import TransparencyDisclosure from './pages/api/transparencydisclosure';
import PrivacyPolicy from './pages/api/privacyPolicy';
import Status from './pages/api/status';
import JobOpenings from './pages/careers/job_openings';
import LegalAndEthicalFramework from './pages/api/docs/legalandethicalframework';

//* RUTAS DEL FOOTER - Blog*/

import ResearchAndDevelopment from './pages/responsability/researchAndDevelopment';
import Community from './pages/blog/community';
import Milestone from './pages/blog/milestone';
import Publications from './pages/blog/publications';

//* RUTAS DEL FOOTER - SECCIÓN PARTNERS */

import AbrahamicFoundation from './pages/partners/abrahamicFoundation';
import ArtengStudio from './pages/partners/artengstudio';

//Lab

import FinanceAndInvestment from './pages/lab/financeAndInvestment';

import Governance from './pages/lab/governance';

import FineArt from './pages/lab/fineArt';

import ArtVentures from './pages/lab/artVentures';

import NFTS from './pages/lab/nfts'; 

import AuctionHouse from './pages/lab/auctionHouse';

import LabEcosystemFunction from './pages/lab/labEcosystemFunction';

import CryptoEducation from './pages/ecosystem/cryptoeducation';

//responsability

import Zero from './pages/responsability/zero';
import Crdata from './pages/responsability/crdata';
import Stories from './pages/responsability/stories';

//careers

import Careers from './pages/careers/careers';

import Administration from './pages/careers/administration';

import Ecommerce from './pages/careers/ecommerce';

import Marketing from './pages/careers/marketing';

import Management from './pages/careers/management';

import CustomerService from './pages/careers/customer_service';

import Finance from './pages/careers/finance';

import Merchandising from './pages/careers/merchandising';

import Sales from './pages/careers/sales';

import Designcarrer from './pages/careers/designcarrer';

import InformationTecnology from './pages/careers/informationtecnology';

import Sourcing from './pages/careers/sourcing';

import Others from './pages/careers/others';

//Ecossystem

import Welcome from './pages/ecosystem/welcome';
import Integration from './pages/ecosystem/integration';

//Workingprogress

import Workingprogress from './pages/workinprogress';

import Index from './pages/blog/index';
import CodeOfConduct from './pages/api/codeOfConduct';

function App() {

 

  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }



  return (
    <>
      
{/*       <div className="App">
  <nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
    <button onClick={()=>handleClick('en')} >
      English
    </button>
    <button onClick={()=>handleClick('ko')} >
      Korean
    </button>
    <button onClick={()=>handleClick('chi')} >
      Chinese
   </button>
  </nav>

    <p>
      <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3> 
    </p>
 
</div> */}
      
      <Router>
  <Routes>
    <Route path="/" element={<Home />}  />
          <Route path="/founders" element={<Founders />} />
          <Route path="/executives" element={<Executives />} />
          <Route path="/technicalsupport" element={<TechnicalSupport />} />
          <Route path="/development" element={<Workingprogress />} />
          <Route path="/ourmission" element={<OurMission />} />
          <Route path="/ourresearch" element={<OurResearch />} />
          <Route path="/designdevelopment" element={<DesignDevelopment />} />
          <Route path="/resourceseducation" element={<Workingprogress />} />
          <Route path="/resorcesgeneral" element={<Workingprogress />} />
          <Route path="/resourcesprojectm" element={<Workingprogress />} />
          <Route path="/resourcesbusiness" element={<Workingprogress />} />
          <Route path="/apioverview" element={<Overwiew />} />
          <Route path="/termsandconditions" element={<Workingprogress />} />
          <Route path="/cookiepolicy" element={<CookiePolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/socialchannels" element={<SocialChannels />} />


          {/* Features */}

          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/purpose" element={<Purpose />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/content" element={<Content />} />

          {/* RUTAS DEL FOOTER - SECCIÓN API */}

          <Route path="/methods" element={<Methods />} />
          <Route path="/qualityassurance" element={<QualityAssurance />} />
          <Route path="/businessdevelopment" element={<BusinessDevelopment />} />
          <Route path="/security" element={<Security />} />
          <Route path="/seeallservices" element={<SeeAllServices />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reliability" element={<Reliability />} />
          <Route path="/codeofconduct" element={<CodeOfConduct />} />
          <Route path="/customercare" element={<CustomerCare />} />
          <Route path="/status" element={<Workingprogress />} />
          <Route path="/faqs" element={<Faqs />} />
         <Route path="/transparency" element={<TransparencyDisclosure />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/legalandethical" element={<LegalAndEthicalFramework />} />
          
          

          {/* RUTAS DEL FOOTER - SECCIÓN BLOG */}

          <Route path="/index" element={<Index />} />
          <Route path="/researchanddevelopment" element={<ResearchAndDevelopment />} />
          <Route path="/community" element={<Community />} />
          <Route path="/milestone" element={<Milestone />} />
          <Route path="/newsletterandevents" element={<Workingprogress />} />
          <Route path="/publications" element={<Publications />} />

          {/* RUTAS DEL FOOTER - SECCIÓN PARTNERS */}

          <Route path="/abrahamicfoundation" element={<AbrahamicFoundation />} />
          <Route path="/artengstudio" element={<ArtengStudio />} />

          {/* RUTAS DEL FOOTER - SECCIÓN LAB */}

          <Route path="/financeandinvestment" element={<FinanceAndInvestment />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/fineart" element={<FineArt />} />
          <Route path="/artventures" element={<ArtVentures />} />
          <Route path="/nfts" element={<NFTS />} />
          <Route path="/auctionhouse" element={<AuctionHouse />} />
          <Route path="/labecosystemfunction" element={<LabEcosystemFunction />} />
          <Route path="/cryptoeducation" element={<CryptoEducation />} />

          {/* RUTAS DEL FOOTER - SECCIÓN RESPONSABILITY */}

          <Route path="/zero" element={<Zero />} />
          <Route path="/crdata" element={<Crdata />} />
          <Route path="/storiesinfo" element={<Workingprogress />} />

          {/* RUTAS DEL FOOTER - SECCIÓN CAREERS */}

          <Route path="/careers" element={<Careers />} />

          <Route path="/jobopenings" element={<JobOpenings />} />

          <Route path="/administration" element={<Administration />} />

          <Route path="/ecommerce" element={<Ecommerce />} />

          <Route path="/marketing" element={<Marketing />} />

          <Route path="/management" element={<Management />} />

          <Route path="/customerservice" element={<CustomerService />} />

          <Route path="/finance" element={<Finance />} />

          <Route path="/merchandising" element={<Merchandising />} />

          <Route path="/sales" element={<Sales />} />

          <Route path="/design" element={<Designcarrer />} />

          <Route path="/informationtecnology" element={<InformationTecnology />} />

          <Route path="/sourcing" element={<Sourcing />} />

          <Route path="/others" element={<Others />} />

          {/* Ecosystem */}

          <Route path="/welcome" element={<Welcome />} />
          <Route path="/integration" element={<Integration />} />

          {/* botones de governance */}

          <Route path="/workinprogress" element={<Workingprogress />} />



  </Routes>
      </Router>
      


    </>
  );
 /*  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  return (
    <div className="App">
        <nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
          <button onClick={()=>handleClick('en')} >
            English
          </button>
          <button onClick={()=>handleClick('ko')} >
            Korean
          </button>
          <button onClick={()=>handleClick('chi')} >
            Chinese
         </button>
        </nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3> 
          </p>
        </header>
    </div>
  ); */
}

export default App;
