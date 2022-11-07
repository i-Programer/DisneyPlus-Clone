import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ContextProvider } from './context/ContextProvider';
import { MovieContextProvider } from './context/movieContext/MovieContext';
import { ListContextProvider } from './context/listContext/ListContext';
import { UserContextProvider } from './context/userContext/UserContext';
import { AuthContextProvider } from './context/authContext/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <UserContextProvider>
            <AuthContextProvider>
              <App />
            </AuthContextProvider>
          </UserContextProvider>
        </ListContextProvider>
      </MovieContextProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
