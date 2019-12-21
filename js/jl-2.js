var jl2 = echarts.init(document.getElementById('main2-2'));
option = {
  title: {
    text: '未成年人受暴后求助表现',
    textStyle: {
      fontSize: 20
    },
    subtext: '数据来源：慧科新闻数据库，检索时间为2016年3月1日到2019年11月27日\n数据说明：统计了未成年人受暴后的求助表现，共得到有效数据161个，13个表现数据不详',
    subtextStyle: {
      fontSize: 12,
      // bottom:30,
    },
    itemGap: 435,
    x: 'center',
    top: '3'
  },
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  animation: true,
  series: {
    layoutIterations: 0,
    type: 'sankey',
    layout: 'none',
    top: 50,
    left: 140,
    focusNodeAdjacency: 'allEdges',
    data: [{
      name: '0岁',
      itemStyle: {
        color: '#73C2DC',
        borderColor: '#73C2DC'
      }
    }, {
      name: '1-3岁',
      itemStyle: {
        color: '#73C2DC',
        borderColor: '#73C2DC'
      }
    }, {
      name: '4-6岁',
      itemStyle: {
        color: '#73C2DC',
        borderColor: '#73C2DC'
      }
    }, {
      name: '7-9岁',
      itemStyle: {
        color: '#ed8a4f',
        borderColor: '#ed8a4f'
      }
    }, {
      name: '10-12岁',
      itemStyle: {
        color: '#b78975',
        borderColor: '#b78975'
      }
      // 479EC3
    }, {
      name: '13-15岁',
      itemStyle: {
        color: '#973f3c',
        borderColor: '#973f3c'
      }
      // 367A9B
    }, {
      name: '16-18岁',
      itemStyle: {
        color: '#23556E',
        borderColor: '#23556E'
      }
    }, {
      name: '未求助',
      itemStyle: {
        color: '#c5ccd2',
        borderColor: '#c5ccd2'
      }
      // e2656c
    }, {
      name: '求助',
      itemStyle: {
        color: '#4d6990',
        borderColor: '#4d6990'
      }

    }, {
      name: '无意识',
      itemStyle: {
        color: '#C1AFFD',
        borderColor: '#C1AFFD'
      }
    }, {
      name: '害怕',
      itemStyle: {
        color: '#AB9AE1',
        borderColor: '#AB9AE1'
      }
    }, {
      name: '求饶',
      itemStyle: {
        color: '#9C8DCE',
        borderColor: '#9C8DCE'
      }
    }, {
      name: '隐瞒',
      itemStyle: {
        color: '#9C8DCE',
        borderColor: '#9C8DCE'
      }
    }, {
      name: '离家出走',
      itemStyle: {
        color: '#8A7DB7',
        borderColor: '#8A7DB7'
      }
    }, {
      name: '忍受',
      itemStyle: {
        color: '#7B71A5',
        borderColor: '#7B71A5'
      }
    }, {
      name: '抵触',
      itemStyle: {
        color: '#6C6494',
        borderColor: '#6C6494'
      }
    }, {
      name: '躲避',
      itemStyle: {
        color: '#5B557F',
        borderColor: '#5B557F'
      }
    }, {
      name: '自责',
      itemStyle: {
        color: '#5B557F',
        borderColor: '#5B557F'
      }
    }, {
      name: '无描述',
      itemStyle: {
        color: '#4C476C',
        borderColor: '#4C476C'
      }
    }, {
      name: '无年龄数据',
      itemStyle: {
        color: '#839797',
        borderColor: '#839797'
      }
      // 4d6990
    }, {
      name: '求助父母',
      itemStyle: {
        color: '#A4C4CB',
        borderColor: '#A4C4CB'
      }
    }, {
      name: '求助亲戚',
      itemStyle: {
        color: '#8FACB3',
        borderColor: '#8FACB3'
      }
    }, {
      name: '求助老师',
      itemStyle: {
        color: '#7A939B',
        borderColor: '#7A939B'
      }
    }, {
      name: '报警',
      itemStyle: {
        color: '#6B828A',
        borderColor: '#6B828A'
      }
    }, {
      name: '求助路人等',
      itemStyle: {
        color: '#54676E',
        borderColor: '#54676E'
      }
    }, {
      name: '求助网络',
      itemStyle: {
        color: '#44545A',
        borderColor: '#44545A'
      }
    }, {
      name: '求助社会组织',
      itemStyle: {
        color: '#44545A',
        borderColor: '#44545A'
      }
    }],
    links: [{
      source: '0岁',
      target: '未求助',
      value: 5
    }, {
      source: '1-3岁',
      target: '未求助',
      value: 14
    }, {
      source: '4-6岁',
      target: '未求助',
      value: 33
    }, {
      source: '7-9岁',
      target: '未求助',
      value: 33
    }, {
      source: '7-9岁',
      target: '求助',
      value: 5
    }, {
      source: '10-12岁',
      target: '求助',
      value: 15
    }, {
      source: '10-12岁',
      target: '未求助',
      value: 26
    }, {
      source: '13-15岁',
      target: '求助',
      value: 8
    }, {
      source: '13-15岁',
      target: '未求助',
      value: 15
    }, {
      source: '16-18岁',
      target: '求助',
      value: 4
    }, {
      source: '16-18岁',
      target: '未求助',
      value: 3
    }, {
      source: '10-12岁',
      target: '未求助',
      value: 3
    }, {
      source: '无年龄数据',
      target: '求助',
      value: 3
    }, {
      source: '无年龄数据',
      target: '未求助',
      value: 14
    }, {
      source: '求助',
      target: '求助父母',
      value: 8
    }, {
      source: '求助',
      target: '求助路人等',
      value: 3
    }, {
      source: '求助',
      target: '报警',
      value: 16
    }, {
      source: '求助',
      target: '求助老师',
      value: 3
    }, {
      source: '求助',
      target: '求助亲戚',
      value: 3
    }, {
      source: '求助',
      target: '求助社会组织',
      value: 1
    }, {
      source: '求助',
      target: '求助网络',
      value: 1
    }, {
      source: '未求助',
      target: '抵触',
      value: 4
    }, {
      source: '未求助',
      target: '躲避',
      value: 3
    }, {
      source: '未求助',
      target: '害怕',
      value: 22
    }, {
      source: '未求助',
      target: '离家出走',
      value: 13
    }, {
      source: '未求助',
      target: '求饶',
      value: 4
    }, {
      source: '未求助',
      target: '忍受',
      value: 10
    }, {
      source: '未求助',
      target: '无意识',
      value: 3
    }, {
      source: '未求助',
      target: '隐瞒',
      value: 10
    }, {
      source: '未求助',
      target: '自责',
      value: 2
    }, {
      source: '未求助',
      target: '无描述',
      value: 72
    }],
    lineStyle: {
      normal: {
        color: 'source',
        curveness: 0.5
      }
    }
  }
};

jl2.setOption(option);
$(window).resize(function () {
  jl2.resize();
});
