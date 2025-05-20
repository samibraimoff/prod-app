import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { RenderWithProviders } from 'shared/lib/tests/render-with-providers';
import { Sidebar } from 'widgets/sidebar';

describe('Sidebar', () => {
  it('should render', () => {
    RenderWithProviders(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('should render apply collapsed class', async () => {
    RenderWithProviders(<Sidebar />);
    const button = screen.getByTestId('sidebar-button');
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    await userEvent.click(button);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
