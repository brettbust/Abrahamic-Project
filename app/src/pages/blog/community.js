import React from 'react';
import { Link } from 'react-router-dom';
import underconstruction from '../../images/underconstruction.jpg';

function Community() {
return (
    <div style={{ backgroundColor: 'Black', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

        
        <h1><span style={{
            color: '#4880b3',
            fontSize: '100px',
            fontFamily: 'sans-serif',
        }}>Work in progr</span><span style={{
            color: 'white',
                fontSize: '100px',
                fontFamily: 'sans-serif',
            }}>ess</span></h1>
        
        <h1><span style={{
            color: '#4880b3',
            fontSize: '50px',
            fontFamily: 'sans-serif',
        }}>0%                                            </span><span style={{
            color: 'white',
                fontSize: '50px',
                fontFamily: 'sans-serif',
            }}>100%</span></h1>

     
           
<Link  to="/">
<button style={{
backgroundColor: 'white',
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

export default Community;

