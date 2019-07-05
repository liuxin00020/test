import Vue from 'vue/dist/vue.js'
import echarts from 'echarts';
import {list} from '../asset/list.json'

Vue.prototype.$echarts = echarts;
let app = new Vue({
    el: '#app',
    data: {
        list: list, // 模拟数据
        newList: [], // 用于分页显示数据
        pageCount: 8, // 每页显示的个数
    },
    created() {
        this.newList = this.list.slice(0, this.pageCount); // 初始化第一页数据
    },
    mounted() {
        this.loadBar(this.newList); // 加载echarts
        this.autoPlay(); // 自动翻页
    },
    methods: {
        // echarts柱状图加载
        loadBar(list) {
            let regions = [], policeNums = [], criminalNums = [];

            // 遍历数据列表，封装echarts的数据格式
            list.map((item) => {
                regions.unshift(item.region); // 地区
                policeNums.unshift(item.policeNum); // 警察人数
                criminalNums.unshift(item.criminalNum); // 罪犯人数
            });

            // 若末尾页不足8条，则填充0，防止样式错乱
            let len = regions.length;
            for (let i = 0; i < 8 - len; i++) {
                regions.unshift(0);
                policeNums.unshift(0);
                criminalNums.unshift(0);
            }
            // echarts数据绑定开始
            let chartDom = this.$echarts.init(document.getElementById("regionBar"));
            chartDom.setOption({
                color: ["#f5a623", "#fff"],
                grid: [{//外框
                    top: '6.2%',
                    left: '0',
                    right: '0',
                    bottom: '6.4%',
                    containLabel: false,
                }],
                calculable: true,
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: [{
                    type: 'value',
                    splitLine: {show: false},
                    axisLabel: {show: false},
                    axisTick: {show: false},//不显示刻度
                    axisLine: {show: false},
                    boundaryGap: false,//坐标轴两边留白策略
                }],
                yAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    position: 'top',
                    data: regions,
                    splitLine: {show: false},
                    axisLabel: {show: false},
                    axisTick: {show: false},//不显示刻度
                    axisLine: {show: false},
                }],
                series: [
                    {
                        type: 'bar',
                        data: policeNums,
                        barWidth: 2,
                    },
                    {
                        type: 'bar',
                        data: criminalNums,
                        barWidth: 2,
                        barGap: '6px' // 两个数据之间，间隔5px
                    }
                ]
            });
        },

        // 自动翻页
        autoPlay() {
            let playTime = 2000, // 播放间隔事件
                timer = null,
                page = 1,
                totalPage = this.list.length % this.pageCount == 0 ? this.list.length / this.pageCount : parseInt(this.list.length / this.pageCount) + 1; // 总页数，每页显示8条

            // 播放函数
            const play = () => {
                page++;
                if (page > totalPage) {
                    page = 1;
                }
                this.newList = this.list.slice((page - 1) * this.pageCount, page * this.pageCount); // 截取数组，用于展示当前页的数据
                this.loadBar(this.newList); // 重新加载柱状图
            }

            // 定时任务，翻页
            timer = setInterval(play, playTime);

            // 鼠标悬浮事件，移上去，暂停定时任务
            this.$el.onmouseover = (event) => {
                clearInterval(timer);
            };

            // 鼠标移开，播放继续
            this.$el.onmouseleave = (event) => {
                timer = setInterval(play, playTime);
            }
        },
    }
});