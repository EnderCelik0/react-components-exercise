import { FaEnvelope } from 'react-icons/fa';

export default function About() {
  return (
    <section className='about'>
      <h2>Ender Çelik</h2>
      <h5 className='job'>Frontend Developer</h5>
      <h6 className='f5'>1ender.celik1@gmail.com</h6>
      <div className='email'>
        <i>
          <FaEnvelope style={{ widht: '14px', height: '14px' }} />
        </i>
        <a>Email</a>
      </div>

      <div className='section'>
        <h3>About</h3>
        <p>
          I am a Frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className='section'>
        <h3>Interests</h3>
        <p>
          Food Expert, Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </section>
  );
}
