import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import ContextProvider from './contextProvider.js'

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'https://webdash-diodoqhqmo.now.sh/graphql',
    headers: {
      authorization: "cc5b60b7-a8fa-489d-84e6-a35d0b5cee6f"
    },
    fetch: fetch
  }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

const csscontext = {
  insertCss: (...styles) => {
    const removeCss = styles.map(x => x._insertCss());
    return () => {
      removeCss.forEach(f => f());
    };
  },
}

ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ContextProvider csscontext={csscontext}>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);