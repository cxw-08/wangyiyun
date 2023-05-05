import { createStore } from 'vuex'

export default createStore({
  state: {
    playList: [{
      name: "Anything but Ordinary",
      al: {
        id: 1515088,
        name: "Let Go",
        pic: 109951167596882130,
        picUrl: "https://p1.music.126.net/rNWoK0vpHAW1H9kTFKRVig==/109951167596882130.jpg",
        pic_str: "109951167596882130"
      },
      id: 16431886,
      ar: [{
        id: 46490,
        name: "Avril Lavigne",
      }]
    }],
    playListIndex: 0,//默认下标为0
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
