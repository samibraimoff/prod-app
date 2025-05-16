import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';
import { Theme } from 'app/providers/theme';
import { Button, ButtonTheme } from './button';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClearLight = Template.bind({});
ClearLight.args = {
  theme: ButtonTheme.CLEAR,
  children: 'Clear',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  theme: ButtonTheme.CLEAR,
  children: 'Clear',
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedLight = Template.bind({});
OutlinedLight.args = {
  theme: ButtonTheme.OUTLINED,
  children: 'Outlined',
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  theme: ButtonTheme.OUTLINED,
  children: 'Outlined',
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  theme: ButtonTheme.PRIMARY,
  children: 'Primary',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  theme: ButtonTheme.PRIMARY,
  children: 'Primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
