import React from 'react';
import { Link } from 'react-router-dom';
import underconstruction from '../../images/underconstruction.jpg';

function OurResearchInfo() {
return (
        <div style={{ backgroundColor: '#101522', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ color: '#eed104' }}>Our Research</h1>
        <img src={underconstruction} alt="Under Construction" width={550} height={350} />
                <h2 style={{ color: '#eed104', margin: 20 }}>Work in progress, process it being developed, we will open soon.</h2>
<Link  to="/">
<button style={{
backgroundColor: '#eed104',
color: '#262625',
padding: '10px 20px',
borderRadius: '5px',
fontSize: '15px',
textDecoration: 'none',
border: 'none',
outline: 'none',
cursor: 'pointer'
}}>Go Back to Home</button>
                </Link>
                <br/>
        </div>
        );
        
}

export default OurResearchInfo;



