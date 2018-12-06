import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'https://webdash-qabhkulwny.now.sh/graphql',
    headers: {
      authorization: "cc5b60b7-a8fa-489d-84e6-a35d0b5cee6f"
    },
    fetch: fetch
  }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);