var React = require('react');
var NavLink = require('react-router-dom').NavLink;
var PropTypes = require('prop-types');



function Header(props){
    
    return (
        <header 
        className="top-header">
            <img src={require('../static/magazines.png')} width="100" height="100" alt="magazine logo" className="logo" />
            <h1>Flat planning made easy with Flatpack</h1>
            <div className="nav-links">
                <ul className="nav">
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}


module.exports = Header;