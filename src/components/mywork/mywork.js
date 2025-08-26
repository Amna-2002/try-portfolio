import React from 'react';
import './mywork.css';
import Portfolio1 from '../../assets/pp1.jpg';
import Portfolio2 from '../../assets/p2.jpg';
import Portfolio3 from '../../assets/purple.jpg';
import Portfolio4 from '../../assets/p3.jpg';
import Portfolio5 from '../../assets/p4.jpg';
import Portfolio6 from '../../assets/pp2.jpg';


const mywork = () => {
  return (
    <section id='mywork'>
        <span className='myworkTitle'>My Portfolio</span>
        <span className='myworkDescp'>I am a Computer Science student with a strong interest in web, app, and UI/UX design.I enjoy turning ideas into responsive and user-friendly digital experiences.Passionate about blending creativity with technology to deliver impactful solutions.</span>
     <div className='myworkImgs'>
        <img src={Portfolio1} alt='' className='myworkImg'></img>
        <img src={Portfolio2} alt='' className='myworkImg'></img>
        <img src={Portfolio3} alt='' className='myworkImg'></img>
        <img src={Portfolio4} alt='' className='myworkImg'></img>
        <img src={Portfolio5} alt='' className='myworkImg'></img>
        <img src={Portfolio6} alt='' className='myworkImg'></img>
     </div>
     <button className='myworkBtn'>See More</button>
   
    </section>
  )
}

export default mywork