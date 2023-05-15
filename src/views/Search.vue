<template>
  <div class="top">
    <div class="searchTop">
      <div class="topLeft">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </div>
      <div class="searchContent">
        <van-search background="#f3f0f0" ref="search" v-model="searchKey" shape="round" placeholder="请输入搜索关键词" />
      </div>
      <div class="topRight" @click="handleSearch">
        搜索
      </div>
    </div>
    <div class="content" v-show="showHotList">
      <div class="searchHistory">
        <div class="titile">
          <span class="left">搜索历史</span>
          <svg class="icon" aria-hidden="true" @click="handleHistoryRemove">
            <use xlink:href="#icon-ashbin"></use>
          </svg>
        </div>
        <div class="historyContent">
          <span v-for="item in searchHistoryList" :key="item" @click="handleClickHistory(item)">{{ item }}</span>
        </div>
      </div>
      <div class="hotSearch">
        <van-swipe :loop="false" :width="300" :show-indicators="false" class="hotList">
          <van-swipe-item class="hotList-item">
            <h3 class="title">热搜榜</h3>
            <div class="hotKeywords">
              <div class="item" v-for="(item, i) in hotSearchList" :key="i" @click="handleClickKeywords(item.searchWord)">
                <span class="number">{{ i + 1 }}</span>
                <div class="keyWords">
                  {{ item.searchWord }}
                  <i if="item.iconUrl" class="icon"></i>
                </div>
              </div>
            </div>
          </van-swipe-item>
          
          <van-swipe-item class="hotList-item">
            <h3 class="title">热搜榜</h3>
            <div class="hotKeywords">
              <div class="item" v-for="(item, i) in hotSearchList" :key="i" @click="handleClickKeywords(item.searchWord)">
                <span class="number">{{ i + 1 }}</span>
                <div class="keyWords">
                  {{ item.searchWord }}
                  <i if="item.iconUrl" class="icon"></i>
                </div>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item class="hotList-item">
            <h3 class="title">热搜榜</h3>
            <div class="hotKeywords">
              <div class="item" v-for="(item, i) in hotSearchList" :key="i" @click="handleClickKeywords(item.searchWord)">
                <span class="number">{{ i + 1 }}</span>
                <div class="keyWords">
                  {{ item.searchWord }}
                  <i if="item.iconUrl" class="icon"></i>
                </div>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="songListContent" v-show="!showHotList">
      <div class="item" v-for="(item, i) in searchList" :key="i">
        <div class="itemLeft" @click="playSearchMusic(item)">
          <span class="number">{{ i + 1 }}</span>
          <div class="songName">
            <p>{{ item.name }}</p>
            <div class="authers">
              <span v-for="item1 in item.ar" :key="item1.id" class="mini">{{ item1.name }}</span>
            </div>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon" aria-hidden="true" v-if="item.mv">
            <use xlink:href="#icon-play1"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo2"></use>
          </svg>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import {useItemStore} from '@/store/index.js'
import { getSearchKeywords, getHotSearchList } from "@/request/api/home";
import { onMounted, reactive, ref } from "vue";

const itemStore = useItemStore()

const showHotList = ref(true)
const searchKey = ref()
const search = ref()
const searchHistoryList = reactive([])
const searchList = reactive([])
const hotSearchList = reactive([])
onMounted(async () => {
  search.value.focus()
  // console.log(JSON.parse(localStorage.getItem('searchHistoryList')))
  if (JSON.parse(localStorage.getItem('searchHistoryList'))) {
    searchHistoryList.push(...JSON.parse(localStorage.getItem('searchHistoryList')))
  }
  let result = await getHotSearchList()
  hotSearchList.push(...result.data.data)
  console.log('getHotSearchList', result)
})

