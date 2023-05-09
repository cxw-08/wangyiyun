import service from "..";

//获取歌单详情信息

export function getMusicListDetail(id) {
  return service({
    method: 'GET',
    url: `/playlist/detail?id=${id}`

  })
}

// 获取歌单里面的歌曲
export function getAllMusicList(id) {
  return service({
    method: 'GET',
    url: `/playlist/track/all?id=${id}`

  })
}

//获取歌词里面的歌曲
export function getMusicLyric(id) {
  return service({
    method: 'GET',
    url: `/lyric?id=${id}`
  })
}