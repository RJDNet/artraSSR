import 'babel-polyfill';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { flush } from 'styled-jsx/server';
import { flushToHTML } from 'styled-jsx/server';
import ContextProvider from './client/contextProvider';
import cors from 'cors';

import express from 'express';
import compression from 'compression';

import App from './client/App';

// Apollo Imports
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

const app = express();

app.use(compression());
app.use(express.static('public'));

app.get('*', async (req, res) => {
  const context = {};

  // try {
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: 'https://cmtwebdash.herokuapp.com/graphql',
      withCredentials: true,
      headers: {
        authorization: "cc5b60b7-a8fa-489d-84e6-a35d0b5cee6f"
      },
      fetchOptions: {
        mode: 'no-cors',
      },
      fetch: fetch
    }),
    cache
  });

  const css = new Set();
  const csscontext = {
    insertCss: (...styles) =>
      styles.forEach(style => css.add(style._getCss()))
  };

  const component = await (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <ContextProvider csscontext={csscontext}>
          <App />
        </ContextProvider>
      </StaticRouter>
    </ApolloProvider>
  );

  function Html({ content, state, helmet, styles }) {
    return (
      <html>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        <head>

          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>

          <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MGZiNDY0MjEtZTQxYy00ZTgxLTgzNzAtYTcxOWFjNjg3YzVjNjM2NzgyMzI5MTIxNjM3MTM5" id="snipcart"></script>

          <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />

          <style type="text/css">${[...css].join('')}</style>
          <link href="https://fonts.googleapis.com/css?family=Poppins:400,700" rel="stylesheet" />
          {styles}
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
          <script charSet="UTF-8" src="bundle.js" />
          <script dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};`,
          }} />
        </body>
      </html>
    );
  }

  getDataFromTree(component).then(() => {
    const content = ReactDOMServer.renderToString(component);
    const initialState = client.cache.extract();
    const helmet = Helmet.renderStatic();
    const styles = flushToHTML();
    const html = <Html content={content} state={initialState} helmet={helmet} style={styles} />;


    res.status(200);
    res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`);
    res.end();
  });

  //   const helmet = Helmet.renderStatic();
  //   const styles = flush();

  //   const html = (<html>
  //     <head>
  //       {/* <link href="https://fonts.googleapis.com/css?family=Poppins:400,700" rel="stylesheet" /> */}
  //       {helmet.title.toComponent()}
  //       {helmet.meta.toComponent()}
  //       {styles}
  //     </head>
  //     <body >
  //       <div id="root">
  //         {content}
  //       </div>
  //       <script
  //         charSet="UTF-8"
  //         dangerouslySetInnerHTML={{
  //           __html: `window.__APOLLO_STATE__=${JSON.stringify(initialState)};`,
  //         }}
  //       />
  //       <script charSet="UTF-8" src="bundle.js" />
  //     </body>
  //   </html>)

  //   res.status(200);
  //   res.send(
  //     ReactDOMServer.renderToString(html)
  //   );
  // } catch (e) {
  //   res.status(404);
  // }
  // res.end();
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});

{/* <link href="https://fonts.googleapis.com/css?family=Poppins:400,700" rel="stylesheet" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MGZiNDY0MjEtZTQxYy00ZTgxLTgzNzAtYTcxOWFjNjg3YzVjNjM2NzgyMzI5MTIxNjM3MTM5" id="snipcart"></script>
<link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />  */}