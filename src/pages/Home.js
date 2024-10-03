import React from 'react';
import './Home.css';
import headshot from '../images/headshot.png';
import wavinghand from '../images/waving-hand-50by50.png';

const Home = () => {
  return (
    <div class="outer">
        <div id="header-flex-container">
            <div className="intro-flex-div">
            {/* Self-closing <img> tag and proper className */}
            {/* <img    // !!! maybe add this back or smth to make page more interesting, add a flag saying more UI coming soon
                className="icon-image"
                src={wavinghand}
                alt="Waving hand emoji"
            /> */}
            <div className='text-wrap'>
                <h1 className='typewriter'>
                    Hi, I'm Missy Bridgwater
                </h1>
                <p className="subtext">
                    I am a fourth-year computer science student at
                    <span className="ucla-blue-color"> UCLA</span>. From my research at
                    UCLA's Medical Imaging and Informatics lab to my work as the project
                    manager of UCLA's Engineers Without Borders Nepal Project, I focus on
                    employing technical expertise to effect long-lasting positive change and
                    aid others.
                </p>
                </div>
            </div>
            <div className='img-wrap'>
                <img
                    id="header-image"
                    src={headshot}
                    alt="Missy's Headshot"
                />
            </div>
        </div>
    </div>
  );
};

export default Home;
