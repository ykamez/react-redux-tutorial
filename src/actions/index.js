export const setSquare = i => ({
  type: 'SET_SQUARE_SYMBOL',
  i
})

export const backTo = move => ({
  type: 'JUMP_TO_MOVE',
  move
})
