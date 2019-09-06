//index.js
//获取应用实例
const app = getApp()
Page({
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