// pages/shouye/page/map_choose/map_choose.js
const util = require('../../../../utils/util.js')
const formatLocation = util.formatLocation
Page({
  data: {
    hasLocation: true,
  },
  onLoad: function(options) {
  },
  chooseLocation: function() {
    const that = this
    wx.chooseLocation({
      success(res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude),
          locationAddress: res.address,
          locationName: res.name
        })
      }
    })
  },

  clear: function() {
    this.setData({
      hasLocation: false
    })
  },
})