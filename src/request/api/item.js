import service from "..";

//获取歌单详情信息

export function getMusicListDetail(id) {
  return service({
    method: 'GET',
    url: `/playlist/detail?id=${id}`

  })
}