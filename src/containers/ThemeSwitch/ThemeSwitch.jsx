import { connect } from 'react-redux';
import ThemeSwitch from '../../components/ThemeSwitch';
import { toggleTheme } from '../../state/actions';
import { getTheme } from '../../state/selectors';

const mapStateToProps = (state) => ({
  theme: getTheme({ state }),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTheme: () => dispatch(toggleTheme())
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);
