let move = 0

export const handleClick = i => ({
  type: 'SET_SQUARE_SYMBOL',
  i
})

export const jumpTo = step => ({
  type: 'JUMP_TO_STEP',
  step
})
