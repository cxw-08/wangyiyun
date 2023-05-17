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
    url: `/login/cellphone?phone=${data.phone}&captcha=${data.captcha}`
  })
}