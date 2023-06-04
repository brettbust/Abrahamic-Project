import React from 'react';
import { Link } from 'react-router-dom';
import underconstruction from '../../images/underconstruction.jpg';

function ArtengStudioInfo() {
return (
        <div style={{ backgroundColor: '#101522', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ color: '#eed104', textAlign: 'center' }}>Art Engineering Studio</h1>

                

                <img src={underconstruction} alt="Under Construction" width={550} height={350} />
                <h2 style={{ color: '#eed104', textAlign:'center' }}>It's created to help artists to certify their works.<br/>Under Construction, open to the public soon.<br/>
                </h2>
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

export default ArtengStudioInfo;

