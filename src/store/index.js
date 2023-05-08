import { defineStore } from 'pinia'

export const useItemStore = defineStore('itemStore', {
  state: () => ({
    playList: [{
      name: "Anything but Ordinary",
      al: {
        id: 1515088,
        name: "Let Go",
        pic: 109951167596882130,
        picUrl: "https://p1.music.126.net/rNWoK0vpHAW1H9kTFKRVig==/109951167596882130.jpg",
        pic_str: "109951167596882130"
      },
      id: 2042856159,
      ar: [{
        id: 46490,
        name: "Avril Lavigne",
      }]
    }],
    isPlay: false,
    playListIndex: 0,//默认下标为0
    songDetailShow: false,//歌曲详情页的显示
  }),
  actions: {
    updateIsPlay(value) {
      this.isPlay = value
    },
    // 更新播放列表
    updatePlayList(value) {
      this.playList = value
    },
    //更新播放歌曲index
    updatePlayListIndex(value) {
      this.playListIndex = value
    },
    //是否显示歌曲详情页
    updateSongDetailShow() {
      this.songDetailShow = !this.songDetailShow
    }
  }
})


