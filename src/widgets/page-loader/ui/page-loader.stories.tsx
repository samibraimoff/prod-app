import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';

import { PageLoader } from './page-loader';

export default {
  title: 'widget/PageLoader',
  component: PageLoader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = () => <PageLoader />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
