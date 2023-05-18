import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Store from './store/index';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
    );
    expect(getByText(/Welcome G00print/gi)).toBeTruthy();
  });
});
