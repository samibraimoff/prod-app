import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./modal";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";
import { Theme } from "app/providers/theme";

export default {
  title: "ui-kit/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis veritatis vitae quasi rerum harum nemo quidem in numquam dicta. Ipsum cumque veniam, sed modi quisquam consectetur sapiente repellat ipsa maxime aperiam magnam perspiciatis. Voluptate delectus, assumenda voluptatum necessitatibus ab unde? Molestias alias, doloribus laborum voluptas quia ex laudantium, eveniet iusto aspernatur, tempore ab totam. Eligendi facilis iure asperiores quasi dicta ratione ullam commodi inventore quae ipsam magnam placeat animi minus sed nemo,",
  isOpen: true,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis veritatis vitae quasi rerum harum nemo quidem in numquam dicta. Ipsum cumque veniam, sed modi quisquam consectetur sapiente repellat ipsa maxime aperiam magnam perspiciatis. Voluptate delectus, assumenda voluptatum necessitatibus ab unde? Molestias alias, doloribus laborum voluptas quia ex laudantium, eveniet iusto aspernatur, tempore ab totam. Eligendi facilis iure asperiores quasi dicta ratione ullam commodi inventore quae ipsam magnam placeat animi minus sed nemo,",
  isOpen: true,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
