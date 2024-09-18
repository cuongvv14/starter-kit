import { CoreMenu } from "@core/types";

export const menu: CoreMenu[] = [
  {
    id: "home",
    title: "Home",
    translate: "MENU.HOME",
    type: "item",
    icon: "home",
    url: "home",
  },
  {
    id: "sample",
    title: "Sample",
    translate: "MENU.SAMPLE",
    type: "item",
    icon: "file",
    url: "sample",
  },
  {
    id: "user",
    title: "User",
    translate: "",
    type: "collapsible",
    icon: "user",
    children: [
      {
        id: "list",
        title: "List",
        translate: "List ",
        type: "item",
        icon: "circle",
        url: "user-list",
      },
      {
        id: "view",
        title: "View",
        translate: "View",
        type: "item",
        icon: "circle",
        url: "login",
      },
      {
        id: "edit",
        title: "Edit",
        translate: "Edit",
        type: "item",
        icon: "circle",
        url: "login",
      },
    ],
  },
];
