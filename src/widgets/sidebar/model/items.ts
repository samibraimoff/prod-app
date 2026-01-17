import { SVGProps, VFC } from "react";
import AboutIcon from "shared/assets/icons/about.svg";
import HomeIcon from "shared/assets/icons/home.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import { RoutePath } from "shared/config/router-config/router-config";

export type SidebarItemType = {
  path: string,
  text: string,
  Icon: VFC<SVGProps<SVGSVGElement>>
}

export const items: SidebarItemType[] = [
  {
    path: RoutePath.home,
    text: "navlinks.home",
    Icon: HomeIcon
  },
  {
    path: RoutePath.about,
    text: "navlinks.about",
    Icon: AboutIcon
  },
  {
    path: RoutePath.profile,
    text: "navlinks.profile",
    Icon: ProfileIcon
  }
];