import React, {Component} from "react";

class CreateProject extends Component{
    state = {
        title:'',
        content:''
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
                                    <div className="alert alert-info text-center font-weight-bold">Create New Project</div>
                                </div>
                                <div className="form-group">
                                    <label>Title</label>
                                    <input type="text" onChange={this.handleChange} className="form-control" name="title" placeholder="Enter your project title"/>
                                </div>
                                <div className="form-group">
                                    <label>Content</label>
                                    <textarea rows="6" className="form-control" name="content" placeholder="Enter project content here...." onChange={this.handleChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Create Project</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateProject;