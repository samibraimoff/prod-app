import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';

import { Text, TextTheme } from './text';

export default {
  title: 'shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextDescriptionLight = Template.bind({});
TextDescriptionLight.args = {
  title: 'Title',
  text: 'Description',
};

export const TextDescriptionDark = Template.bind({});
TextDescriptionDark.args = {
  title: 'Title',
  text: 'Description',
};
TextDescriptionDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleLight = Template.bind({});
TitleLight.args = {
  title: 'Title',
};

export const TitleDark = Template.bind({});
TitleDark.args = {
  title: 'Title',
};
TitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextLight = Template.bind({});
TextLight.args = {
  text: 'Description',
};

export const TextDark = Template.bind({});
TextDark.args = {
  text: 'Description',
};
TextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextErrorLight = Template.bind({});
TextErrorLight.args = {
  title: 'Title',
  text: 'Description',
  theme: TextTheme.ERROR,
};

export const TextErrorDark = Template.bind({});
TextErrorDark.args = {
  title: 'Title',
  text: 'Description',
  theme: TextTheme.ERROR,
};
TextErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
