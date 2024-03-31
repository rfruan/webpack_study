function heroAxios(config) {
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    if (config.params) {
      const queryString = new URLSearchParams(config.params).toString()
      config.url += `?${queryString}`
    }
    // console.log(config.url)
    xhr.open(config.method || 'get', config.url)
    xhr.addEventListener('loadend', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.response))
      } else {
        reject(new Error(xhr.response))
      }
    })
    if (config.data) {
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(config.data)
    } else {
      xhr.send()
    }

  })
  return p
}



//1. 默认上来展示所有英雄列表数据

function showlist() {
  heroAxios({
    url: 'https://hmajax.itheima.net/api/lol/search',
    method: 'get',
  }).then(res => {
    // console.log(res.data)
    const list = res.data
    show(list)
  }).catch(e => console.log(e))

}
showlist()


//2. 关键字搜索，并判断为空，根据关键词搜索匹配英雄
document.querySelector('.search').addEventListener('input', function (e) {
  // console.log(e.target.value)
  const q = e.target.value.trim()
  // console.log(q) //空字符串 布尔为false
  // console.log(q == true)
  if (q !== '') {
    // console.log(q)
    heroAxios({
      url: 'https://hmajax.itheima.net/api/lol/search',
      method: 'get',
      params: { q }
    }).then(res => {
      console.log(res.data)
      const list = res.data
      show(list)
    })
      .catch(e => console.log(e))

  } else showlist()

})


function show(list) {
  document.querySelector('.list').innerHTML = list.map(item => {
    const { heroId, name, icon } = item
    return `<li  data-id='${heroId}'>
  <img src="${icon}" alt="" />
  <p>${name}</p>
</li>`
  }).join('')
}
//3. 点击英雄显示英雄详情
document.querySelector('.list').addEventListener('click', function (e) {
  console.log(e.target)
  const li = e.target.parentNode
  const id = li.dataset.id
  console.log(id)
  heroAxios({
    url: 'https://hmajax.itheima.net/api/lol/info',
    method: 'get',
    params: { id }
  }).then(res => {
    console.log(res.data)
    const data = res.data
    // 显示详细信息
    const dom = document.querySelector('#infoModal')
    const model = new bootstrap.Modal(dom)
    model.show()
    const { heroId, name, alias, attack, icon, magic, defense, difficulty, shortBio } = data.hero
    document.querySelector('.modal-title').innerHTML = `${name}${alias}`
    document.querySelector('.icon').src = icon
    document.querySelector('.attack').style.width = `${attack * 10}%`
    document.querySelector('.defense').style.width = `${defense * 10}%`
    document.querySelector('.magic').style.width = `${magic * 10}%`
    document.querySelector('.difficulty').style.width = `${difficulty * 10}%`
    console.log(document.querySelector('.shortBio'))
    document.querySelector('.shortBio').innerHTML = `${shortBio}`

  })
    .catch(e => console.log(e))
})


