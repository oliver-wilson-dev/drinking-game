import connectedComponentHelpers from '../../../testing/connectedComponents';
import ConnectedCookieDisclaimer from './CookieDisclaimer';
import CookieDisclaimer from '../../components/CookieDisclaimer';

import { getMessage } from '../../state/selectors';
import { cookiesAccepted } from '../../state/actions';

jest.mock('../../state/selectors');
jest.mock('../../state/actions');
jest.mock('../../components/CookieDisclaimer', () => () => null);

describe('Connected CookieDisclaimer', () => {
  const mockMessage = Symbol('message');

  const { testProp, testAction } = connectedComponentHelpers(
    {
      connectedComponent: ConnectedCookieDisclaimer,
      component: CookieDisclaimer
    }
  );

  testProp({
    name: 'message',
    selector: getMessage,
    expected: mockMessage
  });

  testAction({
    name: 'cookiesAccepted',
    action: cookiesAccepted
  });
});
