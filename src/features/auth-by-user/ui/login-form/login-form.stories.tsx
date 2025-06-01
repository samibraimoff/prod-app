import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';

import { LoginForm } from './login-form';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormLight = Template.bind({});
LoginFormLight.args = {
  placeholder: 'Enter username',
};

export const LoginFormDark = Template.bind({});
LoginFormDark.args = {
  placeholder: 'Enter username',
};
LoginFormDark.decorators = [ThemeDecorator(Theme.DARK)];
