define(['app'],function (app) {
    app.controller('chatsCtrl', ['$scope','$ionicPopup', '$state', function($scope, $ionicPopup, $state) {
        
        var LanguageChart = echarts.init(document.getElementById('vertical'));
        option = {
            title: {
                text: '期望退伍补贴',
                subtext: '20号发起'
            },
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '10%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['5W-10W', '10W-20W', '20W-30W', '30W+'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'选择数量',
                    type:'bar',
                    barWidth: '60%',
                    data:[4, 20, 40, 10]
                }
            ]
        };
        LanguageChart.setOption(option);

        app.title = '横向展示';
        var LanguageChart = echarts.init(document.getElementById('horizon'));
        option2 = {
            title: {
                text: '期望得到的待遇',
                subtext: '20号发起'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '10%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data : ['5W-10W', '10W-20W', '20W-30W', '30W+'],
            },
            series: [
                {
                    type: 'bar',
                    data:[4, 20, 40, 10]
                }
            ]
        };
        LanguageChart.setOption(option2);

    }]);
   
});