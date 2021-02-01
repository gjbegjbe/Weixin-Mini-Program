// //index.js

// var util = require('../../utils/util.js')
// var app = getApp()
// Page({
//   data: {
//     feed: [],
//     feed_length: 0
//   },
//   bindItemTap: function(e) {
//     console.log("aid= "+ e.currentTarget.dataset.aid)
//     wx.navigateTo({
//       //userId是登录的用户的id
//       url: '../answer/answer?answerId=' + e.currentTarget.dataset.aid + '&userId=' + 1
//     })
//   },
//   bindQueTap: function(e) {
//     console.log(e.currentTarget.dataset.qid)
//     wx.navigateTo({
//       url: '../question/question?qid=' + e.currentTarget.dataset.qid
//     })
//   }, 
// ///////////////////
//   onLoad: function () {
//     console.log('onLoad')
//     var that = this
//     //调用应用实例的方法获取全局数据
//     this.refresh0();
//   },

//   // upper: function () {
//   //   wx.showNavigationBarLoading()
//   //   this.refresh();
//   //   console.log("upper");
//   //   setTimeout(function(){wx.hideNavigationBarLoading();wx.stopPullDownRefresh();}, 2000);
//   // },

//   lower: function (e) {
//     wx.showNavigationBarLoading();
//     var that = this;
//     setTimeout(function(){wx.hideNavigationBarLoading();that.nextLoad();}, 1000);
//     console.log("lower")
//   },
//   //scroll: function (e) {
//   //  console.log("scroll")
//   //},

//   //网络请求数据, 实现首页刷新
//   refresh0: function(){
//     var that = this
//     util.getData()
//       .then(function (data) {
//         console.log('load index');
//         var feed_data = data.data
//         that.setData({
//           feed: feed_data,
//           feed_length: feed_data.length
//         });
//         console.log(data);
//       });
//   },

//   //使用本地 fake 数据实现刷新效果
//   getData: function(){
//     var feed = util.getData2();
//     console.log("loaddata");
//     var feed_data = feed.data;
//     this.setData({
//       feed:feed_data,
//       feed_length: feed_data.length
//     });
//   },

//   refresh: function(){
//     wx.showToast({
//       title: '刷新中',
//       icon: 'loading',
//       duration: 3000
//     });

//     var feed = util.getData2();
//     console.log("loaddata");
//     var feed_data = feed.data;
//     this.setData({
//       feed:feed_data,
//       feed_length: feed_data.length
//     });

//     setTimeout(function(){
//       wx.showToast({
//         title: '刷新成功',
//         icon: 'success',
//         duration: 2000
//       })
//     },3000)

//   },

//   //使用本地 fake 数据实现继续加载效果
//   nextLoad: function(){
//     console.log('onLoad')
//     var that = this
//     //调用应用实例的方法获取全局数据
//     this.refresh0();
//   },

//   //搜索功能
//   search:function(){
//     wx.showToast({
//       title: '搜索功能正在开发呦',
//       icon: 'none',
//       duration:3000,
      
//     })
//   },
  
//   //跳转到提问页面
//   putQuestion:function(){
//     wx.navigateTo({
//       url: '../putQuestion/put_question',
//     })
//   }

// })
// pages/DQJTest/DQJTEST.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  add: function() {
    const db = wx.cloud.database({
      env: 'weixin-cloud-g1o7d'
    })

  db.collection('DQJTest').add({
    data: {
      count: 1
    },
    success: res => {
      wx.showToast({
        title: '增加记录成功',
      })
    }
  })
  },

  //跳转到加入界面
  addRecord:function(){
    wx.navigateTo({
      url: '../myRecord/addRecord/addRecord',
    })
  }

})