import React, { Component } from 'react';

class Form extends Component{
    render(){
        return (
            <form>
                <div className="form-group">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-danger btn-lg btn-block">Add to list</button>
                </div>
            </form>

        )
            
    }
}

export default Form;