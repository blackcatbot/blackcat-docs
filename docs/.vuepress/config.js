module.exports = {
  title: "Black cat",
  description: "Discord Black cat機器人的指令列表",
  theme: 'vuepress-theme-succinct',
  globalUIComponents: [
    'ThemeManager'
  ],
  plugins: {
    "vuepress-plugin-auto-sidebar": {
      titleMap: {
        commands: "指令",
        misc: "test"
      }
    }
  },
}