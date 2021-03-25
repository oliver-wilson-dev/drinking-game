import { connect } from 'react-redux';
import LobbyPage from '../../components/LobbyPage';
import { getPlayers } from '../../state/selectors';

const mapStateToProps = (state) => ({
  players: getPlayers({ state }),
});

export default connect(mapStateToProps)(LobbyPage);
