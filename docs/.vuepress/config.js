const sidebar = require("vuepress-auto-sidebar");

module.exports = {
  title: "Black cat",
  description: "Discord Black cat機器人的指令列表",
  theme: 'vuepress-theme-succinct',
  globalUIComponents: [
    'ThemeManager'
  ],
  themeConfig: {
    base: "/docs",
    sidebar: sidebar.getSidebar()
  }
}