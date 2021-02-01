Page({
  
  data: {
    modalHidden: true,
    array: ['美国', '中国', '巴西', '日本'],
    radio:'',
    time:'',
    index:'',
    objectArray: [
      {
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '日本'
      }
    ],},

    formSubmit: function(e) {
      var value =  e.detail.value;
      this.setData(
        {
          modalHidden: false,
          radio: value.radio,
          time: value.time,
          index:value.index,
        }
      );
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
      const db = wx.cloud.database({
        env: 'weixin-cloud-g1o7d'
      })
  
    db.collection('Record').add({
      data: {
        radio: value.radio,
        time: value.time,
        index:value.index,
      },
      success: res => {
        wx.showToast({
          title: '增加记录成功',
        })
      }
    })
    },
    formReset: function(e) {
      console.log('form发生了reset事件，携带数据为：', e.detail.value)
      this.setData({
        chosen: ''
      })
    },
    modalChange: function(e) {
      this.setData({
        modalHidden: true
      })
    },

    bindPickerChange: function(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
      })
    },

  //取消加入记录，返回到加入界面
  returnRecord:function(){
    wx.navigateBack({
    })
  },
  bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  }
})
