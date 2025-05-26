import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import { ThemeDecorator } from 'shared/config/storybook/decorators/theme';

import { Modal } from './modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLight = Template.bind({});
ModalLight.args = {
  children: 'Primary',
  isOpen: true,
};

export const ModalDark = Template.bind({});
ModalDark.args = {
  children: 'Primary Dark',
  isOpen: true,
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
