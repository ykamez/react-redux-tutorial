const initialState = {
  history: [{
    squares: Array(9).fill(null),
  }],
  xIsNext: true,
  stepNumber: 0,
}

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SQUARE_SYMBOL':
      return {
        // TODO: かく
      };
    case 'JUMP_TO_STEP':
      return {
        // TODO: かく
      };
    default:
      return state;
  }
}
