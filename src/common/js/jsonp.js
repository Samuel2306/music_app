import originJSONP from 'jsonp'
/**
 *
 * @param url  请求的服务器地址
 * @param data 请求的查询参数
 * @param option
 * @returns {Promise}
 */
export default function jsonp(url,data,option){
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve,reject) => {
    //err表示请求失败，请求成功时，err等于null
    //data表示请求成功返回的数据
    originJSONP(url,option,(err,data) => {
      if(!error){
        resolve(data)
      }else{
        reject(error)
      }
    })
  })
}

function param(data){
  let url = ''
  for(var k in data){
    let value = data[k] !== undefined ? data[k] : ''
    //es6语法
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
