var React = require('react');


class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value
        });
    }
    handleSubmit(event){
        event.preventDefault();
    }

    render(){
        return (
            <div>
                <h3>Sign Up</h3>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div className="signup-form-row">
                            <label htmlFor="firstName">Firstname:</label>
                            <input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                        </div>
                        <div className="signup-form-row">
                            <label htmlFor="lastName">Lastname:</label>
                            <input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                        </div>
                        <div className="signup-form-row">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="signup-form-row">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password"  value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div className="form-btn-row">
                            <span>&nbsp;</span>
                            <button type="submit" className="btn-form">Sign Up</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

module.exports = SignUp;