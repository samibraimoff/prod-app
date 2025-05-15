import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Sidebar } from 'widgets/sidebar';

describe('Sidebar', () => {
  it('should render', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('should render apply collapsed class', async () => {
    render(<Sidebar />);
    const button = screen.getByTestId('sidebar-button');
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    await userEvent.click(button);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
