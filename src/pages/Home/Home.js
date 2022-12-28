import Container from 'react-bootstrap/esm/Container';
import './Home.scss';
import DevGif from '../../assets/gifs/Dev.gif';
import Fade from 'react-reveal/Fade';

const Home = () => {
  
    return (
    <div>
        <Container>
            <div className='home'>
                <section className='text-desc'>
                    <Fade left>
                        <h1 className='hello'> &lt;Hi, I'm Rafael, a Front End Developer&gt; </h1>
                        <p className='description'>This is my personal website, where you can get to know me better. You can see what I've been working on recently, my experience and all my social media links and personal contacts. Feel free to explore!!</p>
                    </Fade>
                </section>
                <section className='gif'>
                    <Fade right>
                        <img src={DevGif} alt="coding_gif" className='img-gif' />
                    </Fade>
                </section>
            </div>
        </Container>
    </div>
  )
}

export default Home