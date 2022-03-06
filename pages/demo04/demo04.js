// pages/demo04/demo04.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        num: 0
    },

    handleInput(e) {
        console.log(e.detail.value);
        this.setData({
            num: e.detail.value
        })
    },

    handleTap(e) {
        const operation = e.currentTarget.dataset.operation;
        this.setData({
            num: this.data.num - 0 + operation
        })
    }
})