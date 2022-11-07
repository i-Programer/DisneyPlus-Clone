import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { WatchlistContextProvider } from './context/watchlistContext/WatchlistContext';

import './i18n.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WatchlistContextProvider>
        <App />
      </WatchlistContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);