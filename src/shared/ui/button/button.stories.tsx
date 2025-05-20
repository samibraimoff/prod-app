import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';

import { Button, ButtonSize, ButtonTheme } from './button';

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

export const OutlinedLightSizeM = Template.bind({});
OutlinedLightSizeM.args = {
  theme: ButtonTheme.OUTLINED,
  children: 'Outlined',
  size: ButtonSize.M,
};

export const OutlinedLightSizeL = Template.bind({});
OutlinedLightSizeL.args = {
  theme: ButtonTheme.OUTLINED,
  children: 'Outlined',
  size: ButtonSize.L,
};

export const OutlinedLightSizeXL = Template.bind({});
OutlinedLightSizeXL.args = {
  theme: ButtonTheme.OUTLINED,
  children: 'Outlined',
  size: ButtonSize.XL,
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

export const SquareLightM = Template.bind({});
SquareLightM.args = {
  theme: ButtonTheme.BACKGROUND,
  children: '>',
  square: true,
  size: ButtonSize.M,
};

export const SquareLightL = Template.bind({});
SquareLightL.args = {
  theme: ButtonTheme.BACKGROUND,
  children: '>',
  square: true,
  size: ButtonSize.L,
};

export const SquareLightXL = Template.bind({});
SquareLightXL.args = {
  theme: ButtonTheme.BACKGROUND,
  children: '>',
  square: true,
  size: ButtonSize.XL,
};

export const SquareDark = Template.bind({});

SquareDark.args = {
  theme: ButtonTheme.BACKGROUND,
  children: '>',
  square: true,
  size: ButtonSize.L,
};
SquareDark.decorators = [ThemeDecorator(Theme.DARK)];