const handleSearch = async () => {
  console.log(searchKey.value)
  if (searchKey.value) {
    let index = searchHistoryList.indexOf(searchKey.value)
    if (index === -1) {
      searchHistoryList.unshift(searchKey.value)
    } else {
      searchHistoryList.splice(index, 1)
      searchHistoryList.unshift(searchKey.value)
    }
    //固定长度设置
    if (searchHistoryList.length > 6) {
      // console.log('固定长度')
      searchHistoryList.splice(searchHistoryList.length - 1, 1)
    }
    localStorage.setItem('searchHistoryList', JSON.stringify(searchHistoryList))

    // 向后台请求数据
    let res = await getSearchKeywords(searchKey.value)
    // console.log(res)
    searchList.push(...res.data.result.songs)
    showHotList.value = false
    searchKey.value = ''
  } else {
    showHotList.value = true
  }

}
const handleHistoryRemove = () => {
  localStorage.removeItem('searchHistoryList')
  searchHistoryList.length = 0
  // localStorage.setItem('searchHistoryList',JSON.stringify(searchHistoryList))
}

const handleClickHistory = async (data) => {
  // 向后台请求数据
  let res = await getSearchKeywords(data)
  // console.log(res)
  searchList.length = 0
  searchList.push(...res.data.result.songs)
  showHotList.value = false
}
const handleClickKeywords = async (data)=>{
  console.log('hotKey::',data)
  let res = await getSearchKeywords(data)
  // console.log('searchLIst',searchList)
  searchList.length = 0
  searchList.push(...res.data.result.songs)
  showHotList.value = false
  console.log('searchList',res)

}

const playSearchMusic = (item)=>{
  itemStore.addPlayListItem(item)
  itemStore.updatePlayListIndex(itemStore.playListIndex+1)
}
</script>

<style lang="less" scoped>
.top {
  background-color: #f3f0f0;

  .searchTop {
    background-color: #f3f0f0;
    top: 0;
    position: fixed;
    width: 100%;
    height: 1rem;
    padding: .3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .searchContent {
      width: 5rem;
    }

    .topRight {
      color: #726e6e;
      cursor: pointer;
    }
  }

  .content {
    margin-top: 1rem;

    .searchHistory {
      margin-top: .2rem;

      .titile {
        padding: .1rem;
        width: 100%;
        height: .6rem;
        display: flex;
        justify-content: space-between;
        align-content: center;
        font-weight: 700;
      }

      .historyContent {
        padding: .2rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        span {
          margin: .1rem;
          display: inline-block;
          padding: .2rem;
          background-color: #fff;
          color: #726e6e;
          height: .56rem;
          border-radius: .28rem;
          font-size: .24rem;
          line-height: .16rem;
        }
      }
    }

    .hotSearch {
      margin-top: 0.2rem;
      height: 18.6rem;

      .hotList {

        .hotList-item {
          margin-left: 0.2rem;
          border-radius: 0.2rem;
          background-color: #fff;

          .title {
            padding-left: 0.2rem;
            height: 1rem;
            line-height: 1rem;
            border-bottom: 1px solid #f0ecec;
          }

          .hotKeywords {
            .item {
              padding-left: .2rem;
              height: 0.8rem;
              display: flex;
              align-items: center;

              .number {
                width: .6rem;
                color: gray;
              }
            }

            div:nth-of-type(-n+3) {
              .number {
                color: #d93939;
                font-size: .36rem;
                font-weight: 700;
              }

              .keyWords {
                font-weight: 700;
                .icon {
                  display: inline-block;
                  width: .5rem;
                  height: .36rem;
                  background-repeat: cover;
                  background-size: .5rem .36rem;
                  background-image: url(https://p1.music.126.net/2zQ0d1ThZCX5Jtkvks9aOQ==/109951163968000522.png);
                }
              }
            }
          }
        }
      }

    }
  }

  .songListContent {
    margin: 1rem 0;
    width: 100%;
    background-color: #fff;

    .item {
      padding: .2rem;
      width: 100%;
      height: 1.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .itemLeft {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .number {
          text-align: center;
          width: 0.5rem;
          color: #b4afaf;
          font-size: 0.32rem;
        }

        .songName {
          width: 5rem;
          margin-left: 0.2rem;

          p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .authers {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #b4afaf;
          }
        }
      }

      .itemRight {
        .icon {
          margin-left: .1rem;
        }
      }
    }
  }
}
</style>