import service from "..";
// 手机号发送验证码

export function getPhoneCode(data) {
  return service({
    method: 'GET',
    url: `/captcha/sent?phone=${data}`
  });
}

//验证验证码

export function verifyPhoneCode(phone, code) {
  return service({
    method: 'GET',
    url: `/captcha/verify?phone=${phone}&captcha=${code}`
  });
}

//手机验证码登录
export function getPhoneLogin(data) {
  return service({
    method: 'GET',
    url: '/login/cellphone',
    params: {
      phone: data.phone,
      captcha: data.captcha,
    }
  })
}

// 二维码登录

// 二维码 key 生成接口
export function getKey() {
  return service({
    method: 'GET',
    url: `/login/qr/key?t=${new Date().getTime()}`,
  })
}
// 生成二维码接口
export function createQRcode(key) {
  return service({
    method: 'GET',
    url: `/login/qr/create?key=${key}?t=${new Date().getTime()}`
  })
}
//二维码检测扫码状态接口
export function checkQRcode(key) {
  return service({
    method: 'GET',
    url: `/login/qr/check?key=${key}?t=${new Date().getTime()}`
  })
}