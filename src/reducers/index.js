const initialState = {
  history: [{
    squares: Array(9).fill(null),
  }],
  xIsNext: true,
  winner: null,
  stepNumber: 0,
}

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SQUARE_SYMBOL':
      return handleClick(state, action.i);
    case 'JUMP_TO_MOVE':
      return jumpTo(state, action.move);
    default:
      return state;
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function handleClick(state, i){
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length-1];
  const squares = current.squares.slice();
  if (calculateWinner(squares) || squares[i]) {
    return (
      {
        ...state
      }
    );
  }
  squares[i] = state.xIsNext ? 'X' : 'O';
  return (
    {
      history: history.concat([{ squares: squares }]),
      xIsNext: !state.xIsNext,
      winner: calculateWinner(squares),
      stepNumber: history.length,
    }
  );
}

function jumpTo(state, move){
  const history = state.history.slice(0, move + 1);
  return (
    {
      ...state,
      history: history,
      stepNumber: move
    }
  );
}
