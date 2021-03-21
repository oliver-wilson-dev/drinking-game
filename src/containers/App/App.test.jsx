import connectedComponentHelpers from '../../../testing/connectedComponents';
import ConnectedApp from './App';
import App from '../../components/App';

import { getTheme } from '../../state/selectors';

jest.mock('../../state/selectors');
jest.mock('../../state/actions');
jest.mock('../../components/App', () => () => null);

describe('Connected App', () => {
  const mockTheme = Symbol('theme');

  const { testProp } = connectedComponentHelpers(
    {
      connectedComponent: ConnectedApp,
      component: App
    }
  );

  testProp({
    name: 'theme',
    selector: getTheme,
    expected: mockTheme
  });
});
