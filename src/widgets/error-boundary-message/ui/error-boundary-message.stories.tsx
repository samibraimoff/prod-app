import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';

import { ErrorBoundaryMessage } from './error-boundary-message';

export default {
  title: 'widget/ErrorBoundaryMessage',
  component: ErrorBoundaryMessage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ErrorBoundaryMessage>;

const Template: ComponentStory<typeof ErrorBoundaryMessage> = () => <ErrorBoundaryMessage />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
