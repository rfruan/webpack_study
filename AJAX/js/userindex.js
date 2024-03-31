/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * */
const creator = 'rf'

function getlist() {
  axios({
    url: 'http://hmajax.itheima.net/api/settings',
    method: 'get',
    params: { creator }
  }).then(res => {
    console.log(res.data)
    const data = res.data.data
    Object.keys(data).forEach((key) => {
      if (key === 'avatar') {
        console.log(data[key])
        document.querySelector('img').src = data[key]
      } else if (key === 'gender') {

        document.querySelectorAll(`.${key}`)[data[key]].checked = true

      } else {
        document.querySelector(`.${key}`).value = data[key]
      }
    }
    )
  })
}
getlist()


// 2. 更换头像
document.querySelector('.upload').addEventListener('change', function (e) {
  const fd = new FormData()
  console.log(e.target.files[0])
  fd.append('avatar', e.target.files[0])  //一个参数
  fd.append('creator', creator)


  axios({
    url: 'http://hmajax.itheima.net/api/avatar',
    method: 'put',
    data: fd
  }).then(() => {
    // console.log(res.data)
    // const avatar= res.data.avatar
    // document.querySelector('img').src =avatar
    getlist()
  })
})

//3.修改个人信息
document.querySelector('.submit').addEventListener('click', function () {
  const form = document.querySelector('.user-form')
  const data = serialize(form, { hash: true, empty: true })
  //报错原因是gender是数值型
  data.gender = +data.gender
  // console.log(data)
  // const { desc, email, gender, nickname } = data
  axios({
    url: 'http://hmajax.itheima.net/api/settings',
    method: 'PUT',
    data: {
      ...data, creator
    }
  }).then((res) => {
    getlist()
  })
})