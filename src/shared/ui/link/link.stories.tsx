import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';
import { Theme } from 'app/providers/theme';
import { Link, LinkTheme } from './link';

export default {
  title: 'shared/Link',
  component: Link,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const LinkPrimary = Template.bind({});
LinkPrimary.args = {
  theme: LinkTheme.PRIMARY,
  children: 'Primary',
};

export const LinkPrimaryDark = Template.bind({});
LinkPrimaryDark.args = {
  theme: LinkTheme.PRIMARY,
  children: 'Primary Dark',
};
LinkPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LinkSecondaryLight = Template.bind({});
LinkSecondaryLight.args = {
  theme: LinkTheme.SECONDARY,
  children: 'Secondary Light',
};

export const LinkSecondaryDark = Template.bind({});
LinkSecondaryDark.args = {
  theme: LinkTheme.SECONDARY,
  children: 'Secondary Dark',
};
LinkSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
