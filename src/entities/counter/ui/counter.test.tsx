import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RenderWithProviders } from 'shared/lib/tests/render-with-providers';

import { Counter } from './counter';

describe('Counter component', () => {
  it('should render counter initial state value', () => {
    RenderWithProviders(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    const value = screen.getByTestId('value-title');
    expect(value).toHaveTextContent('10');
  });

  it('should increament counter value', async () => {
    RenderWithProviders(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    const value = screen.getByTestId('value-title');
    const increamentBtn = screen.getByTestId('increament-btn');
    await userEvent.click(increamentBtn);
    expect(value).toHaveTextContent('11');
  });

  it('should decreament counter value', async () => {
    RenderWithProviders(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    const value = screen.getByTestId('value-title');
    const increamentBtn = screen.getByTestId('decreament-btn');
    await userEvent.click(increamentBtn);
    expect(value).toHaveTextContent('9');
  });
});
