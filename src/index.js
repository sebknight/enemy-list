import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './form'

class App extends Component {
    render(){
        return (
            // {/* every component needs a parent div*/}
            <div>
                <div className="jumbotron text-center h-100">
                    <h1 className="display-4">Hit List</h1>
                    <HitList/>
                        <hr/>
                    <Form/>    
                </div>
            </div>
        );
    }
}

class HitList extends Component {
    render(){
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">Enemy 1</li>
                    <li className="list-group-item">Enemy 2</li>
                    <li className="list-group-item">Enemy 3</li>
                </ul>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));