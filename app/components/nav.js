var React = require('react');
var NavLink = require('react-router-dom').NavLink;


class Nav extends React.Component {
    render(){
        return (
            <div>
            <ul className="nav">
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
            <hr />
            </div>
        )
    }
}

module.exports = Nav;