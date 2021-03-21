import { connect } from 'react-redux';
import CookieDisclaimer from '../../components/CookieDisclaimer';
import { getMessage } from '../../state/selectors';
import { cookiesAccepted } from '../../state/actions';

const mapStateToProps = (state) => ({
  message: getMessage({ state }),
});

const mapDispatchToProps = (dispatch) => ({
  cookiesAccepted: () => dispatch(cookiesAccepted())
});

export default connect(mapStateToProps, mapDispatchToProps)(CookieDisclaimer);
