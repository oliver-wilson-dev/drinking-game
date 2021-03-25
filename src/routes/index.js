/* eslint-disable react-hooks/rules-of-hooks */
import useLazyLoadComponent from '../helpers/lazyLoadComponent';

const HomePage = useLazyLoadComponent({ importFn: () => import(/* webpackChunkName: "HomePage" */'../components/HomePage') });
const NamesPage = useLazyLoadComponent({ importFn: () => import(/* webpackChunkName: "NamesPage" */'../containers/NamesPage') });
const LobbyPage = useLazyLoadComponent({ importFn: () => import(/* webpackChunkName: "LobbyPage" */'../containers/LobbyPage') });
const GamePage = useLazyLoadComponent({ importFn: () => import(/* webpackChunkName: "GamePage" */'../components/GamePage') });

const routes = {
  home: {
    route: '/',
    component: HomePage
  },
  names: {
    route: '/names',
    component: NamesPage
  },
  lobby: {
    route: '/lobby',
    component: LobbyPage
  },
  game: {
    route: '/game',
    component: GamePage
  },
};

export default routes;
