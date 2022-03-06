// This is our App Service.
// This is our data.
var helloData = {
    name: 'Weixin'
}

// Register a Page.
Page({
    data: {
        msg: "helloData",
        person:{
            age:"99",
            height:"165",
            name:"boy"
        },
        list:[
            {
                name:"Hello",
                id:0
            },
            {
                name:"nihao",
                id:1
            },
            {
                name:"world",
                id:2
            }
        ]
    },
    changeName: function (e) {
        // sent data change to view
        this.setData({
            name: 'MINA'
        })
    }
})