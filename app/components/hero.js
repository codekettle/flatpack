var React = require('react');
var Link = require('react-router-dom').Link;


class Hero extends React.Component{
    render(){
        return (
            <div>
                <section className="hero-container">
                    <h3>Introducing flatpack..</h3>
                    <p>A free online tool for magazine flatplanning</p>
                    <Link className="btn" to="/signup">Get Started!</Link>  
                </section>
                <hr />
            </div>
        )
    }
}

module.exports = Hero;