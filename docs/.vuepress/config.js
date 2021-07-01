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
        mode: "asc"
      },
      title: {
        mode: "titlecase",
        map: {
          "/commands": "🎉 Hello Vuepress 🎉"
        }
      }
    }
  },
}