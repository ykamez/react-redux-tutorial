import React from 'react';
import '../index.css';

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

export default Square;