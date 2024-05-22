import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Search } from "@mui/icons-material";
import "./navbar.css";
import { Link } from "react-router-dom";




function NavbarComponent() {

  return (
      <>
      <Navbar collapseOnSelect expand="lg" className="navbar" data-bs-theme="dark">
        <div className="navbarContainer">
          <div className="navbarLeft">
            <Navbar.Brand href="#home">
              <img
                className="navbarLogo"
                src="/activeadvisor.jpg"
                alt="Active Advisor Logo"
                width={70}
              />
            </Navbar.Brand>
          </div>

          <div className="navbarCenter">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
              <Link to="/" className="navLink" >
                Home
              </Link>
              <Link to="/About" className="navLink" >
                About Us
              </Link>
              <Link to="/Communities" className="navLink" >
                Communities | SportsFields
              </Link>
              <Link to="/Contact" className="navLink" >
                Contact
              </Link>
            </Nav>
        </Navbar.Collapse>
            
          </div>

          <div className="navbarRight">
            <div className="searchBar">
              <Search />
              <input placeholder="Search.." className="searchInput" />
            </div>
          </div>
          <div className="navbarButtons">
            <button id="btn1"><Link className="buttonLinks" to="/LogIn">Log In</Link></button>
            <button id="btn2"><Link className="buttonLinks" to="/SignUp">Sign Up</Link></button>
          </div>
        </div>
      </Navbar>
    </>
    
  );
}

export default NavbarComponent;
