import React from 'react';
import './contact.css';
import Image1 from '../../assets/microsoft.png';
import Image2 from '../../assets/f1.png';
import Image3 from '../../assets/linkedin.png';
import Image4 from '../../assets/instagram.png';
import Image5 from '../../assets/twitter.png';
import Image6 from '../../assets/facebook.png';
import Image7 from '../../assets/youtube.png';

const contact = () => {
  return (
    <section id='contactPage'>
    <div id='clients'>

<h1 className='contactPageTitle'>My Client</h1>
<p className='clientDescp'>I have worked with clients to design and develop user-friendly web and app solutions.My focus is on understanding their needs and delivering creative, impactful results.</p>

<div className='clientImgs'>

    <img src={Image1} alt='clients' className='clientImg'></img>
    <img src={Image2} alt='clients' className='clientImg'></img>
    <img src={Image3} alt='clients' className='clientImg'></img>

</div>
    </div>
        <div id='contact'>
<h1 className='contactPageTitle'>Contact Me</h1>
<span className='contactDescp'>Feel free to reach out for collaborations, projects, or any inquiries.</span>

<form className='contactForm'>
    <input type='text' className='name' placeholder='Your Name'></input>
        <input type='email' className='email' placeholder='Your Email'></input>

 <textarea className='msg'name='message' rows={5} placeholder='Your Message'></textarea>
 <button type='submit' value='Send'   className='submitBtn'>Submit</button>

 </form>
    <div className='links'>

  <a href="https://www.instagram.com/amna_tariq_11/" target="_blank" rel="noopener noreferrer">
    <img src={Image4} alt='instagram' className='link' />
  </a>

  <a href="https://twitter.com/tumhara_username" target="_blank" rel="noopener noreferrer">
    <img src={Image5} alt='twitter' className='link' />
  </a>

  <a href="https://www.facebook.com/amna.tariq.2002/" target="_blank" rel="noopener noreferrer">
    <img src={Image6} alt='facebook' className='link' />
  </a>

  <a href="https://www.youtube.com/@amnatariq7065" target="_blank" rel="noopener noreferrer">
    <img src={Image7} alt='youtube' className='link' />
  </a>
    </div>
 


        </div>
    </section>
  )
}

export default contact