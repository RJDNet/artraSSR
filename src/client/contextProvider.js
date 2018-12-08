import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from './App';

class ContextProvider extends Component {
  static childContextTypes = {
    insertCss: PropTypes.func,
  };

  getChildContext() {
    return { ...this.props.csscontext }
  };

  render() {
    return <App {...this.props} />
  };
};

export default ContextProvider;