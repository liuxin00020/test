import Vue from 'vue/dist/vue.js'
import {MultiCheckOptions} from "../asset/const";
import MultiCheckList from "../component/MultiCheckList.vue";

new Vue({
    el: '#multiCheckApp',
    components: {MultiCheckList},
    data: function () {
        return {
            multiCheckOptions1: MultiCheckOptions,
            checkedVal1: [1],
            multiCheckOptions2: MultiCheckOptions,
            checkedVal2: [1,2],
            multiCheckOptions3: MultiCheckOptions,
            checkedVal3: [1,2],
        }
    }
});
