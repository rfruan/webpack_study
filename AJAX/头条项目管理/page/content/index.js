/**
 * 目标1：获取文章列表并展示
 *  1.1 准备查询参数对象
 *  1.2 获取文章列表数据
 *  1.3 展示到指定的标签结构中
 */

const data = {
  status: '',
  channel_id: '',
  page: 1,
  per_page: 2
}
const pagenow = document.querySelector('.page-item.page-now')
const total = document.querySelector('.total-count')
async function setArtList() {
  const res = await axios({
    url: '/v1_0/mp/articles',
    params: data
  })
  console.log(res)
  const list = res.data.results
  document.querySelector('.art-list').innerHTML = "" + list.map(item => {
    const { id, title, pubdate, status, cover: { images }, read_count, comment_count, like_count
    } = item

    return `<tr>
    <td>
      <img
        src="${images}"
        alt="">
    </td>
    <td>${title}</td>
    <td>
      ${status == 2 ? `<span class="badge text-bg-success" >审核通过</span>` : `<span class="badge text-bg-primary">待审核</span>`}  
    </td>
    <td>
      <span>${pubdate}</span>
    </td>
    <td>
      <span>${read_count}</span>
    </td>
    <td>
      <span>${comment_count}</span>
    </td>
    <td>
      <span>${like_count}</span>
    </td>
    <td>
      <i class="bi bi-pencil-square edit" data-id=${id}></i>
      <i class="bi bi-trash3 del" data-id=${id}></i>
    </td>
  </tr>`
  }).join()

  pagenow.innerHTML = `第${res.data.page}页`
  pagenow.dataset.id = res.data.page
  total.innerHTML = `共${res.data.total_count}条`
  total.dataset.id = res.data.total_count
}
setArtList()

/**
 * 目标2：筛选文章列表
 *  2.1 设置频道列表数据
 *  2.2 监听筛选条件改变，保存查询信息到查询参数对象
 *  2.3 点击筛选时，传递查询参数对象到服务器
 *  2.4 获取匹配数据，覆盖到页面展示
 */

const channel = document.querySelector('.form-select')
const result = axios({
  url: '/v1_0/channels',
}).then(result => {
  console.log(result.data.channels)
  const list = result.data.channels
  channel.innerHTML = `<option value="" selected>请选择文章频道</option>` + list.map(item => `<option value="${item.id}">${item.name}</option>`)
})


document.querySelector('.sel-btn').addEventListener('click', function () {
  const form = document.querySelector('.sel-form')
  const info = serialize(form, { hash: true, empty: true })
  const { status, channel_id } = info

  data.channel_id = channel_id == '请选择文章频道' ? '' : channel_id
  data.status = status
  setArtList()

})

/**
 * 目标3：分页功能
 *  3.1 保存并设置文章总条数
 *  3.2 点击下一页，做临界值判断，并切换页码参数并请求最新数据
 *  3.3 点击上一页，做临界值判断，并切换页码参数并请求最新数据
 */
document.querySelector('.next').addEventListener('click', function (e) {
  const curpage = pagenow.dataset.id
  const totalpage = total.dataset.id
  if (curpage * data.per_page < totalpage) {
    data.page++
    setArtList()
  }
})
document.querySelector('.last').addEventListener('click', function (e) {
  const curpage = pagenow.dataset.id
  const totalpage = total.dataset.id
  if (curpage > 1) {
    data.page--
    setArtList()
  }
})


/**
 * 目标4：删除功能
 *  4.1 关联文章 id 到删除图标
 *  4.2 点击删除时，获取文章 id
 *  4.3 调用删除接口，传递文章 id 到服务器
 *  4.4 重新获取文章列表，并覆盖展示
 *  4.5 删除最后一页的最后一条，需要自动向前翻页
 */
document.querySelector('.art-list').addEventListener('click', async e => {
  if (e.target.classList.contains('del')) {
    console.log(e.target)
    const target = e.target.dataset.id
    const res = await axios({
      url: `/v1_0/mp/articles/${target}`,
      method: 'DELETE'
    })
    const child = document.querySelector('.art-list').children
    if (child.length === 1 && data.page !== 1) {
      data.page--
    }
    setArtList()
  }
})


// 点击编辑时，获取文章 id，跳转到发布文章页面传递文章 id 过去
document.querySelector('.art-list').addEventListener('click', async e => {
  if (e.target.classList.contains('edit')) {
    const target = e.target.dataset.id
    console.log(target)
    location.href = `../publish/index.html?id=${target}`
  }
})

