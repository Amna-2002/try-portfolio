import React from 'react';
import './skills.css' ;
import UIDesign from '../../assets/ui-ux.png';
import WebDesign from '../../assets/web-design.png';
import AppDesign from '../../assets/layout.png';

const skills = () => {
  return (
    <section id='skills'>
        <span className='skillsTitle'>What I Do</span>
        <span className='skillDescp'>Skilled in web development using React, JavaScript, HTML, and CSS, with a keen eye for responsive design.Passionate about creating user-friendly digital experiences and collaborating effectively in teams.</span>
        <div className='skillBars'>
         <div className='skillBar'>
            <img src={UIDesign} alt='UIDesign' className='skillBarImg'></img>
            <div className='skillBarText'></div>
            <h2>UI/UX Design</h2>
            <p>Designing intuitive and user-friendly interfaces for better digital experiences.</p>
         </div>


         <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign' className='skillBarImg'></img>
            <div className='skillBarText'></div>
            <h2>Web Design</h2>
            <p>Building responsive and dynamic web applications with modern technologies.</p>
         </div>


         <div className='skillBar'>
            <img src={AppDesign} alt='AppDesign' className='skillBarImg'></img>
            <div className='skillBarText'></div>
            <h2>App Design</h2>
            <p>Designing user-friendly mobile app interfaces with focus on modern aesthetics.</p>
         </div>

        </div>
    </section>

  )
}

export default skills