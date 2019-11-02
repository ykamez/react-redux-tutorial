import { connect } from 'react-redux';
import Game from '../components/Game';
import { setSquare } from '../actions';

const mapStateToProps = (state) => {
  return {
    squares: state.history[state.history.length - 1].squares,
    xIsNext: state.xIsNext,
    winner: state.winner
  };
};

const mapDispatchToProps = dispatch =>({
  handleClick: i => dispatch(setSquare(i))
})

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default GameContainer;
