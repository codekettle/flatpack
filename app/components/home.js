var React = require('react');
var Hero = require('./Hero');
var Intro = require('./Intro');


class Home extends React.Component{
    render(){
        return (
            <div>
                <Hero />
                <Intro />
            </div>
        )
    }
}

module.exports = Home;
