import connectedComponentHelpers from '../../../testing/connectedComponents';
import ConnectedThemeSwitch from './ThemeSwitch';
import ThemeSwitch from '../../components/ThemeSwitch';

import { getTheme } from '../../state/selectors';
import { toggleTheme } from '../../state/actions';

jest.mock('../../state/selectors');
jest.mock('../../state/actions');
jest.mock('../../components/ThemeSwitch', () => () => null);

describe('Connected ThemeSwitch', () => {
  const mockTheme = Symbol('theme');

  const { testProp, testAction } = connectedComponentHelpers(
    {
      connectedComponent: ConnectedThemeSwitch,
      component: ThemeSwitch
    }
  );

  testProp({
    name: 'theme',
    selector: getTheme,
    expected: mockTheme
  });

  testAction({
    name: 'toggleTheme',
    action: toggleTheme
  });
});
