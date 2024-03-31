/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */

// <!-- 1. 显示书籍列表 -->

// 1. 获取列表数据
const creator = '小张'  //管理员
const ullist = document.querySelector('.list')


function show() {
  axios({
    url: 'http://hmajax.itheima.net/api/books',
    method: 'get',
    params: {
      creator
    }
  }).then(res => {
    // console.log(res.data)
    //获取列表渲染
    const goodlist = res.data.data
    render(goodlist)
  }).catch(e => console.log(e.response.data.message))
}
show()
// 2. 渲染

function render(list) {
  ullist.innerHTML = list.map((item, index) => {
    const { id, bookname, author, publisher } = item
    return `  <tr>
        <td>${index + 1}</td>
        <td>${bookname}</td>
        <td>${author}</td>
        <td>${publisher}</td>
        <td data-id=${id}>
          <span class="del">删除</span>
          <span class="edit">编辑</span>
        </td>
      </tr> `
  }).join(" ")
}

// <!-- 2.新增数据 -->

const addDom = document.querySelector('.add-modal')
const addmodal = new bootstrap.Modal(addDom)
const addform = document.querySelector('.add-form')
document.querySelector('.plus-btn').addEventListener('click', function () {
  addform.reset() //表单重置
  addmodal.show()
})

document.querySelector('.add-btn').addEventListener('click', function () {
  const data = serialize(addform, { hash: true, empty: true })
  const { bookname, author, publisher } = data
  axios({
    url: 'http://hmajax.itheima.net/api/books',
    method: 'post',
    data: {
      // bookname, author, publisher,
      ...data, creator
    }
  }).then(res => {
    console.log(res.data.message)//添加成功，需要在渲染 
    addmodal.hide()
    show()
  }).catch(e => console.log(e.response.data.message))
})



// <!-- 3. 删除数据 -->

ullist.addEventListener('click', function (e) {
  console.log(e.target.tagName)
  if (e.target.classList.contains('del')) {
    const parent = e.target.parentNode
    const id = parent.dataset.id
    console.log(id)
    axios({
      url: `http://hmajax.itheima.net/api/books/${id}`,
      method: 'DELETE',

    }).then(res => {
      console.log(res.data.message)//添加成功，需要在渲染
      show()
    }).catch(e => console.log(e.response.data.message))

  }
})

// <!-- 4. 修改数据 -->

const editDom = document.querySelector('.edit-modal')
const editmodal = new bootstrap.Modal(editDom)
const editform = document.querySelector('.edit-form')
ullist.addEventListener('click', function (e) {
  console.log(e.target.tagName)
  // if (e.target.innerHTML === '编辑')
  if (e.target.classList.contains('edit')) {
    editmodal.show()
    const parent = e.target.parentNode
    const id = parent.dataset.id
    console.log(id)
    axios({
      url: `http://hmajax.itheima.net/api/books/${id}`,
      method: 'get',
    }).then(res => {
      console.log(res.data.data)//获取数据渲染表单
      const data = res.data.data
      // for (let k in data) {
      //   editform.querySelector(`.${k}`).value = data[k]
      // }
      const keys = Object.keys(data) // ['id', 'bookname', 'author', 'publisher']
      keys.forEach(key => {
        document.querySelector(`.edit-form .${key}`).value = data[key]
      })

      show()
    }).catch(e => console.log(e.response.data.message))
  }
})

document.querySelector('.edit-btn').addEventListener('click', function () {
  const data = serialize(editform, { hash: true, empty: true })
  const { id, bookname, author, publisher } = data
  axios({
    url: `http://hmajax.itheima.net/api/books/${id}`,
    method: 'put',
    data: {
      bookname, author, publisher, creator
    }
  }).then(res => {
    console.log(res.data.message)//添加成功，需要在渲染 
    editmodal.hide()
    show()
  }).catch(e => console.log(e.response.data.message))
})

