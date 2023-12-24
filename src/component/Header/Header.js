import {useState} from 'react'
import Headerlink from './Headerlink'

import logo from '../../images/icons/logo-sm.png'
import cart from '../../images/icons/cart-sm.png'
import search from '../../images/icons/search-icon-sm.png'
  import {Link} from 'react-router-dom'
  import  'bootstrap/dist/css/bootstrap.min.css'
import  'bootstrap/dist/js/bootstrap.min.js'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
  <Navbar expanded={expanded} expand="lg" className="nav-wrapper fixed-top">
      <Container className="container" >
        <Navbar.Brand className="navbar-brand mx-auto" ><Link to="/"
            ><img src={logo}/></Link></Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
            <Nav.Link onClick={() => setExpanded(false)}><Headerlink link={"Mac"} linkname={"Mac"}/></Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}><Headerlink link={"Iphone"} linkname={"Iphone"}/></Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}><Headerlink link={"Ipad"} linkname={"Ipad"}/></Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}> <Headerlink link={"Watch"} linkname={"Watch"}/></Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}><Headerlink link={"Tv"} linkname={"Tv"}/></Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}><Headerlink link={"Music"} linkname={"Music"}/></Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}><Headerlink link={"Support"} linkname={"Support"}/></Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}> 
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="#"
                  ><img src={search}
                /></Link>
              </li>
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}>
            <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="#"
                  ><img src={cart}
                /></Link>
              </li>
            </Nav.Link>
            </ul>
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
