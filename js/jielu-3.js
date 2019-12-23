var rkkchart4=echarts.init(document.getElementById('main2-3'),'vintage');
option = {
    title: {
        text: '知情人采取的措施',
        textStyle: {
            fontSize: 20
        },
        // \n数据说明：统计了知情人的表现，共得到有效数据173个
        // subtext:'数据来源：慧科新闻数据库，检索时间为2016年3月1日到2019年11月27日',
        // subtextStyle: {
        //     fontSize: 12,
        //                         // bottom:30,
        // },
        x: 'center',
        left:'center',

    },
    backgroundColor: "#eeeeee",
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },

    animation: true,
    series: {
        layoutIterations: 0,
        type: 'sankey',
        top:50,
        left:'10%',
        layout:'none',
        focusNodeAdjacency: 'allEdges',
        data: [
            {
                name: '共同居住',
                itemStyle: {
                    color: '#c5ccd2',
                    borderColor:'#c5ccd2'
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
                    color: '#A0BFD4',
                    borderColor:'#A0BFD4'
                    // 4d6990
                    // blue 7d92b4

                }
            }, {
                name: '母亲',
                itemStyle: {
                    color: '#c66e5d',
                    borderColor:'#c66e5d'
                    // 红 B96064
                }
            },{
                name: '亲属',
                itemStyle: {
                    color: '#4d6990',
                    borderColor:'#4d6990'
                    // A0BFD4
                }
            }, {
                name: '父亲 ',
                itemStyle: {
                    color: '#A0BFD4',
                    borderColor:'#A0BFD4'
                }
            }, {
                name: '母亲 ',
                itemStyle: {
                    color: '#c66e5d',
                    borderColor:'#c66e5d'
                }
            },{
                name: '亲属 ',
                itemStyle: {
                    color: '#4d6990',
                    borderColor:'#4d6990'
                }
            }, {
                name: '学校',
                itemStyle: {
                    color: '#839797',
                    borderColor:'#839797'
                }
            }, {
                name: '邻居',
                itemStyle: {
                    color: '#8D8D8E',
                    borderColor:'#8D8D8E'
                }
            }, {
                name: '未采取措施',
                itemStyle: {
                    color: '#c5ccd2',
                    borderColor:'#c5ccd2'
                }
            }, {
                name: '要求撤销对\n施暴者上诉',
                itemStyle: {
                    color: '#6c8bc4',
                    borderColor:'#6c8bc4'
                }
            }, {
                name: '报警',
                itemStyle: {
                    color: '#799AD0',
                    borderColor:'#799AD0'
                }
            }, {
                name: '求助组织',
                itemStyle: {
                    color: '#6D8ABB',
                    borderColor:'#6D8ABB'
                }
            }, {
                name: '劝说家长',
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
                name: '安置孩子',
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
                name: '对抗施暴者',
                itemStyle: {
                    color: '#425575',
                    borderColor:'#425575'
                }
            }, {
                name: '变更抚养权',
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
            target: '亲属',
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
            target: '求助组织',
            value: 2
        }, {
            source: '母亲',
            target: '未采取措施',
            value: 7
        }, {
            source: '亲属',
            target: '报警',
            value: 2
        }, {
            source: '亲属',
            target: '未采取措施',
            value: 6
        }, {
            source: '亲属',
            target: '对抗施暴者',
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
            target: '亲属 ',
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
            target: '劝说家长',
            value: 9
        }, {
            source: '学校',
            target: '求助组织',
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
            target: '安置孩子',
            value: 2
        }, {
            source: '邻居',
            target: '网络曝光',
            value: 3
        }, {
            source: '邻居',
            target: '对抗施暴者',
            value: 1
        },  {
            source: '邻居',
            target: '未采取措施',
            value: 9
        }, {
            source: '亲属 ',
            target: '报警',
            value: 8
        }, {
            source: '亲属 ',
            target: '未采取措施',
            value: 4
        }, {
            source: '亲属 ',
            target: '网络曝光',
            value: 1
        }, {
            source: '亲属 ',
            target: '求助组织',
            value: 1
        }, {
            source: '亲属 ',
            target: '变更抚养权',
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
            target: '要求撤销对\n施暴者上诉',
            value: 1
        }, {
            source: '母亲 ',
            target: '报警',
            value: 11
        }, {
            source: '母亲 ',
            target: '求助组织',
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
            target: '要求撤销对\n施暴者上诉',
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

rkkchart4.setOption(option);
$(window).resize(function () {
    rkkchart4.resize();
});