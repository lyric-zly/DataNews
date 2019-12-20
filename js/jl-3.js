var rkkchart=echarts.init(document.getElementById('main2-3'),'vintage');
option = {
    title: {
        text: '知情人措施',
        textStyle: {
            fontSize: 20
        },
        subtext:'数据来源：慧科新闻数据库，检索时间为2016年3月1日到2019年11月27日\n数据说明：统计了知情人的表现，共得到有效数据173个',
        subtextStyle: {
            fontSize: 12,
            // bottom:30,
        },
        itemGap:450,
        x: 'center'
    },
    backgroundColor: "#FFFFFF",
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },

    animation: true,
    series: {
        layoutIterations: 0,
        type: 'sankey',
        top:50,
        left:110,
        layout:'none',
        focusNodeAdjacency: 'allEdges',
        data: [
            {
                name: '共同居住',
                itemStyle: {
                    color: '#B96064',
                    borderColor:'#B96064'
                }
            }, {
                name: '不共同居住',
                itemStyle: {
                    color: '#4d6990',
                    borderColor:'#4d6990'
                }
            }, {
                name: '父亲',
                itemStyle: {
                    color: '#4d6990',
                    borderColor:'#4d6990'
                }
            }, {
                name: '母亲',
                itemStyle: {
                    color: '#B96064',
                    borderColor:'#B96064'
                }
            },{
                name: '亲属（不包含父母）',
                itemStyle: {
                    color: '#6965A6',
                    borderColor:'#6965A6'
                }
            }, {
                name: '父亲 ',
                itemStyle: {
                    color: '#4d6990',
                    borderColor:'#4d6990'
                }
            }, {
                name: '母亲 ',
                itemStyle: {
                    color: '#B96064',
                    borderColor:'#B96064'
                }
            },{
                name: '亲属（不包含父母） ',
                itemStyle: {
                    color: '#6965A6',
                    borderColor:'#6965A6'
                }
            }, {
                name: '学校',
                itemStyle: {
                    color: '#7899CF',
                    borderColor:'#7899CF'
                }
            }, {
                name: '邻居',
                itemStyle: {
                    color: '#B5799E',
                    borderColor:'#B5799E'
                }
            }, {
                name: '未采取措施',
                itemStyle: {
                    color: '#B96064',
                    borderColor:'#B96064'
                }
            }, {
                name: '要求撤销对施暴者的上诉',
                itemStyle: {
                    color: '#8A484C',
                    borderColor:'#8A484C'
                }
            }, {
                name: '报警',
                itemStyle: {
                    color: '#799AD0',
                    borderColor:'#799AD0'
                }
            }, {
                name: '求助妇联、法院等组织',
                itemStyle: {
                    color: '#6D8ABB',
                    borderColor:'#6D8ABB'
                }
            }, {
                name: '联系家长并劝说',
                itemStyle: {
                    color: '#5D76A2',
                    borderColor:'#5D76A2'
                }
            }, {
                name: '劝说',
                itemStyle: {
                    color: '#4F668C',
                    borderColor:'#4F668C'
                }
            }, {
                name: '安置未成年人',
                itemStyle: {
                    color: '#4F668C',
                    borderColor:'#4F668C'
                }
            }, {
                name: '网络曝光',
                itemStyle: {
                    color: '#425575',
                    borderColor:'#425575'
                }
            }, {
                name: '与施暴者对抗',
                itemStyle: {
                    color: '#425575',
                    borderColor:'#425575'
                }
            }, {
                name: '要求法院变更抚养权',
                itemStyle: {
                    color: '#425575',
                    borderColor:'#425575'
                }
            }],
        links: [{
            source: '共同居住',
            target: '父亲',
            value: 20
        }, {
            source: '共同居住',
            target: '母亲',
            value: 15
        },{
            source: '共同居住',
            target: '亲属（不包含父母）',
            value: 9
        }, {
            source: '父亲',
            target: '未采取措施',
            value: 20
        },{
            source: '母亲',
            target: '报警',
            value: 6
        }, {
            source: '母亲',
            target: '求助妇联、法院等组织',
            value: 2
        }, {
            source: '母亲',
            target: '未采取措施',
            value: 7
        }, {
            source: '亲属（不包含父母）',
            target: '报警',
            value: 2
        }, {
            source: '亲属（不包含父母）',
            target: '未采取措施',
            value: 6
        }, {
            source: '亲属（不包含父母）',
            target: '与施暴者对抗',
            value: 1
        }, {
            source: '不共同居住',
            target: '学校',
            value: 24
        }, {
            source: '不共同居住',
            target: '邻居',
            value: 31
        }, {
            source: '不共同居住',
            target: '亲属（不包含父母） ',
            value: 16
        }, {
            source: '不共同居住',
            target: '父亲 ',
            value: 3
        }, {
            source: '不共同居住',
            target: '母亲 ',
            value: 23
        },{
            source: '学校',
            target: '联系家长并劝说',
            value: 9
        }, {
            source: '学校',
            target: '求助妇联、法院等组织',
            value: 1
        },  {
            source: '学校',
            target: '报警',
            value: 14
        }, {
            source: '邻居',
            target: '报警',
            value: 10
        }, {
            source: '邻居',
            target: '劝说',
            value: 6
        }, {
            source: '邻居',
            target: '安置未成年人',
            value: 2
        }, {
            source: '邻居',
            target: '网络曝光',
            value: 3
        }, {
            source: '邻居',
            target: '与施暴者对抗',
            value: 1
        },  {
            source: '邻居',
            target: '未采取措施',
            value: 9
        }, {
            source: '亲属（不包含父母） ',
            target: '报警',
            value: 8
        }, {
            source: '亲属（不包含父母） ',
            target: '未采取措施',
            value: 4
        }, {
            source: '亲属（不包含父母） ',
            target: '网络曝光',
            value: 1
        }, {
            source: '亲属（不包含父母） ',
            target: '求助妇联、法院等组织',
            value: 1
        }, {
            source: '亲属（不包含父母） ',
            target: '要求法院变更抚养权',
            value: 2
        }, {
            source: '父亲 ',
            target: '报警',
            value: 1
        }, {
            source: '父亲 ',
            target: '未采取措施',
            value: 1
        }, {
            source: '父亲 ',
            target: '要求撤销对施暴者的上诉',
            value: 1
        }, {
            source: '母亲 ',
            target: '报警',
            value: 11
        }, {
            source: '母亲 ',
            target: '求助妇联、法院等组织',
            value: 3
        }, {
            source: '母亲 ',
            target: '未采取措施',
            value: 5
        }, {
            source: '母亲 ',
            target: '网络曝光',
            value: 3
        }, {
            source: '母亲 ',
            target: '要求撤销对施暴者的上诉',
            value: 1
        }],
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0.3
            }
        }
    }
};

rkkchart.setOption(option,window.onresize=rkkchart.resize);

