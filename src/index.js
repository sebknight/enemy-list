import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './form'

class App extends Component {
    constructor(props){
        super();
        this.state = {
            list: [
                {
                    id: 1,
                    enemy: 'Spiders'
                },
                {
                    id: 2,
                    enemy: 'Wet socks'
                },
                {
                    id: 3,
                    enemy: 'The black mould colony in my apartment'
                }
            ],
            text: 'Welcome to the enemy zone',
            jumboClass: 'jumbotron text-center',
            jumboBlood: false,
            editID: 0,
            buttonText: 'Add New Enemy',
            editingValue: ''
        }        
        this.becomeEnemies = this.becomeEnemies.bind(this); //this binds the event to this constructor which willl bind it to the component
        this.buryTheHatchet = this.buryTheHatchet.bind(this);
        this.addNewEnemyToList = this.addNewEnemyToList.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }


    render(){
        return (
            // {/* every component needs a parent div*/}
            <div className="App">
                <div className={this.state.jumboClass}>
                    <h1 className="display-4">Hit List</h1>
                    <h3>{this.state.text}</h3>
                    <HitList 
                    list={this.state.list}
                    editEnemy={this.handleEdit}
                    deleteEnemy={this.handleDelete}
                    />
                        <hr/>
                    <Form 
                    //parses every state from app into form
                    {...this.state}
                    addNew={this.addNewEnemyToList}
                    updateEnemy={this.handleUpdate}
                    changeText={this.handleChangeText}
                    
                    />   
                    <button onClick={this.becomeEnemies}>Click here to become my enemy</button>
                    <button onClick={this.buryTheHatchet}>Click here so I can move on</button>
                </div>
            </div>
        );
    }
    becomeEnemies(e){
        e.preventDefault();
        this.setState({
            text: 'why would you do something like that??',
            jumboBlood: !this.state.jumboBlood
        
        });
            if(this.state.jumboBlood === false){
                this.setState({
                    jumboClass: 'jumbotron text-center jumboBlood'
                });
            }
        }

    buryTheHatchet(e){
        e.preventDefault();
        this.setState({
            text: 'well ok i guess i forgive you',
            jumboBlood: !this.state.jumboBlood
      
        });
          if (this.state.jumboBlood === true) {
              this.setState({
                  jumboClass: 'jumbotron text-center'
              });
            }
    }

    addNewEnemyToList(enemy){
        var newEnemy = {
            id: this.state.list.length + 1,
            enemy: enemy
        }
        this.setState({list: this.state.list.concat(newEnemy)});
    }

    handleEdit(enemyToEdit){
        this.setState({
            editID: enemyToEdit.id,
            buttonText: 'Edit enemy',
            editingValue: enemyToEdit.enemy

        });        
    }

    handleDelete(enemyToDelete){
        var allEnemies = this.state.list;
        for (var i = 0; i < allEnemies.length; i++) {
            if (allEnemies[i].id === enemyToDelete.id) {
                allEnemies.splice(i, 1);
                break;
            }
        }
        for (var j = 0; j < allEnemies.length; j++) {
            allEnemies[j].id = j + 1;
        }
        this.setState({ list: allEnemies });
  
    }

    handleUpdate(updatedEnemy){
        var allEnemies = this.state.list;
        for (var i = 0; i < allEnemies.length; i++) {
            if (allEnemies[i].id === updatedEnemy.id){
                allEnemies[i].enemy = updatedEnemy.enemy;
                break;
            }
        }
        this.setState({
            list: allEnemies,
            editID: 0,
            buttonText: 'Add New Enemy',
            editingValue: ''
        });
    }

    handleChangeText(inputValue){
        this.setState({
            editingValue: inputValue,
        });
    }
}

class HitList extends Component {
    render(){
        return (
            <div>
                <ul className="list-group">
                {
                    this.props.list.map(enemyname => {
                            return <li key={enemyname.id} enemyname={enemyname} className="list-group-item">{enemyname.enemy}<span className="controls"><span className="edit"><button className="btn btn-light" onClick={this.edit.bind(this, enemyname)}>Edit</button></span><span className="delete"><button className="btn btn-dark" onClick={this.delete.bind (this, enemyname)}>Delete</button></span></span></li>
                    })
                }
                </ul>
            </div>
        )
    }
    edit(enemyname){
        console.log("editing");
        this.props.editEnemy(enemyname); 
    }

    delete(enemyname){
        console.log("deleting");
        this.props.deleteEnemy(enemyname);  
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));