import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import BlogPage from './pages/BlogPage';
// import ShopPage from './pages/ShopPage';
import NotFoundPage from './pages/NotFoundPage';

import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import Aux from './hoc/auxhoc/Auxhoc';
// import BackPic from './images/banner-pic.jpg';
import SideLinks from './components/smSideLinks/sideLinkContainer';




import Loadable from "react-loadable";
import Loading from "./hoc/pageLoader/PageLoader";

const AboutComponent = Loadable({
  loader: () => import("./pages/AboutPage"),
  loading: Loading
});

const BlogComponent = Loadable({
  loader: () => import("./pages/BlogPage"),
  loading: Loading
});

const ShopComponent = Loadable({
  loader: () => import("./pages/ShopPage"),
  loading: Loading
});

const App = () => {
  return (
    <Aux>
      <Helmet>
        <title>{`SMG Creative`}</title>
        <meta property="og:title" content="SMG Creative" />
      </Helmet>
      <SideLinks />
      <Header />
      <Sidebar />
      <Navbar />
      <div className='pageContainer'>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutComponent} />
          <Route path="/blog" component={BlogComponent} />
          <Route path="/shop" component={ShopComponent} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />

      {/* <style jsx global>{`
        html {
          max-width: 1920px;
          margin: 0px auto;
        }
        
        body {
          margin: 0px;
          padding: 0px;
        }
        
        div {
          margin: 0px;
          padding: 0px;
        }
        
        h1, h2, h3, h4, h5, p, span {
          font-family: Poppins, sans-serif;
        }
        
        .content {
          margin: 0px;
          padding: 0px;
        }
           
        #logoLink {
          position: relative !important;
          display: block !important;
          height: 40px !important;
          width: 100px !important;
          margin: 20px auto !important;
        }
                
        .wideLink {
          position: relative;
          display: block;
          height: 20px;
          width: 80px;
          margin: 35px auto;
          padding: 0px;
          font-family: Poppins, sans-serif;
          font-weight: 400;
          font-size: 15px;
          color: black;
          text-align: center;
        }
        
        .wideContainer {
          position: relative;
          width: 100%;
          min-height: 400px;        
          background-image: url(${BackPic}); 
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        
        #sideLinks:hover {
          color: black !important;
          transition: 0.6s !important;
        }
        
        #menuLink:hover {
          text-decoration: underline !important;
        }
        
        .shopMenuContainer {
          border-left: 1px solid transparent !important;
          border-right: 1px solid transparent !important;
          box-sizing: border-box !important;
        }
        
        .shopMenuContainer:hover {
          background-color: white !important;
          border-left: 1px solid rgb(223, 224, 236) !important;
          border-right: 1px solid rgb(223, 224, 236) !important;
        }
        
        .shopMenuContainer:hover .shopMenu {
          display: block;
          z-index: 100;
          background-color: white;
        }
        
        #cart {
          font-family: Poppins, sans-serif !important;
          font-weight: 400 !important;
          color: #626681 !important;
          font-size: 15px !important;
          text-decoration: none !important;
        }
        
        .carouselContainer {
          position: relative;
          display: block;
          margin-top: 40px;
          margin-bottom: 40px;
          overflow: hidden;
        }
    `}</style> */}
    </Aux>
  );
};

export default App;
