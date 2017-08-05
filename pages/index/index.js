//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},

    products: [
      {
        id: 1,
        name: '手电11',
        price: '49',
        description: '超级无敌手电哇',
        imageUrl: 'http://via.placeholder.com/150x150',
      },
      {
        id: 2,
        name: '神火手电 C',
        price: '99',
        description: '神火手电 C 哇',
        imageUrl: 'http://via.placeholder.com/150x150',
      },
      {
        id: 3,
        name: '盗版的手电？',
        price: '19',
        description: '盗版的手电，贪便宜的来',
        imageUrl: 'http://via.placeholder.com/150x150',
      },
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
