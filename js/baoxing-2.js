
var rkkchart2=echarts.init(document.getElementById('main1-2'));
var bingcolors = ['#AA413F', '#DDAEAE', '#C67272', '#DDAEAE', '#b87771'];
// 正常、收养、单亲、留守、重组
var colors = ['#374258', '#A4394A', '#707EA5', '#D06983', '#afafaf', '#afafaf', '#afafaf'];
// 父亲、母亲、继父、继母、养母、其他亲属、其他人员
var bgColor = '#FFFFFF';
var lineColor = '#606060';

var itemStyle = {
    star7: {
        color: colors[6]
    },
    star6: {
        color: colors[5]
    },
    star5: {
        color: colors[4]
    },
    star4: {
        color: colors[3]
    },
    star3: {
        color: colors[2]
    },
    star2: {
        color: colors[1]
    },
    star1: {
        color: colors[0]
    }
};

var data = [{
    name: '正常',
    value:79,
    itemStyle: {
        normal: {
            color: bingcolors[0]
        }
    },
    children: [{
        name: ' ',
        value:43,
        children: [{
            name: '父亲',
            value:43
        }]
    },{
        name: '  ',
        value:32,
        children: [{
            name: '母亲',
            value:32,
        }]
    },{
        name: '      ',
        value:4,
        children: [{
            name: '其他亲属',
            value:4,
        }]
    }]
}, {
    name: '收养',
    value:7,
    itemStyle: {
        normal: {
            color: bingcolors[1]
        }
    },
    children: [{
        name: '     ',
        value:3,
        children: [{
            name: '养母',
            value:3,
        }]
    },{
        name: '      ',
        value:3,
        children: [{
            name: '其他亲属',
            value:3,
        }]
    },{
        name: '       ',
        value:1,
        children: [{
            name: '其他人员',
            value:1,
        }]
    }]
}, {
    name: '单亲',
    value:34,
    itemStyle: {
        normal: {
            color: bingcolors[2]
        }
    },
    children: [{
        name: ' ',
        value:23,
        children: [{
            name: '父亲',
            value:23,
        }]
    },{
        name: '  ',
        value:10,
        children: [{
            name: '母亲',
            value:10,
        }]
    },{
        name: '      ',
        value:1,
        children: [{
            name: '其他亲属',
            value:1,
        }]
    }]
}, {
    name: '留守',
    value:8,
    itemStyle: {
        normal: {
            color: bingcolors[3]
        }
    },
    children: [{
        name: '  ',
        value:2,
        children: [{
            name: '母亲',
            value:2,
        }]
    },{
        name: '      ',
        value:6,
        children: [{
            name: '其他亲属',
            value:6,
        }]
    }]
}, {
    name: '重组',
    value:44,
    itemStyle: {
        normal: {
            color: bingcolors[4]
        }
    },
    children: [{
        name: ' ',
        value:8,
        children: [{
            name: '父亲',
            value:8,
        }]
    },{
        name: '  ',
        value:5,
        children: [{
            name: '母亲',
            value:5,
        }]
    },{
        name: '   ',
        value:3,
        children: [{
            name: '继父',
            value:3,
        }]
    },{
        name: '    ',
        value:18,
        children: [{
            name: '继母',
            value:18,
        }]
    },{
        name: '       ',
        value:9,
        children: [{
            name: '其他人员',
            value:9,
        }]
    },{
        name: '      ',
        value:1,
        children: [{
            name: '其他亲属',
            value:1,
        }]
    }]
}
];

for (var j = 0; j < data.length; ++j) {
    var block = data[j].children;
    var bookScore = [];
    var bookScoreId;

    for (var star = 0; star < block.length; ++star) {
        var style = (function (name) {
            switch (name) {
                case ' ':
                    bookScoreId = 0;
                    return itemStyle.star1;
                case '  ':
                    bookScoreId = 1;
                    return itemStyle.star2;
                case '   ':
                    bookScoreId = 2;
                    return itemStyle.star3;
                case '    ':
                    bookScoreId = 2;
                    return itemStyle.star4;
                case '     ':
                    bookScoreId = 2;
                    return itemStyle.star5;
                case '      ':
                    bookScoreId = 2;
                    return itemStyle.star6;
                case '       ':
                    bookScoreId = 2;
                    return itemStyle.star7;
            }
        })(block[star].name);

        block[star].label = {
            // color: style.color,
            downplay: {
                opacity: 0.2
            }
        };
        // block.itemStyle = style;

        if (block[star].children) {
            style = {
                opacity: 1,
                color: style.color
            };
            // block.itemStyle = style;
            block[star].children.forEach(function (book) {
                // book.value = 1;
                book.itemStyle = style;

                book.label = {
                    color: style.color
                };

                var value = 1;
                // if (bookScoreId === 0 || bookScoreId === 2) {
                //     value = 5;
                // }

                // if (bookScore[bookScoreId]) {
                //     bookScore[bookScoreId].value += value;
                // }
                // else {
                //     bookScore[bookScoreId] = {
                //         color: colors[bookScoreId],
                //         value: value
                //     };
                // }
            });
        }
    }

    // block[j].itemStyle = {
    //     color: data[j].itemStyle.color
    // };


}

option = {
    backgroundColor: bgColor,
    color: colors,
    title: {
        text: '家庭结构及施暴者身份分布',
        textStyle: {
            fontSize: 23,
            // align: 'center'

        },

        x:'center'
    },
    series: [{
        type: 'sunburst',
        center: ['50%', 250],
        // padding:[5,30,15,5],//
        data: data,
        sort: function (a, b) {
            if (a.depth === 1) {
                return b.getValue() - a.getValue();
            }
            else {
                return a.dataIndex - b.dataIndex;
            }
        },
        label: {
            rotate: 'radial',
            color: bgColor
        },
        itemStyle: {
            borderColor: bgColor,
            borderWidth: 1
        },
        levels: [{}, {
            r0: 0,
            r: 108
        }, {
            r0: 115,
            r: 140,
            itemStyle: {
                shadowBlur: 1,
                shadowColor: lineColor,

                color: 'transparent'
            },
            label: {
                rotate: 'tangential',
                fontSize: 10,
                color: colors[0]
            }
        }, {
            r0: 130,
            r: 145,
            itemStyle: {
                shadowBlur: 80,
                // shadowColor: colors[0],
            },
            label: {
                position: 'outside',
                textShadowBlur: 5,
                // textShadowColor: '#333',
            },
            downplay: {
                label: {
                    opacity: 0.1
                }
            }
        }]
    }]
};

$(window).resize(function () {
    rkkchart2.resize();
});
rkkchart2.setOption(option);

