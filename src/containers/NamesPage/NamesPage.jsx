import { connect } from 'react-redux';
import NamesPage from '../../components/NamesPage';
import { updatePlayers } from '../../state/actions';
import { getPlayers } from '../../state/selectors';

const mapStateToProps = (state) => ({
  players: getPlayers({ state }),
});

const mapDispatchToProps = (dispatch) => ({
  updatePlayers: ({ players }) => dispatch(updatePlayers({ players }))
});

export default connect(mapStateToProps, mapDispatchToProps)(NamesPage);
