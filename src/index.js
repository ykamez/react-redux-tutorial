import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Squareは自身のstateを持たないので、関数コンポーネントとして書くことができる
// this.props ではなく、 props と書くのも特徴的。
// 自分自身のstate を持たないシンプルなコンポーネントはこのように、関数コンポーネントを使っていくべきだし、そのようなものが多い状態が好ましいとykamezは考えた。
function Square(props) {
  return (
    <button
      // 親から渡されたonClickというメソッドをただ実行し、親に伝播する
      className="square" onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }
  handleClick(i){
    // NOTE: slice はコピーを作成する
    // イミュータブル性を保つために、このようにしている
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
