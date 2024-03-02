import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from './context/SearchContext';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RecentSearches from './pages/RecentSearches';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/recentsearch",
    element: <RecentSearches />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);