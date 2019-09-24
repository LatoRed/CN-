// pages/smash/smash.js
var wxCharts = require('../../wxcharts/wxcharts.js');
var app = getApp();
var radarChart = null;
Page({  
  data: {
    percent: 0,
    status: 'normal',
    plain: true,
    switch1: false,
    testtrue: true,
    currentTab: 0,
    imageUrls: [
      { src: "https://www.smashbros.com/assets_v2/img/fighter/mario/main.png" },
      { src: 'https://www.smashbros.com/assets_v2/img/fighter/mario/main.png' },
      { src: 'https://www.smashbros.com/assets_v2/img/fighter/mario/main.png' },
      { src: 'https://www.smashbros.com/assets_v2/img/fighter/mario/main.png' },
      { src: 'https://www.smashbros.com/assets_v2/img/fighter/mario/main.png' },
      { src: 'https://www.smashbros.com/assets_v2/img/fighter/mario/main.png' },
    ],

    swipclick: function () {
      wx.navigateTo({
        url: '../smash/smash'
      })
    },
    //轮播图的切换事件
    swiperChange: function (e) {
      this.setData({
        swiperCurrent: e.detail.current
      })
    },

    //点击指示点切换事件
    chuangEvent: function (e) {
      this.setData({
        swiperCurrent: e.currentTarget.id
      })
    },

    //点击图片触发事件
    swipclick: function (e) {
      console.log(this.data.swiperCurrent);
      wx.switchTab({
        url: this.data.links[this.data.swiperCurrent]
      })
    },
  },

  btnClick: function () {
  var isShow = this.data.testtrue;
  this.setData({ testtrue: !isShow })
  },

  onChange(event) {
    const detail = event.detail;
    this.setData({
      'switch1': detail.value
    })
  },

  touchHandler: function (e) {
    console.log(radarChart.getCurrentDataIndex(e));
  },
  onReady: function (e) {
    var windowWidth = 3000;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    radarChart = new wxCharts({
      canvasId: 'radarCanvas',
      type: 'radar',
      categories: ['Weight', 'Height', 'Attack', 'Defense', 'Air'],   //一组数组，各个数值对应的名字
      series: [{
        data: [5, 5, 6, 7, 10]   //一组数组对应的数值
      }],
      width: windowWidth,
      height: 180,   //雷达图的高
      extra: {
        radar: {
          max: 10   //最高数值可以达到10
        }
      }
    });
  },

  handleAdd() {
    if (this.data.percent === 100) return;
    this.setData({
      percent: this.data.percent + 10
    });
    if (this.data.percent === 100) {
      this.setData({
        status: 'success'
      });
    }
  },

  handleReduce() {
    if (this.data.percent === 0) return;
    this.setData({
      percent: this.data.percent - 10,
      status: 'normal'
    });
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }}
});
