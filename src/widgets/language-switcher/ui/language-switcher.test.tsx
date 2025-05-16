import { screen, render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './language-switcher';

jest.mock('react-i18next');
const mockChangeLanguage = jest.fn();

(useTranslation as jest.Mock).mockReturnValue({
  t: (key: string) => key,
  i18n: { language: 'en-US', changeLanguage: mockChangeLanguage },
});

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should change language', async () => {
    render(<LanguageSwitcher />);
    const button = screen.getByTestId('language-switcher');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('language');
    await userEvent.click(button);
    expect(mockChangeLanguage).toBeCalledTimes(1);
    expect(mockChangeLanguage).toBeCalledWith('ru-RU');
  });

  it('should not have any a11y violations', async () => {
    const { container } = render(<LanguageSwitcher />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should match snapshot', () => {
    const { container } = render(<LanguageSwitcher />);
    expect(container).toMatchSnapshot();
  });

  it('should apply theme and class name', () => {
    render(<LanguageSwitcher className="test" />);
    expect(screen.getByTestId('language-switcher')).toHaveClass('test');
  });
});
