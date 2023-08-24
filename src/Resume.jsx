import React from 'react';
import profilepic from './pic1.png'; // Updated profile picture path
import './Resume.css';

const Resume = () => {
  const data = {
    name: "Smit shah",
    about: "dip CE student.",
    contact: "+91 8362829742",
    address: "Limbdi",
    email: "smit@gmail.com",
    education: [
      {
        degree: "Diploma",
        graduationYear: 2021,
        univercity: "GTU"
      }
    ],
    experience: [
      {
        tofrom: "1-jan-2022 to 30-nov-2024",
        company: "CISCO",
        position: "Cyber Security Analyst"
      },
      {
        tofrom: "1-jan-2024 to 30-nov-2025",
        company: "Amazon",
        position: "Network Security Engineer"
      }
    ],
    skills: ["C++", "Python", "Java", "HTML", "CSS", "PHP", "REACT"]
  };

  return (
    <div className="resume-container">
    <div className="profile-picture-container">
      <img src={profilepic} alt="Profile" className="profile-picture" />
    </div>
    <br />
    <div className='resume-section'>
    <div className="resume-content">
      <h1>{data.name}</h1>
      <p>about: {data.about}</p>
      <p>contact: {data.contact}</p>
      <p>address: {data.address}</p>
      <p>email: {data.email}</p>


        {/* Education */}
          <h2>Education</h2>
          <ul>
            {data.education.map((item, index) => (
              <li key={index}>
                <strong>{item.univercity}</strong> - {item.degree}, {item.graduationYear}
              </li>
            ))}
          </ul>

        {/* Experience */}
          <h2>Experience</h2>
          <ul>
            {data.experience.map((item, index) => (
              <li key={index}>
                <strong>{item.company}</strong>
                <p>{item.tofrom}</p>
                <p>{item.position}</p>
              </li>
            ))}
          </ul>
       

        {/* Skills */}
          <h2>Skills</h2>
          <ul>
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          </div>
      </div>
    </div>
  );
};

export default Resume;