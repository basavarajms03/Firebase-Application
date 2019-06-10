import React, {Component} from "react";

class SignIn extends Component{
    state = {
        email:'',
        password:''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };
    render(){
        return(
            <div>
                <div className="container p-3">
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <div className="alert alert-info text-center font-weight-bold">Sign In</div>
                                </div>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" onChange={this.handleChange} className="form-control" name="email" placeholder="Enter your email"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" onChange={this.handleChange} className="form-control" name="password" placeholder="Enter your password"/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Log In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;