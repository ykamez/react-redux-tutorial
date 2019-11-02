import { connect } from 'react-redux';
import Game from '../components/Game';
import { handleClick, jumpTo } from '../actions';

const mapStateToProps = state => { state }
const mapDispatchToProps = dispatch =>({
  handleClick: i => dispatch(handleClick(i)),
  jumpTo: step => dispatch(jumpTo(step))
})

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default GameContainer;
