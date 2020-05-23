module.exports = {
  base:"/galenjx-ui/",
  title: "galenjx-ui",
  description: "一个易用的 UI 框架",
  markdown: {
    anchor: { permalink: false },
  },
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "项目源码", link: "https://github.com/galenjx/galenjx-ui" },
    ],
    sidebar: [
      {
        title: "介绍",
        collapsable: false,
        children: ["/introduce/"]
      },
      {
        title: "入门",
        collapsable: false,
        children: ["/install/", "/get-started/"]
      },
      {
        title: "组件",
        collapsable: false,
        children: [
          "/components/button",
          "/components/radio",
          "/components/checkbox",
          "/components/switch",
          "/components/input",
          "/components/form",
          "/components/dialog",
        ]
      }
    ],
  }
};
