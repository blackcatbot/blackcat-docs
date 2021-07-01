module.exports = {
  title: "Black cat",
  description: "Discord Black cat機器人的指令列表",
  theme: 'vuepress-theme-succinct',
  globalUIComponents: [
    'ThemeManager'
  ],
  themeConfig: {
    sidebar: [
      ["/", "歡迎"],
      {
        title: "指令",
        path: "/commands",
        children: [
          "avatar.html",
          "ban.html",
          "clear.html",
          "commands.html",
          "dice.html",
          "eat.html",
          "filter.html",
          "gay.html",
          "help.html",
          "kick.html",
          "kill.html",
          "loop.html",
          "lucky.html",
          "lyrics.html",
          "nowplaying.html",
          "pause.html",
          "ping.html",
          "play.html",
          "playlist.html",
          "question.html",
          "queue.html",
          "remove.html",
          "repeat.html",
          "resume.html",
          "search.html",
          "shuffle.html",
          "skip.html",
          "skipto.html",
          "status.html",
          "stop.html",
          "support.html",
          "sus.html",
          "volume.html",
          "youtube.html",
        ]
      }
    ]
  }
}