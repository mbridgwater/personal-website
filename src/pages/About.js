import React from 'react';
import './About.css';
import writingHand from '../images/writing-hand-50by50.png';
import uclaLogo from '../images/ucla-mii-logo-300by80.png';
import takedaLogo from '../images/takeda-logo-300by103.png';
import missySawing from '../images/missy-sawing.png';
import missyTeaching from '../images/missy-teaching.jpg';
import nicaraguaKids from '../images/nicaragua-kids-team.jpg';
import nepalSchool from '../images/nepal-school-landscape.jpg';
import Card from '../components/Card';
import WorkCard from '../components/WorkCard';
import { WorkList } from '../helpers/WorkList';
import { VolunteerList } from '../helpers/VolunteerList';
import { Link } from "react-router-dom";


const About = () => {
  return (
    // !!! rename middle-section to something else, clean up css
    <div className="middle-section">
      <div className="mid-section-txt">
        <h2 className="header-text">
          <img className="icon-image" src={writingHand} alt="Writing hand emoji" />
          Work and Experience
        </h2>
        <hr />


        <div id="middle-flex-container">
          {WorkList.map((workItem, key) => {
            return (
            <WorkCard
            id={workItem.id}
            image={workItem.image}
            position={workItem.position}
            name={workItem.name}
            description={workItem.description} 
            role={workItem.role}
            colorClass={workItem.colorClass}
            />
            );
          })}
          {/* <div className="work-flex-div yellow-background-color">
            <h3 className="subheader">Medical Imagining and Informatics</h3>
            <ul className="flex-main-text">
              <li>Presenting to primary care physicians about the utility of simulation modeling to direct and inform chronic kidney disease care</li>
              <li>Osteoporosis
                <ul className="inner-list">
                  <li>Utilize data from a study of over 200,000 subjects and more than 40 years of data to analyze current models predicting low bone density</li>
                  <li>Languages and Tools: Python, Pandas</li>
                </ul>
              </li>
            </ul>
            <img className="flex-box-image" src={uclaLogo} alt="UCLA MII Logo" />
          </div> */}
          {/* <div className="work-flex-div green-background-color">
            <h3 className="subheader">Takeda</h3>
            <ul className="flex-main-text">
              <li>Develop an application to expedite and automate a business process (PowerApps)</li>
              <li>Create a notifications and analytics web application using PowerBI, PowerAutomate, and PowerApps to assist in error-correcting and better understand why errors are occurring</li>
            </ul>
            <img className="flex-box-image" src={takedaLogo} alt="Takeda Logo" />
          </div> */}
        </div>
        <div className="rounded-div blue-background-color">
          <h3 className="subheader">Volunteering</h3>
          <div className="volunteering">
          {VolunteerList.map((volunteerItem, key) => {
            return (
            <Link className="projectLink" key={key} to={volunteerItem.link}>
            <Card
            key={key}
            image={volunteerItem.image}
            position={volunteerItem.position}
            name={volunteerItem.name}
            description={volunteerItem.description} 
            role={volunteerItem.role}
            />
            </Link>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
