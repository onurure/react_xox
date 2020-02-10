import React, { Component } from 'react';
import User from './User';

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            board: Array(9).fill(''),
            xIs: true,
            winner: '',
            startGame: false,
            userX: '',
            userO: '',
            userXWin: 0,
            userOWin: 0
        }
    }

    putSign(index){
        let changedBoard = this.state.board;
        if(changedBoard[index] === '' && this.state.winner === '' && this.state.startGame){
            let sign = this.state.xIs ? "X" : "O"
            changedBoard[index] = sign;
            this.setState({
                board: changedBoard,
                xIs: this.state.xIs ? false : true
            }, () => { this.checkWin()});
        }
    }

    checkWin(){
        let checkLines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for (let index = 0; index < checkLines.length; index++) {
            const [a, b, c] = checkLines[index];
            if(this.state.board[a] !== '' && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]){

                let winX = this.state.userXWin;
                let winO = this.state.userOWin;
                if(this.state.xIs){
                    winO++;
                }else{
                    winX++;
                }
                this.setState({
                    winner: this.state.xIs ? 'O' : 'X',
                    userOWin: winO,
                    userXWin: winX
                }, () => {console.log(this.state)})
            }
        }
    }

    update(value){
        this.setState({
            startGame: value.startGame,
            userO: value.userO,
            userX: value.userX
        });
    }

    reset(){
        let resetBoard = Array(9).fill('');
        this.setState({
            board: resetBoard,
            winner: '',
            xIs: true
        })
    }

    render() {

        const square = this.state.board.map((square, index) => <div className="square" key={index} onClick={()=>this.putSign(index)}>{square}</div>);
        return (
            <div>
                <div><User data={this.update.bind(this)}/></div>
                <div className="board">
                    {square}
                </div>
                <h4>Score Board</h4>
                <div>{this.state.userX}: {this.state.userXWin}</div>
                <div>{this.state.userO}: {this.state.userOWin}</div>
                <button onClick={()=>this.reset()}>NEW ROUND</button>
            </div>
        );
    }
}

export default Board;