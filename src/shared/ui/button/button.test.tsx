import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/button/button';

import { ButtonTheme } from './button';

describe('Button', () => {
  it('should render button', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('should apply class clear', () => {
    render(<Button theme={ButtonTheme.CLEAR}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('clear');
  });
});
