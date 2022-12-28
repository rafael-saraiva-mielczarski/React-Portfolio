import './style.scss';
import Container from 'react-bootstrap/esm/Container';
import whatsapp from '../../assets/icons/whats.png';
import github from '../../assets/icons/GitHub.png';
import linkedin from '../../assets/icons/linkedin.png';
import gmail from '../../assets/icons/gmail.png';
import Fade from 'react-reveal/Fade';

const Contacts = () => {
  return (
    <div>
        <Container>
            <Fade left><p className='contact-text'>Get in touch and check out what I've been doing on my socials!<br/> If you want to contact me the best way is via email or LinkedIn</p></Fade>
            <div className='icons'>
                <Fade left>
                <a href="https://www.linkedin.com/in/rafael-saraiva-mielczarski/"><img src={linkedin}  className='img' alt="linkedin" /></a>
                <a href="https://github.com/rafael-saraiva-mielczarski"><img src={github}  className='img' alt="github" /></a>
                </Fade>
                <Fade right>
                <a href="https://contate.me/rafael.saraiva"><img src={whatsapp}  className='img' alt="whatsapp" /></a>
                <a href="mailto:rafael.saraivam1@gmail.com"><img src={gmail}  className='img' alt="gmail" /></a>
                </Fade>
            </div>
            <Fade right><p className='contact-text'> Porto Alegre, Brazil </p></Fade>
        </Container>
    </div>
  )
}

export default Contacts