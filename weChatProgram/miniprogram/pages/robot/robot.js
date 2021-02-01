// pages/robot/robot.js
var plugin = requirePlugin("chatbot");
const chat = plugin.getChatComponent();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // goBackHome回调 返回上一级页面
  goBackHome: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  // getQueryCallback回调, 返回数据
  getQueryCallback: function(e) {
    this.insertchatbotlog(e)
    if (e.detail.query=='清除记录'){
      plugin.clearChatRecord()
    }
    //跳转人工
    if(e.detail.data.answer=='正在为您转接人工服务...'){
      this.showkefu()
    }
  },
  // 点击机器人回答里的链接跳转webview,需要开发者自己配置一个承载webview的页面,url字段对应的小程序页面需要开发者自己创建
  // 开发者需要在小程序后台配置相应的域名
  // 1.1.7版本开始支持
  openWebview: function(e) {
    let url = e.detail.weburl
    wx.navigateTo({
      url: `/pages/webviewPage/webviewPage?url=${url}`
    })
  },
  // 点击机器人回答中的小程序，需要在开发者自己的小程序内做跳转
  // 开发者需要在小程序配置中指定跳转小程序的appId
  // 1.1.7版本开始支持
  openMiniProgram(e) {
    let {appid, pagepath} = e.detail
    wx.navigateToMiniProgram({
      appId: appid,
      path: pagepath,
      extraData: {
      },
      envVersion: '',
      success(res) {
        // 打开成功
      }
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!getApp().globalData.openid) {
      var openid =''
    }else {
      var openid = getApp().globalData.openid
    }
    plugin.init({
      appid:"8jI98Ix8iynnbn9fgaE2IXvRowsSp4",
      success: () => {},
      fail: error => {},
      guideList: ["您好"],
      textToSpeech: true, //默认为ture打开状态
      welcome: "请问有什么需要帮助？",
      welcomeImage: 'http://inews.gtimg.com/newsapp_bt/0/10701537095/1000',
      background: "rgba(247,251,252,1)",
      guideCardHeight: 40,
      operateCardHeight: 145,
      history: true,
      historySize: 60,
      navHeight: 0,
      robotHeader: 'https://res.wx.qq.com/mmspraiweb_node/dist/static/miniprogrampageImages/talk/leftHeader.png',
      userHeader: 'https://res.wx.qq.com/mmspraiweb_node/dist/static/miniprogrampageImages/talk/rightHeader.png',
      userName: '',
      defaultWheel: ''
    });
    plugin.api.nlp('rank', {q: txt,candidates:  [
      {question: "上海到北京的火车票"},
      {question: "北京到上海的飞机票"},
      {question: "北京到上海的高铁票"}
    ]}).then(res => {
        console.log("rank result : ", res)
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  insertchatbotlog:function(e){
    var that =this;
    wx.request({
      url: getApp().globalData.url +'上报接口',
      method:'post',
      header: {// 设置请求的 header 
        'content-type':'application/x-www-form-urlencoded'
      },
      data: {
        提问: e.detail.query,
        用户: e.detail.data.from_user_name,
        机器人APPID:e.detail.data.to_user_name,
        回答: e.detail.data.answer,
        回答状态码: e.detail.data.status,
      },
    })
  },
 
  //开启/关闭声音方法
  setsound:function(){
    this.setData({
      sound: !this.data.sound
    })
    plugin.setTextToSpeech(!this.data.sound)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
