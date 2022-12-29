import { useState } from "react";

import "./style.scss";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

import ShopRecipe from "../../assets/ShopRecipe.png";
import OldPorfolio from "../../assets/OldPortfolio.png";
import PortfolioImg from "../../assets/PortfolioImg.png";
import CalculatorImg from "../../assets/calculator.png";
import WebDev from "../../assets/WebDev.png";

import CalculatorGif from "../../assets/gifs/Calculator.gif";
import PortfolioGif from "../../assets/gifs/Portfolio.gif";
import ShopRecipeGif from "../../assets/gifs/ShopRecipe.gif";
import OldPortfolioGif from "../../assets/gifs/OldPortfolio.gif";
import WebDevProject from "../../assets/gifs/WebDevProject.gif";

import GitHub from "../../assets/icons/GitHub.png";
import Angular from "../../assets/icons/angular.png";
import Firebase from "../../assets/icons/firebase.png";
import ReactIcon from "../../assets/icons/React.png";
import HTML from "../../assets/icons/html.png";
import CSS from "../../assets/icons/css.png";
import JavaScript from "../../assets/icons/javascript.png";
import TypeScript from "../../assets/icons/typescript.png";
import Python from "../../assets/icons/python.png";
import Django from "../../assets/icons/django.jpg";
import Postgre from "../../assets/icons/postgre.png";
import Figma from "../../assets/icons/figma.png";
import Bootstrap from "../../assets/icons/Bootstrap.png";
import { Fade } from "react-reveal";


const Projects = () => {
    const [projects] = useState([
        {
            title: "Portfolio",
            description:
            "The page you are in is my most recent project! Updating as new thing are being built",
            icons: [ReactIcon, JavaScript, Figma, Bootstrap],
            image: PortfolioImg,
            gif: PortfolioGif,
            githubLink: "https://github.com/rafael-saraiva-mielczarski/React-Portfolio",
        },
        {
            title: "Shop Recipe",
            description:
                "My final project that I created from an Angular course, used it to practice my Front-End skills",
            icons: [Angular, TypeScript, Firebase],
            image: ShopRecipe,
            gif: ShopRecipeGif,
            githubLink:
                "https://github.com/rafael-saraiva-mielczarski/Recipes-Shopping-List",
        },
        {
            title: "College Enrollment",
            description: "My final project for my college's web development course. Focused on the MVT, a fullstack project ",
            icons: [Python, Django, Postgre, JavaScript],
            image: WebDev,
            gif: WebDevProject,
            githubLink: "https://github.com/rafael-saraiva-mielczarski/Aula-DevWeb",
        },
        {
            title: "Calculator",
            description:
                "Created to practice my JavaScript, HTML and CSS skills and learnings",
            icons: [HTML, CSS, JavaScript],
            image: CalculatorImg,
            gif: CalculatorGif,
            githubLink: "https://github.com/rafael-saraiva-mielczarski/Calculadora",
        },
        {
            title: "First Porfolio",
            description: "This was invented by me to practice my HTML and CSS skills. A static page, simple but useful",
            icons: [HTML, CSS],
            image: OldPorfolio,
            gif: OldPortfolioGif,
            githubLink: "https://github.com/rafael-saraiva-mielczarski/Portfolio",
        },
    ]);

    return (
        <div>
            <Container>
                <Fade left>
                <p className="intro-text"> Here are some of my most relevant projects! Clicking the GitHub icon on each card will redirect you to the GitHub repositorie, where you can check the Code and the READ.me to better understand the project, the technologies used and it's purpose. </p>
                </Fade>
                <div className="projects">
                {projects.map((project, index) => (
                    <Fade bottom>
                    <Card className="card" key={index}>
                        <Card.Img 
                        variant="top" 
                        src={project.image} 
                        alt="project image and gifs" 
                        className="card-img" 
                        onMouseEnter={e => (e.currentTarget.src = project.gif)}
                        onMouseLeave={e => (e.currentTarget.src = project.image)}
                        />
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">{project.title}</Card.Title>
                            <hr style={{ color: "white" }} />
                            <Card.Text className="card-text">
                                {project.description}
                            </Card.Text>
                            <div className="card-icons">
                                {project.icons.map((icon, index) => (
                                <div key={index}>
                                    <img src={icon} alt="project icons" />
                                </div>
                                ))}
                                <a href={project.githubLink}>
                                    <img 
                                    src={GitHub} 
                                    alt="github redirect" 
                                    className="github-icon"
                                    />
                                </a>
                            </div>
                        </Card.Body>
                    </Card>
                    </Fade>
                ))}
                </div>
            </Container>
        </div>
    );
};

export default Projects;
