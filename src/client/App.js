import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import a from './styles.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import Aux from './hoc/auxhoc/Auxhoc';
import SideLinks from './components/smSideLinks/sideLinkContainer';




import Loadable from 'react-loadable';
import PageLoader from './hoc/pageLoader/PageLoader';

const AboutComponent = Loadable({
  loader: () => import('./pages/AboutPage'),
  loading: PageLoader
});

const BlogComponent = Loadable({
  loader: () => import('./pages/BlogPage'),
  loading: PageLoader
});

const ShopComponent = Loadable({
  loader: () => import('./pages/ShopPage'),
  loading: PageLoader
});

const GalleryComponent = Loadable({
  loader: () => import('./pages/GalleryPage'),
  loading: PageLoader
});






// Shop Pages
const DrawingComponent = Loadable({
  loader: () => import('./pages/shopPages/DrawingPage'),
  loading: PageLoader
});

const PaintingComponent = Loadable({
  loader: () => import('./pages/shopPages/PaintingPage'),
  loading: PageLoader
});

const DigitalComponent = Loadable({
  loader: () => import('./pages/shopPages/DigitalPage'),
  loading: PageLoader
});

const PhotographyComponent = Loadable({
  loader: () => import('./pages/shopPages/PhotographyPage'),
  loading: PageLoader
});

const App = () => {
  return (
    <Aux>
      <Helmet>
        <title>{`Artra Creative`}</title>
        <meta property='og:title' content='Artra Creative' />
      </Helmet>
      <SideLinks />
      <Header />
      <Sidebar />
      <Navbar />
      <div className='pageContainer'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutComponent} />
          <Route path='/blog' component={BlogComponent} />
          <Route path='/shop' component={ShopComponent} />
          <Route path='/gallery' component={GalleryComponent} />

          <Route path='/drawing' component={DrawingComponent} />
          <Route path='/painting' component={PaintingComponent} />
          <Route path='/digital' component={DigitalComponent} />
          <Route path='/photography' component={PhotographyComponent} />

          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </Aux>
  );
};

export default withStyles(a)(App);
