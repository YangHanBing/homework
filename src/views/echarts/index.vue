<template>
  <div>
    <div id="bar"></div>
    <div id="line"></div>
    <div id="main"></div>
  </div>
</template>

<script>
// 引入echarts
import * as echarts from 'echarts'
export default {
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {
    this.echarts_bar()
    this.echarts_line()
  },
  methods: {
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
          data: ['张三', '李四', '王五', '赵六', '杨七', '未知'],
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
            data: ['75', '48', '17', '49', '68', '98']
          },
          {
            name: '数学成绩',
            type: 'bar',
            data: ['48', '49', '76', '25', '98', '59']
          }
        ]
      })
    },
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
            data: ['75', '48', '17', '49', '68', '98', '75', '48', '17', '49', '68', '98']
          },
          {
            name: '2月销售额',
            type: 'line',
            data: ['48', '49', '76', '25', '98', '59', '48', '49', '76', '25', '98', '59']
          }
        ]
      })
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
</style>
