<template>
  <div>
    <div id="bar"></div>
    <div id="line"></div>
    <div id="scatter"></div>
  </div>
</template>

<script>
// 引入echarts
import * as echarts from 'echarts'
import { ScatterData } from './data'
export default {
  components: {},
  data() {
    return {
      arr1: [],
      arr2: []
    }
  },
  created() {},
  mounted() {
    this.getData()
    this.echarts_bar()
    this.echarts_line()
    this.echarts_scatter()
  },
  methods: {
    getData() {
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min // 含最大值，含最小值
      }
      for (let i = 0; i < 12; i++) {
        let num1 = getRandomIntInclusive(30, 100)
        num1 = String(parseInt(num1, 10))
        this.arr1.push(num1)
      }
      for (let j = 0; j < 12; j++) {
        let num2 = getRandomIntInclusive(20, 100)
        num2 = String(parseInt(num2, 10))
        this.arr2.push(num2)
      }
      console.log(this.arr1) // 生成12个20-50之间的随机数
      console.log(this.arr2) // 生成12个20-50之间的随机数
    },
    // 柱状图
    echarts_bar() {
      const myChart = echarts.init(document.getElementById('bar'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'Echarts入门-柱状图',
          textStyle: {
            color: 'red'
          },
          left: 100
        },
        tooltip: {},
        // tooltip: {
        //   // trigger: 'item'
        //   trigger: 'axis',
        //   triggerOn: 'click',
        //   // formatter: '{b} 的成绩是 {c}'
        //   formatter: function (arg) {
        //     return arg[0].name + '的分数是:' + arg[0].data
        //   }
        // },
        xAxis: {
          data: this.arr1,
          type: 'category'
        },
        yAxis: {
          type: 'value'
        },
        toolbox: {
          feature: {
            saveAsImage: {}, // 导出图片
            dataView: {}, // 数据视图
            restore: {}, // 重置
            dataZoom: {}, // 区域缩放
            magicType: {
              type: ['bar', 'line']
            } // 动态图表类型的切换
          }
        },
        legend: {
          // 图例, 图例中的data数据来源于series中每个对象的name, 图例可以帮助我们对图表进行筛选
          data: ['语文成绩', '数学成绩']
        },
        series: [
          {
            name: '语文成绩',
            type: 'bar',
            data: this.arr1
          },
          {
            name: '数学成绩',
            type: 'bar',
            data: this.arr2
          }
        ]
      })
    },
    // 折线图
    echarts_line() {
      const myChart = echarts.init(document.getElementById('line'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'Echarts入门-折线图',
          textStyle: {
            color: 'red'
          },
          left: 100
        },
        tooltip: {},
        // tooltip: {
        //   // trigger: 'item'
        //   trigger: 'axis',
        //   triggerOn: 'click',
        //   // formatter: '{b} 的成绩是 {c}'
        //   formatter: function (arg) {
        //     return arg[0].name + '的分数是:' + arg[0].data
        //   }
        // },
        xAxis: {
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          type: 'category'
        },
        yAxis: {
          type: 'value'
        },
        toolbox: {
          feature: {
            saveAsImage: {}, // 导出图片
            dataView: {}, // 数据视图
            restore: {}, // 重置
            dataZoom: {}, // 区域缩放
            magicType: {
              type: ['bar', '']
            } // 动态图表类型的切换
          }
        },
        legend: {
          // 图例, 图例中的data数据来源于series中每个对象的name, 图例可以帮助我们对图表进行筛选
          data: ['1月销售额', '2月销售额']
        },
        series: [
          {
            name: '1月销售额',
            type: 'line',
            data: this.arr1
          },
          {
            name: '2月销售额',
            type: 'line',
            data: this.arr2
          }
        ]
      })
    },
    // 波点图
    echarts_scatter() {
      const axisData = []
      for (let i = 0; i < ScatterData.length; i++) {
        const height = ScatterData[i].height
        const weight = ScatterData[i].weight
        const newArr = [height, weight]
        axisData.push(newArr)
      }
      console.log(axisData)
      const mCharts = echarts.init(document.getElementById('scatter'))
      const option = {
        xAxis: {
          type: 'value',
          scale: true
        },
        yAxis: {
          type: 'value',
          scale: true
        },
        series: [
          {
            // type: 'scatter',
            type: 'effectScatter', // 指明图表为带涟漪动画的散点图
            showEffectOn: 'emphasis', // 出现涟漪动画的时机 render emphasis
            rippleEffect: {
              scale: 10 // 涟漪动画时, 散点的缩放比例
            },
            data: axisData,
            // symbolSize: 30
            symbolSize: function (arg) {
              // 控制散点的大小
              // console.log(arg)
              const height = arg[0] / 100
              const weight = arg[1]
              // bmi = 体重kg / (身高m*身高m)   大于28,就代表肥胖
              const bmi = weight / (height * height)
              if (bmi > 28) {
                return 15
              }
              return 10
            },
            itemStyle: {
              // 控制散点的样式
              color: function (arg) {
                // console.log(arg)
                const height = arg.data[0] / 100
                const weight = arg.data[1]
                // bmi = 体重kg / (身高m*身高m)   大于28,就代表肥胖
                const bmi = weight / (height * height)
                if (bmi > 28) {
                  return 'red'
                }
                return 'green'
              }
            }
          }
        ]
      }
      mCharts.setOption(option)
    }
  }
}
</script>
<style scoped lang="scss">
#bar {
  width: 800px;
  height: 500px;
  margin: 100px auto;
}
#line {
  width: 800px;
  height: 500px;
  margin: 100px auto;
}
#scatter {
  width: 800px;
  height: 500px;
  margin: 100px auto;
}
</style>
