import { render } from '@testing-library/react';

import G00printLib from './g00print-lib';

describe('G00printLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<G00printLib />);
    expect(baseElement).toBeTruthy();
  });
});
