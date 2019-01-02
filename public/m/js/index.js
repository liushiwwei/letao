$(function () {
    // 初始化轮播图插件  可以实现自动轮播图
    //获得slider插件对象
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
    });
})