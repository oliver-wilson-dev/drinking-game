import useLazyLoadComponent from '../helpers/lazyLoadComponent';

const HomePage = useLazyLoadComponent({ importFn: () => import(/* webpackChunkName: "HomePage" */'../components/HomePage') });
const AboutPage = useLazyLoadComponent({ importFn: () => import(/* webpackChunkName: "AboutPage" */'../components/AboutPage') });
const ContactPage = useLazyLoadComponent({ importFn: () => import(/* webpackChunkName: "ContactPage" */'../components/ContactPage') });

const routes = {
  home: {
    route: '/',
    component: HomePage
  },
  about: {
    route: '/about',
    component: AboutPage
  },
  contact: {
    route: '/contact',
    component: ContactPage
  },
};

export default routes;
