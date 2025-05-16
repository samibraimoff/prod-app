import { render } from '@testing-library/react';
import { ErrorBoundaryMessage } from './error-boundary-message';

describe('ErrorBoundaryMessage', () => {
  it('should render', () => {
    const expectedErrorMessage = 'Something went wrong, please reload the page.';
    render(<ErrorBoundaryMessage />);
    expect(expectedErrorMessage).toBe('Something went wrong, please reload the page.');
  });
});
