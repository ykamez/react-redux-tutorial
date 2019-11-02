import { connect } from 'react-redux';
import Game from '../components/Game';
import { setSquare, backTo } from '../actions';

const mapStateToProps = (state) => {
  return {
    history: state.history,
    squares: state.history[state.stepNumber].squares,
    xIsNext: state.xIsNext,
    winner: state.winner
  };
};

const mapDispatchToProps = dispatch =>({
  handleClick: i => dispatch(setSquare(i)),
  jumpTo: move => dispatch(backTo(move))
})

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default GameContainer;
