/**
 * Created by john on 2017/9/12.
 */
window.onload=function(){
    /*购物车点击显示事件*/
    function Car() {
        var oTopNav = document.getElementById('top_nav');
        var oTopNav2 = document.getElementById('car_nav');
        var oNavTab = getClass(oTopNav,'nav_tab');
        var oNavTab2 = getClass(oTopNav2,'nav_tab2');
        var oP = oTopNav.getElementsByTagName('p');
        var oP2 = oTopNav2.getElementsByTagName('p');
        var oNavD  = document.getElementById('nav_detail');
        var oNavD2  = document.getElementById('nav_detail2');
        var oNdList  = document.getElementById('nd_list');
        var oNdList2  = document.getElementById('nd_list2');
        var oNdLi = oNdList.getElementsByTagName('li');
        var oNdLi2 = oNdList2.getElementsByTagName('li');
        var iNum = 0;
        var iNum2 = 0;
        var off = true;
        var off2 = true;
        for(var i=0; i<oNavTab.length; i++) {
            oNavTab[i].index = i;
            oNavTab2[i].inte=i;
            oNavTab[i].onclick = function (ev) {
                var ev = ev || window.event;
                if (iNum != this.index) {
                    off = true;
                }
                if (off) {
                    for (var j = 0; j < oP.length; j++) {
                        oP[j].style.background = "url('img/img/jt_up.png') no-repeat";
                        oNdLi[j].style.display = 'none';
                    }
                    oP[this.index].style.background = "url('img/img/jt_down.png') no-repeat";
                    oNavD.style.display = 'block';
                    oNdLi[this.index].style.display = 'block';
                    oNavD.style.left = this.offsetLeft + this.offsetWidth / 2 - oNavD.offsetWidth / 2 + 'px';
                    off = false;
                } else {
                    oNavD.style.display = 'none';
                    oP[this.index].style.background = "url('img/img/jt_up.png') no-repeat";
                    off = true;
                }
                iNum = this.index;
                ev.cancelBubble = true;                //阻止冒泡
            };
            oNavTab2[i].onclick = function (ev) {
                var ev = ev || window.event;
                if (iNum2 != this.index) {
                    off2 = true;
                }
                if (off2) {
                    for (var j = 0; j < oP2.length; j++) {
                        oP2[j].style.background = "url('img/img/jt_up.png') no-repeat";
                        oNdLi2[j].style.display = 'none';
                    }
                    oP2[this.inte].style.background = "url('img/img/jt_down.png') no-repeat";
                    oNavD2.style.display = 'block';
                    oNdLi2[this.inte].style.display = 'block';
                    oNavD2.style.left = this.offsetLeft + this.offsetWidth / 2 - oNavD2.offsetWidth / 2 + 'px';
                    off2 = false;
                } else {
                    oNavD2.style.display = 'none';
                    oP2[this.inte].style.background = "url('img/img/jt_up.png') no-repeat";
                    off2 = true;
                }
                iNum2 = this.inte;
                ev.cancelBubble = true;
            };
            document.onclick = function (ev) {
                var ev = ev || window.event;
                var t = ev.target || ev.srcElement;
                if (t != oNavTab && t != oNdList &&t!=oNavTab2 &&t!=oNdList2) {              //判断鼠标点击事件
                    off = true;
                    off2 =true;
                    for (var j = 0; j < oP.length; j++) {
                        oP[j].style.background = "url('img/img/jt_up.png') no-repeat";
                        oP2[j].style.background = "url('img/img/jt_up.png') no-repeat";
                    }
                    oNavD.style.display = 'none';
                    oNavD2.style.display = 'none';
                }
            };
        }
    }
    Car();

    /*banner图片轮播*/
    function Banner() {
        var oBan = document.getElementById("banner");
        var oBanPic = oBan.children;
        var oPoint = document.getElementById("point").getElementsByTagName("li");
        var oBnMain = document.getElementById("banner_main");
        var i = 0;
        var j = 0;
        var timer = null;
        oBanPic[i].style.opacity = 1;
        oBanPic[i].style.filter = "alpha(opacity=" + 100 + ")";
        oPoint[i].style.background = "url('img/img/point1.png') no-repeat";
        for (i = 0; i < oPoint.length; i++) {
            oPoint[i].index = i;
            oPoint[i].onclick = function () {
                j = this.index;
                for (i = 0; i < oPoint.length; i++) {
                    animate(oBanPic[i], {"opacity": 0});
                    oPoint[i].style.background = "url('img/img/point2.png') no-repeat";
                }
                animate(oBanPic[this.index], {"opacity": 100});
                oPoint[this.index].style.background = "url('img/img/point1.png') no-repeat";
            }
        }
        function play() {
            if (j < oPoint.length - 1) {
                animate(oBanPic[j], {"opacity": 0});
                oPoint[j].style.background = "url('img/img/point2.png') no-repeat";
                animate(oBanPic[j + 1], {"opacity": 100});
                oPoint[j + 1].style.background = "url('img/img/point1.png') no-repeat";
                j++;
            }
            else {
                animate(oBanPic[j], {"opacity": 0});
                oPoint[j].style.background = "url('img/img/point2.png') no-repeat";
                animate(oBanPic[0], {"opacity": 100});
                oPoint[0].style.background = "url('img/img/point1.png') no-repeat";
                j = 0;
            }
        }

        timer = setInterval(play, 3000);
        oBnMain.onmouseover=function(){clearInterval(timer)};
        oBnMain.onmouseout=function(){timer = setInterval(play, 3000);};
    }
    Banner();

    /*菜单栏弹出*/
    function Menu() {
        var oBn = document.getElementById("bn_main");
        var oBnLi = oBn.getElementsByTagName("li");
        var oBd = document.getElementById("bn_detail");
        var oBdLi = oBd.getElementsByTagName("li");
        var i = 0;
        var height = 0;

        for (i = 0; i < oBnLi.length; i++) {
            oBnLi[i].style.top = height + "px";
            oBdLi[i].style.top = oBnLi[i].offsetTop + "px";
            height += oBnLi[0].offsetHeight;
            oBnLi[i].index = i;
            oBdLi[i].index = i;
            oBnLi[i].onmouseover = function () {
                this.style.background="#fff";
                this.childNodes[0].style.color="#8b8b8b";
                this.getElementsByTagName("div")[0].style.background="url('img/img/icon.png') no-repeat -74px 0";
                for(var i=0;i<this.getElementsByTagName("a").length;i++) {
                    this.getElementsByTagName("a")[i].style.color = "#8b8b8b";
                }
                oBdLi[this.index].style.display = "block";
            }
            oBdLi[i].onmouseover = function () {
                this.style.display = "block";
                oBnLi[this.index].style.background="#fff";
                oBnLi[this.index].childNodes[0].style.color="#8b8b8b";
                oBnLi[this.index].getElementsByTagName("div")[0].style.background="url('img/img/icon.png') no-repeat -74px 0";
                for(var i=0;i<oBnLi[this.index].getElementsByTagName("a").length;i++) {
                    oBnLi[this.index].getElementsByTagName("a")[i].style.color = "#8b8b8b";
                }
            }
            oBdLi[i].onmouseout = function () {
                this.style.display = "none";
                oBnLi[this.index].style.background="#6cc9ff";
                oBnLi[this.index].childNodes[0].style.color="#fff";
                oBnLi[this.index].getElementsByTagName("div")[0].style.background="url('img/img/icon.png') no-repeat -84px 0";
                for(var i=0;i<oBnLi[this.index].getElementsByTagName("a").length;i++) {
                    oBnLi[this.index].getElementsByTagName("a")[i].style.color = "#fff";
                }
            }
            oBnLi[i].onmouseout = function () {
                this.style.background="#6cc9ff";
                this.childNodes[0].style.color="#fff";
                this.getElementsByTagName("div")[0].style.background="url('img/img/icon.png') no-repeat -84px 0";
                for(var i=0;i<this.getElementsByTagName("a").length;i++) {
                    this.getElementsByTagName("a")[i].style.color = "#fff";
                }
                oBdLi[this.index].style.display = "none";
            }
        }
    }
    Menu();

    /*选项卡*/
    function Choose() {
        var oCh = document.getElementById('company_ch').getElementsByTagName("li");
        var oChCar = document.getElementById("ch_car").getElementsByTagName("div");
        oCh[0].className = "active";
        oChCar[0].style.display = "block";
        var i = 0;
        var j = 0;

        for (i = 0; i < oCh.length; i++) {
            oCh[i].index = i;
            oCh[i].onclick = function () {
                for (i = 0; i < oCh.length; i++) {
                    oCh[i].className = "";
                    oChCar[i].style.display = "none";
                }
                this.className = "active";
                oChCar[this.index].style.display = "block";
                j = this.index;
            }
        }
    }
    Choose();

    /*顶部导航栏的显示 与 返回顶部效果*/
    function TopNav(){
        var oBtn = document.getElementById("top");
        var oTopNav = document.getElementById("fix_nav");
        var back_off=true;
        var oScroTop=0;
        var back_timer=null;

        window.onscroll=function(){
            oScroTop= document.documentElement.scrollTop || document.body.scrollTop;
            if(oScroTop>150){
                oTopNav.style.display="block";
                oBtn.style.display='block'
                animate(oTopNav,{"opacity":100});
            }
            else{
                oTopNav.style.display="none";
                oBtn.style.display='none'
                animate(oTopNav,{"opacity":0});
            }
            if(!back_off){
                clearInterval(back_timer);
            }
            back_off=false;
        }
        oBtn.onclick=function(){
            function isIE() { //ie?
                if (!!window.ActiveXObject || "ActiveXObject" in window){
                    return true;
                }else{
                    return false;
                }
            }
            if(isIE()){
                var browser=navigator.appName
                var b_version=navigator.appVersion
                var version=b_version.split(";");
                var trim_Version=version[1].replace(/[ ]/g,"");
                /*IE8兼容，直接返回顶部*/
                if(browser=="Microsoft Internet Explorer"  &&trim_Version=="MSIE8.0"){
                    if(document.documentElement.scrollTop){
                        document.documentElement.scrollTop=0;
                    }else{
                        document.body.scrollTop=0;
                    }
                }
                else{
                    back_timer = setInterval(function () {
                        var backTop = Math.floor(oScroTop / 4);
                        if (backTop == 0) {
                            clearInterval(back_timer)
                        } else {
                            if (document.documentElement.scrollTop) {
                                document.documentElement.scrollTop -= backTop;
                            } else {
                                document.body.scrollTop -= backTop;
                            }
                            back_off = true;
                        }
                    }, 30)
                }
            }
            else {
                back_timer = setInterval(function () {
                    var backTop = Math.floor(oScroTop / 4);
                    if (backTop == 0) {
                        clearInterval(back_timer)
                    } else {
                        if (document.documentElement.scrollTop) {
                            document.documentElement.scrollTop -= backTop;
                        } else {
                            document.body.scrollTop -= backTop;
                        }
                        back_off = true;
                    }
                }, 30)
            }
        }
    }
    TopNav();

    /*图片无缝滚动*/
    function Roll(){
        var nav=document.getElementById("roll_box");
        var nul=document.getElementById("roll");
        //var list=nul.getElementsByTagName("li");
        var i=0
        var time=null
        nul.innerHTML+= nul.innerHTML           //ul列表内容扩大一倍
        function play(){
            if(nul.offsetLeft==-nul.offsetWidth/2){
                nul.style.left=0
            }
            nul.style.left=nul.offsetLeft-1+"px"
        }
        time=setInterval(play,10)
        nav.onmouseover=function(){clearInterval(time)};
        nav.onmouseout=function(){clearInterval(time);time=setInterval(play,10)};
    }
    Roll();
}