// components/Tabs/Tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // aaa: {
        //     type: String,
        //     value: ""
        // }
        tabs: {
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     * 页面js文件，存放事件回调函数在data同层级下
     * 组件js文件，存放事件回调函数在methods中
     */
    methods: {
        hanldeItemTap(e) {
            // 在methods中绑定点击事件
            // 获取被点击的索引
            // 获取原数组
            // 对数组循环
            console.log("click me");
            const { index } = e.currentTarget.dataset;
            this.triggerEvent("itemChange", { index });
            // let { tabs } = this.data;
            // 相当于 let tabs = this.data.tabs;
            // tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);

            // this.setData({
            //     tabs
            // });
        }
    }
})