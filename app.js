//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})
const AV = require('./libs/av-weapp-min.js');
// LeanCloud 应用的 ID 和 Key
AV.init({ 
 appId: 'Dyio1KzspBKW1nFp9tS1AQ6E-gzGzoHsz', 
 appKey: 'J2ht0Wpxbt8IGtAWqKLl6jOw', 
});
