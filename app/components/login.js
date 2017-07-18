var React = require('react');


class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event){
        event.preventDefault();
    }

    render(){
        return (
            <div>
                <h3>Login</h3>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div className="login-form-row">
                            <label htmlFor="username">Username/Email:</label>
                            <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange}/>
                        </div>
                        <div className="login-form-row">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        <div className="form-btn-row">
                            <span>&nbsp;</span>
                            <button type="submit" className="btn-form">Log in</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

module.exports = Login;