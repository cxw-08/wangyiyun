import { getMusicLyric } from '@/request/api/item'
import { getMusicUrl } from '@/request/api/item'
import { getPhoneLogin } from '@/request/api/my'
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
    lyricList: {},//歌词部分
    currentTime: 0,// 当前播放时间
    duration: 0,//歌曲总时长
    musicUrl: '',//当前歌曲的url
  }),
  actions: {

    //将搜索的歌曲添加到播放列表
    addPlayListItem(value) {
      this.playList.splice(this.playListIndex + 1, 0, value)
    },

    // 点击播放音乐
    updateIsPlay(value) {
      this.isPlay = value
    },
    // 更新播放列表
    updatePlayList(value) {
      this.playList = value
      console.log('updatePlayList', this.playList)
    },
    //更新播放歌曲index
    updatePlayListIndex(value) {
      this.playListIndex = value
      this.getMusicUrl(this.playList[this.playListIndex].id)
      console.log('updatePlayListIndex')

    },
    //是否显示歌曲详情页
    updateSongDetailShow() {
      this.songDetailShow = !this.songDetailShow
    },

    //获取歌词信息
    async getLyric(value) {
      let res = await getMusicLyric(value)
      this.UpdateLyricList(res.data.lrc)
      // console.log('getLyric', res)
    },
    //
    UpdateLyricList(value) {
      this.lyricList = value
    },

    //获取并更新音乐的url
    async getMusicUrl(value) {
      let res = await getMusicUrl(value)
      console.log('musicUrl::', res)
      this.musicUrl = res.data.data[0].url
    },
    updateCurrentTime(value) {
      this.currentTime = value
      // console.log(this.currentTime)
    },
    updateDuration(value) {
      this.duration = value
      console.log('this.duration', this.duration)
    }

  }
})

export const useProfileStore = defineStore('profileStore', {
  state: () => ({
    loginAccount: ''
  }),
  actions: {
    updateLoginAccount(value) {
      this.loginAccount = value
      console.log('loginAccount', this.loginAccount)
      window.sessionStorage.setItem('loginAccount', this.loginAccount)
    },
    async login(code) {
      let res = await getPhoneLogin({ phone: this.loginAccount, captcha: code })
      console.log('登录', res)
    }
  }

})
