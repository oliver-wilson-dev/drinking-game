import { connect } from 'react-redux';
import App from '../../components/App';
import { getTheme } from '../../state/selectors';

const mapStateToProps = (state) => ({
  theme: getTheme({ state }),
});

export default connect(mapStateToProps)(App);
