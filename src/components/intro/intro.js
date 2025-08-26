import React from 'react';
import './intro.css';
import bg from "../../assets/bgimage.png"
import {Link} from 'react-scroll';
import btnImg from "../../assets/hiring.png";

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introduction'>
            <span className="Hello">Hello,</span>
            <span className='introText'>I am <span className='introName'>Amna</span> <br/>Website Designer</span>
            <p className='introPara'>I am a creative and detail-oriented Web Designer with a passion for crafting visually <br></br>appealing and user-friendly websites.</p>
           <Link to="contact" smooth={true} duration={500}> <button className="btn"> <img src={btnImg} alt="Hire Me" className="btnImg" />Hire Me
  </button>
</Link>
        

        <img src={bg} alt='Profile' className='bg'></img>
        </div>
    </section>
  )
}

export default Intro
