import service from "..";

//获取首页轮播图
export function getBanner() {
  return service({
    method: 'GET',
    url: '/banner?type=2',
  })
}

//获取推荐歌单
export function getMusicList() {
  return service({
    method: 'GET',
    url: '/personalized?limit=10'
  })
}

//实现搜索功能
export function getSearchKeywords(data) {
  return service({
    method: 'GET',
    url: `/cloudsearch?keywords=${data}`
  });
}

//获取热搜列表
export function getHotSearchList() {
  return service({
    method: 'GET',
    url: '/search/hot/detail'
  });
}