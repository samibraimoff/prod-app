import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/theme";
import { StoreDecorator } from "shared/config/storybook/decorators/store-decorator";
import { ThemeDecorator } from "shared/config/storybook/decorators/theme-decorator";

import Profile from "./Profile";

export default {
  title: "pages/Profile",
  component: Profile,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = () => <Profile />;

export const ProfileLight = Template.bind({});
ProfileLight.args = {};
ProfileLight.decorators = [StoreDecorator({})];

export const ProfileDark = Template.bind({});
ProfileDark.args = {};
ProfileDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
