import Vue from 'vue'
import moment from 'moment'
moment.locale('zh-cn')
Vue.filter('datatime', val => {
  return moment(val).fromNow()
})
