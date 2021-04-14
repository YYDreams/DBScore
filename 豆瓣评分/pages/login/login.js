// pages/login/login.js
Page({

// 微信登录
  wechatLogin:function(){
  console.log('微信登录');
  },

  //豆瓣账号登录
  doubanLogin:function(){
    console.log('豆瓣账号登录');
  },

  //使用协议
  doubanOpenAgreement:function(){
    console.log('使用协议');
    wx.navigateTo({
      // url需要调转的页面
      url: '/pages/agreement/agreement',
    });
  },
})
