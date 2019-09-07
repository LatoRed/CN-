//index.js
//获取应用实例
const app = getApp()
Page({

onShareAppMessage: function () {

return {
title: '任天堂明星大乱斗全角色攻略',
desc: '这是一款快速带领新人入门与多种攻略的小程序',
path: '/page/user?id=123'
}    //分享功能
},

  map: function () {
  wx.navigateTo({
  url: '../smash/smash'
  })
  },           //跳转到smash页面

   data: {
    current: 'homepage',
    current: 1,
    plain:true, 
  },


  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
},


  data: {
    spinShow: true,
    switch: false
  },

  onSwitchChange({ detail }) {
    const value = detail.value;
    this.setData({
      switch: value,
      spinShow: !value
    });
  },

  Change({ detail }) {
    const type = detail.type;
    if (type === 'next') {
      this.setData({
        current: this.data.current + 1
      });
      //拖放按钮时，通过当前页码加一来跳转,暂未实现

    } else if (type === 'prev') {
      this.setData({
        current: this.data.current - 1
      });
    }
  },

})