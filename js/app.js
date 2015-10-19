/**
 * Created by zhougonglai on 15/9/28.
 */
(function(){
window.onscroll=function(){
    updateSlider();
};
window.onload=function(){
    animateLogo();
    animateRobot();
    updateSlider();
    addSmoothScrolling();
    addScrollingBling();
};


/* TweenMax.to(object,duration,options) - 自定义属性动画：由 CSS 样式表中的值变化为自定义的值。*/
/* logo动画   */
/* TweenMax.fromTo(
 ".react-logo",
 2,
 {css:{"y":"0%",}},
 {css:{"y":"10%",},
 repeat:-1,          // 永久重复动画的选项
 yoyo:true,          // 反转、重新运行动画的选项
 ease:Power2.easeInOut
 });*/

//     robot 动画
function animateRobot(){
    var t = new TimelineMax({yoyo: true, repeat: -1});
    t.to(".robot",1,{rotation: "-67deg"})
        .to(".robot",1,{rotation: "-23deg"});
}
// logo 动画
function animateLogo(){
    TweenMax.fromTo(
        ".react-logo",
        2,
        {css:{"y":"0%"}},
        {css:{"y":"10%"},
            repeat:-1,
            yoyo:true,
            ease:Power2.easeInOut});
}
//滚动动画
function scrollToElement(element){
//    var topOfElement = element.offsetTop;//.getBoundingClientRect()
    var choice = document.body.querySelector(element.getAttribute("href"));
    TweenMax.to(window,1,{
        scrollTo:{
            y:choice.offsetTop
        },
        ease:Power2.easeInOut
    });
}
//选择器，获取 小豆豆 DOM 并获取目标DOM
function updateSlider() {
    var links = document.querySelectorAll("#slider-control a");
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var selectorTarget = document.querySelector(link.getAttribute("href"));
        var sectionTop = selectorTarget.offsetTop;
        var sectionBottom = sectionTop + window.innerHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            link.className = "active";
        } else {
            link.className = "";
        }
    }
}
//小豆豆 点击事件
function addSmoothScrolling(){
    var links = document.querySelectorAll("#slider-control a");
    for(var i = 0;  i<links.length; i++){
        (function (_i) {
            var link = links[_i];
            link.addEventListener("click",function(event){
                event.preventDefault();
                scrollToElement(this);
            });
        })(i)
    }
}

function addScrollingBling(){
    var controller = new ScrollMagic.Controller();

    var fadeOutBackground = new ScrollMagic.Scene({
        triggerElement : "#touch",//触发目标
        triggerHook : "onEnter",//方式
        duration:"100%"//动画进程
    })//动画(目标,应该是比例,属性)
        .setTween(".pta.overlay",1,{opacity:1}).addTo(controller);

    var  moveIPhone = new ScrollMagic.Scene({
        triggerElement:"#touch",
        triggerHook:"onEnter",
        duration:"100%"
    })
        .addTo(controller)
       /**/
        .setTween("#ihpone-overlay",1,{width:"50%", y:0});

    var pinIPhone = new ScrollMagic.Scene({
        triggerElement:"#async",
        triggerHook:"onEnter",
        duration:"100%"
    }).addTo(controller)
        //粘连目标
        .setPin("#ihpone-overlay");




}


}());

/*function updateSliderControl(){
 var links = document.querySelectorAll("#slider-control a");
 for( var i = 0;i < links.length ; i++){
 var link = links[i];
 var section = document.querySelector()
 }
 }*/
