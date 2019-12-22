// pages/diandan/diandan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [{
        id: 1,
        name: '店长推荐',
        // food: ['四季春+珍波椰', '云朵百香青', '云朵葡萄柚青', '清香乌龙茶', '冰淇淋红茶'],
        foods: [{
          name: '四季春+珍波椰',
          price: 7,
          num: 0
        }, {
          name: '云朵百香青',
          price: 17,
          num: 0
        }, {
          name: '云朵葡萄柚青',
          price: 17,
          num: 0
        }, {
          name: '清香乌龙茶',
          price: 7,
          num: 0
        }, {
          name: '冰淇淋红茶',
          price: 7,
          num: 0
        }],
      },
      {
        id: 2,
        name: '找好茶',
        // food: ['阿萨姆红茶', '茉莉绿茶', '四季春茶', '清香乌龙茶', '翡翠柠檬', '蜂蜜绿'],
        foods: [{
          name: '阿萨姆红茶',
          price: 7,
          num: 0
        }, {
          name: '茉莉绿茶',
          price: 7,
          num: 0
        }, {
          name: '四季春茶',
          price: 17,
          num: 0
        }, {
          name: '清香乌龙茶',
          price: 7,
          num: 0
        }, {
          name: '翡翠柠檬',
          price: 12,
          num: 0
        }, {
          name: '蜂蜜绿',
          price: 12,
          num: 0
        }],
      },
      {
        id: 3,
        name: '找口感',
        // food: ['波霸奶茶', '波霸奶绿', '波霸红', '波霸绿', '珍珠奶茶', '珍珠奶绿'],
        foods: [{
          name: '波霸奶茶',
          price: 10,
          num: 0
        }, {
          name: '波霸奶绿',
          price: 10,
          num: 0
        }, {
          name: '波霸红',
          price: 7,
          num: 0
        }, {
          name: '波霸绿',
          price: 7,
          num: 0
        }, {
          name: '珍珠奶茶',
          price: 10,
          num: 0
        }, {
          name: '珍珠奶绿',
          price: 10,
          num: 0
        }],
      },
      {
        id: 4,
        name: '找奶茶',
        // food: ['奶茶', '奶绿', '四季奶青', '乌龙奶茶', '红茶玛奇朵', '乌龙玛奇朵'],
        foods: [{
          name: '奶茶',
          price: 10,
          num: 0
        }, {
          name: '奶绿',
          price: 10,
          num: 0
        }, {
          name: '四季奶青',
          price: 10,
          num: 0
        }, {
          name: '乌龙奶茶',
          price: 10,
          num: 0
        }, {
          name: '红茶玛奇朵',
          price: 12,
          num: 0
        }, {
          name: '乌龙玛奇朵',
          price: 12,
          num: 0
        }],
      },
      {
        id: 5,
        name: '找新鲜',
        // food: ['柠檬汁', '金桔柠檬', '四季奶青', '柠檬蜜', '柠檬养乐多', '蜜茶'],
        foods: [{
          name: '柠檬汁',
          price: 10,
          num: 0
        }, {
          name: '金桔柠檬',
          price: 10,
          num: 0
        }, {
          name: '柠檬蜜',
          price: 10,
          num: 0
        }, {
          name: '柠檬养乐多',
          price: 10,
          num: 0
        }, {
          name: '蜜茶',
          price: 12,
          num: 0
        }],
      },
      {
        id: 6,
        name: '找拿铁',
        // food: ['红茶拿铁', '绿茶拿铁', '四季拿铁', '乌龙拿铁', '焦糖红茶拿铁'],
        foods: [{
          name: '红茶拿铁',
          price: 13,
          num: 0
        }, {
          name: '绿茶拿铁',
          price: 13,
          num: 0
        }, {
          name: '四季拿铁',
          price: 13,
          num: 0
        }, {
          name: '乌龙拿铁',
          price: 13,
          num: 0
        }, {
          name: '焦糖红茶拿铁',
          price: 14,
          num: 0
          }, {
            name: '黑糖红茶拿铁',
            price: 16,
            num: 0
          }],
      }
    ],
    activeIndex: 0,
    scrollH: 1000,
    toView: 'a0',
    scrollTop: 100,
    cupNumber: 0,
    sumMonney: 0,
    loading: false,
    currentType: 0,
    currentIndex: 0,
  },
  selectFood: function(e) {
    var foods = e.currentTarget.dataset.foods
    console.log(foods)
  },
  selectMenu: function(e) {
    var index = e.currentTarget.dataset.index
    console.log(index)
    this.setData({
      activeIndex: index,
      toView: 'a' + index,
    })
  },
  scroll: function (e) {
    console.log(e)
    var dis = e.detail.scrollTop
    if (dis > 0 && dis < 388) {
      this.setData({
        activeIndex: 0,
      })
    }
    if (dis > 388 && dis < 848.7999877929688) {
      this.setData({
        activeIndex: 1,
      })
    }
    if (dis > 848.7999877929688 && dis < 1309.5999755859375) {
      this.setData({
        activeIndex: 2,
      })
    }
    if (dis > 1309.5999755859375 && dis < 1770.4000244140625) {
      this.setData({
        activeIndex: 3,
      })
    }
    if (dis > 1770.4000244140625 && dis < 2158.39990234375) {
      this.setData({
        activeIndex: 4,
      })
    }
    if (dis > 2158.39990234375) {
      this.setData({
        activeIndex: 5,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var sysinfo = wx.getSystemInfoSync().windowHeight;
    console.log(sysinfo)
    // wx.showLoading({
    //   title: '努力加载中',
    // })
    // wx.request({
    //   success: function (res) {
    //     wx.hideLoading();
    //     console.log(res)
    //     that.setData({
    //       listData: res.data,
    //       loading: true
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  selectInfo: function(e) {
    var type = e.currentTarget.dataset.type;
    var index = e.currentTarget.dataset.index;
    this.setData({
      showModalStatus: !this.data.showModalStatus,
      currentType: type,
      currentIndex: index,
      sizeIndex: 0,
      sugarIndex: 0,
      temIndex: 0
    });
  },
  notice: function() {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '因含有规格，请在购物车内删减',
      showCancel: false,
      success: function(res) {
        if (res.confirm) {
          that.setData({
            showCart: true
          });
        }
      }
    })
  },
  showCartList: function() {
    console.log(this.data.showCart)
    if (this.data.cartList.length != 0) {
      this.setData({
        showCart: !this.data.showCart,
      });
    }

  },
  clearCartList: function() {
    this.setData({
      cartList: [],
      showCart: false,
      sumMonney: 0
    });
  },
  goBalance: function() {
    if (this.data.sumMonney != 0) {
      wx.setStorageSync('cartList', this.data.cartList);
      wx.setStorageSync('sumMonney', this.data.sumMonney);
      wx.setStorageSync('cupNumber', this.data.cupNumber);
      wx.navigateTo({
        url: '../order/balance/balance'
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})