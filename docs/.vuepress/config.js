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
          "/components/dialog",
        ]
      }
    ],
  }
};
