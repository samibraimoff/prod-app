import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { StoreDecorator } from 'shared/config/storybook/decorators/store';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';

import { Navbar } from './navbar';

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const GuestLight = Template.bind({});
GuestLight.decorators = [StoreDecorator({})];

export const AuthDark = Template.bind({});
AuthDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {
      authData: {
        username: 'admin',
      },
    },
  })];
