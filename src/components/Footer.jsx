import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='icons'>
        <a>
          {' '}
          <FaTwitterSquare className='react-icons' />
        </a>
        <a>
          {' '}
          <FaFacebookSquare className='react-icons' />
        </a>
        <a>
          {' '}
          <FaInstagramSquare className='react-icons' />
        </a>
        <a>
          {' '}
          <FaLinkedin className='react-icons' />
        </a>
        <a>
          {' '}
          <FaGithubSquare className='react-icons' />
        </a>
      </div>
    </footer>
  );
}
