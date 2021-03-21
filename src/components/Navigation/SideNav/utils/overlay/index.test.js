import { allowScroll, preventScroll } from '.';
import styles from './index.module.css';

describe('overlayScroll', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('allowScroll', () => {
    describe('when the user had not scrolled before opening the modal', () => {
      it('should scroll the user to the scrollY position', () => {
        const mockScrollY = undefined;
        document.body.style.top = mockScrollY;

        Object.defineProperty(document.body.style, 'top', { value: mockScrollY, writable: true });

        allowScroll();

        expect(window.scrollTo.mock.calls[0][1]).toBe(-0);
      });

      it('should remove the correct class', () => {
        document.body.classList.add(styles.bodyFixed);

        allowScroll();

        expect(Object.values(document.body.classList)).not.toContain(styles.bodyFixed);
      });
    });

    describe('when the user had scrolled before opening the modal', () => {
      it('should scroll the user to the scrollY position', () => {
        const mockScrollY = 500;
        window.scrollY = mockScrollY;

        Object.defineProperty(document.body.style, 'top', { value: mockScrollY, writable: true });

        allowScroll();

        expect(window.scrollTo.mock.calls[0][1]).toBe(-mockScrollY);
      });

      it('should remove the correct class', () => {
        document.body.classList.add(styles.bodyFixed);

        allowScroll();

        expect(Object.values(document.body.classList)).not.toContain(styles.bodyFixed);
      });
    });
  });

  describe('preventScroll', () => {
    it('should add the required class to the body', () => {
      preventScroll();

      expect(Object.values(document.body.classList)).toContain(styles.bodyFixed);
    });
  });
});
