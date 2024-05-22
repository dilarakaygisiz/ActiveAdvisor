import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Search } from "@mui/icons-material";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { housesData } from "../../data"; // Import your data file

function NavbarComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query.length > 0) {
      const matchedSuggestions = housesData.filter((house) =>
        house.name.toLowerCase().includes(query) ||
        house.description.toLowerCase().includes(query)
      );
      setSuggestions(matchedSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const lowercasedQuery = searchQuery.toLowerCase();
    const matchedProperty = housesData.find((house) =>
      house.name.toLowerCase().includes(lowercasedQuery) ||
      house.description.toLowerCase().includes(lowercasedQuery)
    );

    if (matchedProperty) {
      navigate(`/details/${matchedProperty.id}`);
    } else {
      alert("No matching property found.");
    }
  };

  const handleSuggestionClick = (id) => {
    navigate(`/details/${id}`);
    setSearchQuery("");
    setSuggestions([]);
  };

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
                <Link to="/" className="navLink">Home</Link>
                <Link to="/About" className="navLink">About Us</Link>
                <Link to="/Communities" className="navLink">Communities | SportsFields</Link>
                <Link to="/Contact" className="navLink">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </div>

          <div className="navbarRight">
            <form className="searchBar" onSubmit={handleSearch}>
              <Search />
              <input
                placeholder="Search.."
                className="searchInput"
                value={searchQuery}
                onChange={handleInputChange}
              />
            </form>
            {suggestions.length > 0 && (
              <ul className="suggestionsList">
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion.id)}
                    className="suggestionItem"
                  >
                    {suggestion.name}
                  </li>
                ))}
              </ul>
            )}
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
