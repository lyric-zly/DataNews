var xx1 = echarts.init(document.getElementById('main1-1'));
var ageArea = ['0岁', '1-3岁', '4-6岁', '7-9岁', '10-12岁', '13-15岁', '16-18岁'];
var FbarData = [2, 5, 11, 12, 22, 10, 2]; //男
var MbarData = [-3, -9, -22, -26, -20, -13, -5]; //女

option = {
  title: {
    text: '家庭暴力中受暴未成年人年龄分布',
    subtext: '数据来源：慧科新闻数据库，检索时间为2016年3月1日到2019年11月27日',
    textStyle: {
      fontSize: 20
    },
    subtextStyle: {
      fontSize: 12,
      // bottom:30,
    },
    // itemGap: 390,//主副标题间距
    x: 'center',

  },

  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    },
    formatter: function (params, ticket, callback) {
      console.log(params)
      var res = params[0].name;
      for (var i = 0, l = params.length; i < l; i++) {
        res += '<br/>' + params[i].seriesName + ' : ' + Math.abs(params[i].value);
      }
      setTimeout(function () {
        // 仅为了模拟异步回调
        callback(ticket, res);
      }, 500)
      return 'loading...';
    }
  },
  legend: {
    data: ['女', '男'],
    x: 'right',
    y: 'top'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      axisLabel: {
        formatter: function (value) {
          return Math.abs(value);//显示的数值都取绝对值
        }
      },
      type: 'value'
    }
  ],
  yAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      // data : ['0~5岁','5~10岁','10-30岁','30-50岁','50-70岁','70-100','100以上']
      data: ageArea
    }
  ],
  series: [
    {
      name: '女',
      type: 'bar',
      stack: '总量',
      barWidth: '70%',
      label: {
        normal: {
          show: true,
          position: 'left',
          formatter: function (v) { return Math.abs(v.data) }
        }
      },
      data: MbarData,
      color: '#e2656c'
    },
    {
      name: '男',
      type: 'bar',
      stack: '总量',
      barWidth: '70%',
      label: {
        normal: {
          show: true,
          position: 'right',

        }
      },
      data: FbarData,
      color: '#4d6990'
    }

  ]
};
xx1.setOption(option);
$(window).resize(function () {
  xx1.resize();
});