import React, { Component } from 'react';

class Form extends Component{

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" ref="newEnemy" value={this.props.editingValue} onChange={this.onChange}></input>
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-danger btn-lg">{this.props.buttonText}</button>
                </div>
            </form>

        )     
    }

    onSubmit(e){
        e.preventDefault();
        var newEnemy = this.refs.newEnemy.value.trim();
        if(!newEnemy){
            alert('YOU will be my enemy if you keep that up');
            return;
        }

        if (this.props.editID === 0){
            this.props.addNew(newEnemy);

        } else {
            var updatingEnemy = {
                id: this.props.editID,
                enemy: newEnemy
            }
            this.props.updateEnemy(updatingEnemy);
        }



        this.refs.newEnemy.value = '';
    }

    onChange(e){
        this.props.changeText(e.target.value);
    }
}

export default Form;