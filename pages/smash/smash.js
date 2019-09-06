// pages/smash/smash.js
var wxCharts = require('../../wxcharts/wxcharts.js');
var app = getApp();
var radarChart = null;
Page({  
  data: {
    percent: 0,
    status: 'normal',
    switch1: false
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
  }
});
