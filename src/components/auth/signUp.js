import React,{Component} from 'react';

export class SignUp extends Component{
    state = {
        fname:'',
        lname:'',
        email:'',
        password:''
    };

    handleChange = (e) => {
        this.setState({
           [e.target.name]:e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return(
            <div className="container p-3">
                <div className="col-md-6">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" onChange={this.handleChange} className="form-control" name="fname" placeholder="Enter your first name"/>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" onChange={this.handleChange} className="form-control" name="lname" placeholder="Enter your last name"/>
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
                            <button type="submit" className="btn btn-primary btn-block">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
