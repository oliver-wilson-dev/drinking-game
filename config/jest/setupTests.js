import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

Object.defineProperty(window, 'scrollTo', { value: jest.fn(() => {}), writable: true });
