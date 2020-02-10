import React, { Component } from 'react';

class User extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            startGame: false,
            userO: '',
            userX: '',
            winUserX: 0,
            winUserY: 0
        }
    }

    startGame(){
        if(this.state.userO !== undefined && this.state.userX !== undefined){
            this.setState({
                startGame: true
            }, () => { this.props.data(this.state) });
        }else{
            alert('isim yazın');
        }
    }

    handleChange(e){
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <label htmlFor="">User X</label>
                <input type="text" name="userX" value={this.state.userX} readOnly={this.state.startGame ? true : false} className="margin"  onChange={(e) => this.handleChange(e)}/>
                <label htmlFor="">User O</label>
                <input type="text" name="userO" value={this.state.userO} readOnly={this.state.startGame ? true : false} className="margin"  onChange={(e) => this.handleChange(e)}/>
                <button onClick={() => this.startGame()} className={this.state.startGame ? 'hidden' : ''}>Start Game</button>
            </div>
        );
    }
}

export default User;