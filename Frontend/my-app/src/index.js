import react from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Provider } from 'react-redux'
import { store } from './redux/store';

const createroot = ReactDOM.createRoot(document.getElementById('root'))
createroot.render(
  <Provider store={store}>
  <RouterProvider router ={router} />
  </Provider>
)
