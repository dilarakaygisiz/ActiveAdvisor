import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Search } from "@mui/icons-material";
import "./navbar.css";
import "./navbarsec.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function NavbarSec() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar">
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
                <Link to="/" className="navLink">
                  Home
                </Link>
                <Link to="/About" className="navLink">
                  About Us
                </Link>
                <Link to="/Communities" className="navLink">
                  Communities
                </Link>
                <Link to="/Contact" className="navLink">
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
            <div className="dropdown">
            <Dropdown  >
                <Dropdown.Toggle id="dropdown-basic" variant="secondary">
                  Profile
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/Profile">Profile</Dropdown.Item>
                  <Dropdown.Item href="/Homepage">Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            
              <img
                className="user"
                src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
                alt=""
              />
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default NavbarSec;
