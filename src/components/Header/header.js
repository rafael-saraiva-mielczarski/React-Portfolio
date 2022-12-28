import './header.scss';
import Container from 'react-bootstrap/Container'
import SideMenu from './side-menu/side-menu';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
    let [title] = useState()
    const location = useLocation()
    if (location.pathname === '/') {
        title = 'Portfolio'
    }
    if (location.pathname === '/aboutme') {
        title = 'About Me'
    }
    if (location.pathname === '/projects') {
        title = 'Projects'
    }
    if (location.pathname === '/contacts') {
        title = 'Contacts'
    }

    return (
        <div className='a'>
            <Container>
                <div className='header'>
                    <p>{title}</p>
                    <div><SideMenu /></div>
                </div>
            </Container>
        </div>
    );
};

export default Header