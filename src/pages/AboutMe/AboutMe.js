import { Container } from "@mui/system"
import './style.scss';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
    
  return (
    <div>
        <Container>
            <div className="experience">
                <Fade left>
                <h1>&lt;Experience&gt;</h1>
                <p>- Software Development Intern @IBM: working on the Front-End with React, Angular and TypeScript, UI using Figma, developed a automated solution in Python, version control with Git, using Scrum and Trello.</p>
                <p>- Side-Projects: working alone and with a friend developing web sites using React for the Front-End and Firebase for the Back-end and Database, using Figma for UI creations and Git for version control.</p>
                </Fade>
            </div>
            <div className="myself">
                <Fade left>
                <h1>&lt;Myself&gt;</h1>
                <p className="myself-text">I'm a 22 year old starting my career in tech, I'm studying Software Development and Analysis @UniRitter. I aspire to be a Front-End Speciliast in the future, I'm  an enthusiast of flexible, fast-paced, agile and diverse work environments. <br />
                Playing videogames with my friends, hanging out with my family and practicing sports are some of my  favorite Hobbies.</p>
                </Fade>
            </div>
        </Container>
    </div>
  )
}

export default AboutMe