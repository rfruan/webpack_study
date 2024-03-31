/**
 * 目标1：默认显示-北京市天气
 *  1.1 获取北京市天气数据
 *  1.2 数据展示到页面
 */

const ul = document.querySelector('.week-wrap')
const url = 'https://hmajax.itheima.net/api/weather'

showlist('110100')
function showlist(code) {

  //默认显示-北京市7天天气
  myAxios({
    url,
    method: 'get',
    params: {
      city: code
    }
  }).then((res) => {
    console.log(res.data)
    const list = res.data.dayForecast
    // 7天信息
    ul.innerHTML = list.map(item => {
      const { dateFormat, temDay, temNight, date, weather, weatherImg, windDirection, windPower } = item
      return ` <li class="item">
            <div class="date-box">
              <span class="dateFormat">${dateFormat}</span>
              <span class="date">${date}</span>
            </div>
            <img src="${weatherImg}" alt="" class="weatherImg">
            <span class="weather">${weather}</span>
            <div class="temp">
              <span class="temNight">${temNight}</span>-
              <span class="temDay">${temDay}</span>
              <span>℃</span>
            </div>
            <div class="wind">
              <span class="windDirection">${windDirection}</span>
              <span class="windPower">&lt;${windPower}</span>
            </div>
          </li>
            `
    }).join(' ')
    const { dateShort, dateLunar, temperature, psPm25, psPm25Level, weatherImg, windDirection, windPower } = res.data

    //title
    document.querySelector('.title').innerHTML = `<span class="dateShort">${dateShort}</span>
                                                <span class="calendar">农历&nbsp;
                                                <span class="dateLunar">${dateLunar}</span>
                                                </span>`
    document.querySelector('.area').innerHTML = res.data.area

    // 今日信息
    document.querySelector('.weather-box').innerHTML = ` <div class="tem-box">
                                                      <span class="temp">
                                                      <span class="temperature">${temperature}</span>
                                                      <span>°</span>
                                                      </span>
                                                      </div>
                                                      <div class="climate-box">
                                                      <div class="air">
                                                      <span class="psPm25">${psPm25}</span>
                                                      <span class="psPm25Level">${psPm25Level}</span>
                                                      </div>
                                                      <ul class="weather-list">
                                                      <li>
                                                      <img src="${weatherImg}" class="weatherImg" alt="">
                                                      <span class="weather">${res.data.weather}</span>
                                                      </li>
                                                      <li class="windDirection">${windDirection}</li>
                                                      <li class="windPower">${windPower}</li>
                                                      </ul>
                                                      </div>`

    let { humidity, sunriseTime, sunsetTime, ultraviolet, weather, temDay, temNight } = res.data.todayWeather
    document.querySelector('.today-weather').innerHTML = ` <div class="range-box">
                                                          <span>今天：</span>
                                                          <span class="range">
                                                          <span class="weather">${weather}</span>
                                                          <span class="temNight">${temNight}</span>
                                                          <span>-</span>
                                                          <span class="temDay">${temDay}</span>
                                                          <span>℃</span>
                                                          </span>
                                                          </div>
                                                          <ul class="sun-list">
                                                          <li>
                                                          <span>紫外线</span>
                                                          <span class="ultraviolet">${ultraviolet}</span>
                                                          </li>
                                                          <li>
                                                          <span>湿度</span>
                                                          <span class="humidity">${humidity}</span>%
                                                          </li>
                                                          <li>
                                                          <span>日出</span>
                                                          <span class="sunriseTime">${sunriseTime}</span>
                                                          </li>
                                                          <li>
                                                          <span>日落</span>
                                                          <span class="sunsetTime">${sunsetTime}</span>
                                                          </li>
                                                          </ul>`

  }).catch(e => console.log(e))



}
// 搜索查询出现关联下拉框
document.querySelector('.search-city').addEventListener('input', function (e) {
  console.log(e.target.value)
  myAxios({
    url: 'http://hmajax.itheima.net/api/weather/city',
    params: {
      city: e.target.value
    }
  }).then(res => {
    // 获取城市代码
    console.log(res)
    const str = res.data.map(item => {
      return ` <li class="city-item" data-id='${item.code}' >${item.name}</li>`
    }).join(' ')
    console.log(str)
    document.querySelector('.search-list').innerHTML = str
  })

  //点击列表出现列表信息
  document.querySelector('.search-list').addEventListener('click', function (e) {
    const code = e.target.dataset.id
    showlist(code)
  })

})
