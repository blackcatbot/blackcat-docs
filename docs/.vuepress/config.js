module.exports = {
  title: "Black cat",
  description: "Discord Black cat機器人的指令列表",
  theme: 'vuepress-theme-succinct',
  globalUIComponents: [
    'ThemeManager'
  ],
  head: [
    ["script", {src: "https://arc.io/widget.min.js#kJumrvnj"}]
  ],
  themeConfig: {
    sidebar: [
      {
        title: "開始使用",
        children: [
          "/",
          "/invite.html"
        ]
      },
      {
        title: "指令",
        children: [
          "/commands/avatar.html",
          "/commands/ban.html",
          "/commands/clear.html",
          "/commands/commands.html",
          "/commands/dice.html",
          "/commands/eat.html",
          "/commands/filter.html",
          "/commands/gay.html",
          "/commands/help.html",
          "/commands/kick.html",
          "/commands/kill.html",
          "/commands/loop.html",
          "/commands/lucky.html",
          "/commands/lyrics.html",
          "/commands/nowplaying.html",
          "/commands/pause.html",
          "/commands/ping.html",
          "/commands/play.html",
          "/commands/playlist.html",
          "/commands/question.html",
          "/commands/queue.html",
          "/commands/remove.html",
          "/commands/repeat.html",
          "/commands/resume.html",
          "/commands/search.html",
          "/commands/shuffle.html",
          "/commands/skip.html",
          "/commands/skipto.html",
          "/commands/status.html",
          "/commands/stop.html",
          "/commands/support.html",
          "/commands/volume.html",
          "/commands/youtube.html",
        ]
      }
    ]
  }
}