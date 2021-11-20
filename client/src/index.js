import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/* import * as serviceWorker from './serviceWorker'; */
import dotenv from 'dotenv';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
dotenv.config();


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

/* serviceWorker.unregister(); */