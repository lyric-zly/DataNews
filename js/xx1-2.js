var xx2 = echarts.init(document.getElementById('main1-2'));
var data = [{
  name: '正常',
  itemStyle: {
    color: '#7B71A5'
  },
  children: [{
    name: '父亲',
    value: 43,
    itemStyle: {
      color: '#4d6990'
    }
  }, {
    name: '母亲',
    value: 32,
    itemStyle: {
      color: '#B96064'
    }
  }, {
    name: '其他亲属',
    value: 4,
    itemStyle: {
      color: '#8D84BD'
    }
  }]
}, {
  name: '重组',
  itemStyle: {
    color: '#7899CF',
  },
  children: [{
    name: '父亲',
    value: 8,
    itemStyle: {
      color: '#4d6990'
    }
  }, {
    name: '母亲',
    value: 5,
    itemStyle: {
      color: '#B96064'
    }
  }, {
    name: '继父',
    value: 3,
    itemStyle: {
      color: '#748BBA'
    }
  }, {
    name: '继母',
    value: 18,
    itemStyle: {
      color: '#A25F61'
    }
  }, {
    name: '其他亲属',
    value: 1,
    itemStyle: {
      color: '#8D84BD'
    }
  }, {
    name: '其他人员',
    value: 9,
    itemStyle: {
      color: '#6B828A'
    }
  }]
}, {
  name: '单亲',
  itemStyle: {
    color: '#AB9AE1'
  },
  children: [{
    name: '父亲',
    value: 23,
    itemStyle: {
      color: '#4d6990'
    }
  }, {
    name: '母亲',
    value: 10,
    itemStyle: {
      color: '#B96064'
    }
  }, {
    name: '其他亲属',
    value: 1,
    itemStyle: {
      color: '#8D84BD'
    }
  }]
}, {
  name: '留守',
  itemStyle: {
    color: '#A4C4CB'
  },
  children: [{
    name: '母亲',
    value: 2,
    itemStyle: {
      color: '#B96064'
    }
  }, {
    name: '其他亲属',
    value: 6,
    itemStyle: {
      color: '#8D84BD'
    }
  }
  ]
}, {
  name: '收养',
  itemStyle: {
    color: '#9DD2FE'
  },
  children: [{
    name: '养母',
    value: 3,
    itemStyle: {
      color: '#A25F61'
    }
  }, {
    name: '其他亲属',
    value: 3,
    itemStyle: {
      color: '#8D84BD'
    }
  }, {
    name: '其他人员',
    value: 1,
    itemStyle: {
      color: '#6B828A',
    }
  }]
}];

option = {
  title: {
    text: '受暴未成年人家庭结构及施暴者身份',
    subtext: '数据来源：慧科新闻数据库，检索时间为2016年3月1日到2019年11月27日\n数据说明：\n(1)其他人员包括父亲女友、母亲男友、养母男友\n(2)正常家庭指父母亲婚姻关系正常并且与父母亲共同居住\n(3)共得到家庭结构有效数据156个，施暴者身份有效数据174个，\n19个家庭结构数据不详，1个施暴者身份数据不详',
    textStyle: {
      fontSize: 20
    },
    subtextStyle: {
      fontSize: 12,
      // bottom:30,
    },
    itemGap: 520,//主副标题间距
    x: 'center',
    textAlign: 'left',
  }, tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  textStyle: {
    fontSize: 13
  },
  series: {
    type: 'sunburst',
    highlightPolicy: 'ancestor',
    data: data,
    radius: [0, '95%'],
    sort: null,
    levels: [{}, {
      r0: '30%',
      r: '45%',
      itemStyle: {
        borderWidth: 0
      },
      label: {
        rotate: 'tangential'
      }
    }, {
      r0: '60%',
      r: '90%',
      label: {
        align: 'right'
      },
      itemStyle: {
        borderWidth: 0
      }
    }]
  }
};

xx2.setOption(option);
$(window).resize(function () {
  xx2.resize();
});
