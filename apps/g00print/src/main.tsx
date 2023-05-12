import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app/app';
import store from './app/store/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
    <StrictMode>
      <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
    </StrictMode>
);
