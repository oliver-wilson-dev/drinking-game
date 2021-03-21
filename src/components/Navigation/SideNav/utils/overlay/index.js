import styles from './index.module.css';

export const preventScroll = () => {
  document.body.style.top = `-${window.scrollY}px`;
  document.body.classList.add(styles.bodyFixed);
};

export const allowScroll = () => {
  const scrollY = document.body.style.top;
  document.body.classList.remove(styles.bodyFixed);
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
};
