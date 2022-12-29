import './side-menu.scss';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

    function OffCanvasExample({ name, ...props }) {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
              <MenuIcon fontSize='large' className="menu-icon" onClick={handleShow} />
              <Offcanvas style={{ backgroundColor: 'rgba(30, 30, 30, 0.8)', width: '200px'}} show={show} onHide={handleClose} {...props}>
                  <Offcanvas.Header>
                    <Offcanvas.Title style={{ color: '#0bd3d3', fontSize: '25px' }}>Portfolio</Offcanvas.Title>
                    <CloseIcon fontSize='large' style={{color: '#0bd3d3', cursor: 'pointer'}} onClick={handleClose} />
                  </Offcanvas.Header>
                  <hr  style={{ backgroundColor: 'white', margin: '6px 0'}}/>
                  <Offcanvas.Body>
                    <p className="side-items"><Link to="/" className='link' onClick={handleClose}>Home</Link></p>
                    <p className="side-items"><Link to="/aboutme" className='link' onClick={handleClose}>About Me</Link></p>
                    <p className="side-items"><Link to="/projects" className='link' onClick={handleClose}>Projects</Link></p>
                    <p className="side-items"><Link to="/contacts" className='link' onClick={handleClose}>Contacts</Link></p>
                  </Offcanvas.Body>
              </Offcanvas>
          </>
        );
      }
      
      function Example() {
        return (
          <>
            {['end'].map((placement, idx) => (
              <OffCanvasExample key={idx} placement={placement} name={placement} />
            ))}
          </>
        );
      }

      export default Example