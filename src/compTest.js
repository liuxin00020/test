import Vue from 'vue/dist/vue.js'
import {MultiCheckOptions} from "../asset/const";
import MultiCheckList from "../component/MultiCheckList.vue";

new Vue({
    el: '#multiCheckApp',
    components: {MultiCheckList},
    data: function () {
        return {
            multiCheckOptions: [
                {'value': '1', 'name': '选项1'},
                {'value': '2','name': '选项2(禁用)','disabled': true},
                {'value': '3', 'name': '选项3'}],
            checkedVal1: [1],
            checkedVal2: [1, 2],
            checkedVal3: [1, 2],
        }
    }
});
