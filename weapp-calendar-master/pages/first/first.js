var ccFile = require('../../utils/calendar-converter.js')
var calendarConverter = new ccFile.CalendarConverter();
var zu=0;


var curDate= new Date(2019,4,12),
  curMonth= new Date().getMonth(),
    curYear= new Date().getFullYear(),
      curDay= new Date().getDate()

var dEx= calendarConverter.solar2lunar(curDate, zu)


Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.setData({
    curMonth:curMonth,
    curYear:curYear,
    curDay:curDay,
   lunarM:dEx.lunarMonth,
   lunarD:dEx.lunarDay,
   lfst:dEx.lunarFestival,
    sfst: dEx.solarFestival
  })
    console.log(dEx)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})