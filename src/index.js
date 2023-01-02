import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import UserStore from './store/UserStore';
import ProductStore from './store/ProductStore';

export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Context.Provider
              value={{
                  user: new UserStore(),
                  product: new ProductStore()
              }}
          >
              <App/>
          </Context.Provider>
      </BrowserRouter>
  </React.StrictMode>
);