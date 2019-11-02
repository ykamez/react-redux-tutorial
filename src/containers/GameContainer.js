import { connect } from 'react-redux';
import Game from '../components/Game';
// TODO(ykamez): action を追加する

const mapStateToProps = state => { state }
const mapDispatchToProps = dispatch => {
  return {
    onClick: i => {
      dispatch(squareClick(i))
    }
  }
}
const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default GameContainer;
