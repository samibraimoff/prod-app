import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';
import { Theme } from 'app/providers/theme';
import About from './about';

export default {
  title: 'pages/About',
  component: About,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = () => <About />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
