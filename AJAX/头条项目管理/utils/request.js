// axios 公共配置
// 基地址,配置后 axios 请求时都会 baseURL + url
axios.defaults.baseURL = 'http://geek.itheima.net'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  token && (config.headers.Authorization = `Bearer ${token}`)
  return config
}, function (error) {
  return Promise.reject(error)
})

//添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data
}, function (err) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么，例如：判断响应状态为 401 代表身份验证失败
  console.log(err)
  if (err?.response?.status === 401) {
    alert('登录状态过期，请重新登录')
    localStorage.clear()
    location.href = '../login/index.html'
  }
  return Promise.reject(err)
})



