//app.js
var plugin = requirePlugin("chatbot");

App({
  onLaunch: function () {
    plugin.init({
      appid: "8jI98Ix8iynnbn9fgaE2IXvRowsSp4", 
      openid: "",//用户的openid，非必填，建议传递该参数
      success: () => {
        // var that = this;
        // wx.request({
        //   url: getApp().globalData.url +'获取设置接口',
        //   method:'post',
        //   header: {// 设置请求的 header 
        //     'content-type':'application/x-www-form-urlencoded'
        //   },
        //   data: {
        //   },
        //   success:function (res) {
        //     if (res.data.isclear) {
        //       plugin.clearChatRecord()//清除聊天记录
        //     }
        //     plugin.setGuideList(res.data.guideList)//获取快捷语句
        //     plugin.setWelcome(res.data.welcome)
        //     plugin.setBackground(res.data.background)
        //   }
        // })
      }, //非必填
      fail: error => {}, //非必填
      welcome: "倒霉孩子，你要干什么",
      background: ""
    });
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})
