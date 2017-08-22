/**
 * Created by cl on 2017/5/3.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    detailModel: false,
    parentScroll:true,
    newsItem: {},
    childTitle:'',
    contentShow:''
  },
  getters: {
    contentWhat:state => state.contentShow
  },
  mutations: {
    IFSHOW(state, bol) {
      state.detailModel = bol,
      state.parentScroll = false
    },
    THISNEWS(state, item) {
      state.newsItem = item.news;
      state.childTitle = item.title;
      state.contentShow = item.content;
    },
    ADDOBTEAM(state,team) {
      state.obTeam.push(team)
    },
    DELOBTEAM(state,id) {
      state.obTeam.forEach((item,index) => {
        if(item.id === id) {
          state.obTeam.slice(index,1)
        }
      })
    }
  },
  actions: {
    ifshow({commit}, bol) {
      commit('IFSHOW', bol)
    },
    thisNews({commit}, item) {
      commit('THISNEWS', item)
    },
    addObTeam({commit},team) {
      commit('ADDOBTEAM', team)
    },
    delObteam({commit},id) {
      commit('DELOBTEAM', id)
    }
  }
})
export default store;
