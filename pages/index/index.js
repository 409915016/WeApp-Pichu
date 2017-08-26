//index.js
//获取应用实例
var app = getApp()
const AV = require('../../utils/av-weapp-min.js')

Page({
  data: {
    userInfo: {},
    products: [],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady: function () {
    console.log('onReady');
    var _this = this;
    new AV.Query('Products')
    .descending('createAt')
    .find()
    .then(products => _this.setData({ products }))
    .catch(console.error);
  }
})
