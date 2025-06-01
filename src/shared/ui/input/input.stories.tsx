import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';

import { Input } from './input';

export default {
  title: 'shared/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputLight = Template.bind({});
InputLight.args = {
  placeholder: 'Enter username',
};

export const InputDark = Template.bind({});
InputDark.args = {
  placeholder: 'Enter username',
};
InputDark.decorators = [ThemeDecorator(Theme.DARK)];
