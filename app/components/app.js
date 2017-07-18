var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Header = require('./Header');
var Nav = require('./Nav');
var Login = require('./Login');
var Home = require('./Home');
var SignUp = require('./Signup');



class App extends React.Component{
    render(){
        return (
            <Router>
                <div className="container">
                    <Header />
                    {/*<Nav />*/}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={SignUp} />
                        <Route render={()=>{
                            return <h3>Page not found!</h3>}} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App;