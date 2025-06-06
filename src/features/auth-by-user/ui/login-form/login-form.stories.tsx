import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { StoreDecorator } from 'shared/config/storybook/decorators/store';
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
LoginFormLight.decorators = [
  StoreDecorator({ login: { username: 'admin', password: '123' } }),
];

export const LoginFormDark = Template.bind({});
LoginFormDark.args = {
  placeholder: 'Enter username',
};
LoginFormDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ login: { username: 'admin', password: '123' } }),
];

export const LoginFormError = Template.bind({});
LoginFormError.args = {
  placeholder: 'Enter username',
};
LoginFormError.decorators = [
  StoreDecorator({ login: { username: 'admin', password: '123', error: 'Error' } }),
];

export const LoginFormLoading = Template.bind({});
LoginFormLoading.args = {
  placeholder: 'Enter username',
};
LoginFormLoading.decorators = [
  StoreDecorator({ login: { isLoading: true } }),
];
