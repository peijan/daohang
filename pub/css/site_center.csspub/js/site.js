<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>对不起，你访问的页面不存在</title>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="full-screen" content="yes"/>
    <meta name="screen-orientation" content="portrait"/>
    <meta name="x5-fullscreen" content="true"/>
    <meta name="360-fullscreen" content="true"/>
    <meta name="keywords" content="上网导航,网址大全,网址导航,hao123上网导航,hao123网址,hao123导航,hao123网址大全,hao123活动, 抽奖活动"/>
    <meta name="description"
          content="hao123是最具权威的中文上网导航，汇集最优秀的网站及资源。及时收录影视、音乐、小说、游戏等分类的网址和内容，让您的网络生活更简单精彩。上网，从hao123开始。"/>
    <style>
        /********reset********/
        body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, form, input, textarea, p, th, td {
            margin: 0;
            padding: 0;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
        }

        img {
            border: 0;
        }

        em, strong, th, b, i {
            font-style: normal;
            font-weight: normal;
        }

        ol, ul, dl {
            list-style: none;
        }

        th {
            text-align: left;
        }

        h1, h2, h3, h4, h5, h6 {
            font-size: 100%;
            font-weight: normal;
        }

        input, textarea, select, button {
            font-family: inherit;
            font-size: inherit;
            font-weight: inherit;
        }

        img, input, label, button {
            vertical-align: middle;
        }

        input:focus, button:focus, select:focus, textarea:focus {
            outline: none;
        }

        /*hack 修复firefox下不垂直居中*/
        a::-moz-focus-inner, input::-moz-focus-inner, button::-moz-focus-inner {
            border: 0;
        }

        button::-moz-focus-inner, input::-moz-focus-inner {
            padding: 0;
        }

        /********reset********/
        body, canvas, div {
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            -khtml-user-select: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        body {
            padding: 0;
            margin: 0;
            background: #ffeed7;
            font-size: 14px;
            font-family: arial, 'Hiragino Sans GB', 'Hiragino Sans GB W3', \5b8b\4f53;
        }

        a {
            color: #666;
            text-decoration: none;
        }

        a:hover {
            color: red;
        }

        /*头部样式 begin*/
        header {
            width: 100%;
            height: 50px;
            background: #fff;
        }

        header .container {
            width: 1000px;
            height: 30px;
            margin: 0 auto;
            padding: 10px 0;
            position: relative;
            vertical-align: top;
        }

        header .container div, header .container a {
            vertical-align: top;
            display: inline-block;
            *display: inline;
            *zoom: 1;
        }

        header .logo {
            width: 108px;
            height: 30px;
            background: url('res/errorcommon.png') no-repeat 0 -55px;
        }

        header .sitelist {
            width: 670px;
            height: 30px;
            line-height: 30px;
            padding: 0 50px;
        }

        header .sitelist .site {
            margin-right: 10px;
            width: 115px;
            height: 30px;
            line-height: 30px;
        }

        header .quicklink {
            height: 30px;
            line-height: 30px;
        }

        header .quicklink a {
            margin-left: 10px;
        }

        header .quicklink .callback {
            vertical-align: middle;
            width: 15px;
            height: 14px;
            background: url('res/errorcommon.png') no-repeat -147px -25px;
        }

        header .quicklink .phone {
            vertical-align: middle;
            width: 11px;
            height: 14px;
            background: url('res/errorcommon.png') no-repeat -133px -25px;
        }

        header .broswer {
            color: #0aa770;
            font-size: 12px;
        }

        header .broswer:hover {
            color: red;
        }

        /*头部样式 end*/

        .content {
            width: 1000px;
            height: 900px;
            margin: 0 auto;
            position: relative;
        }

        .chicken {
            position: relative;
            left: 487px;
            top: 637px;
            width: 159px;
            height: 222px;
            background: url('res/errorhigh.png') no-repeat 0 -371px;
        }

        .dialog {
            position: absolute;
            left: 650px;
            top: 392px;
            width: 353px;
            height: 349px;
            background: url('res/errorhigh.png') no-repeat 0 0;
            background-position: 0 0;
            opacity: 0;
            transition: opacity 1s ease-out;
            -moz-transition: opacity 1s ease-out; /* Firefox 4 */
            -webkit-transition: opacity 1s ease-out; /* Safari and Chrome */
            -o-transition: opacity 1s ease-out; /* Opera */
        }

        .home {
            position: absolute;
            left: 70px;
            top: 230px;
            width: 100px;
            height: 35px;
            background: url('res/errorhigh.png') no-repeat 0 0;
            background-position: 0 -852px;
        }

        .home:hover {
            background-position: 0 -898px;
        }

        .home:active {
            background-position: 0 -944px;
        }

        .goon {
            position: absolute;
            left: 184px;
            top: 230px;
            width: 100px;
            height: 35px;
            background: url('res/errorhigh.png') no-repeat 0 0;
            background-position: -120px -852px;
        }

        .goon:hover {
            background-position: -120px -898px;
        }

        .goon:active {
            background-position: -120px -944px;
        }

        .show {
            opacity: 1;
        }

        #gameContainer {
            position: absolute;
            width: 620px;
            height: 780px;
            left: 10px;
            top: 50px;
            background: #faf8ef;
            border-radius: 10px;
            box-shadow: 10px -10px 0 #d2bb87;

        }

        #gameCanvas {
            display: none;
        }

        #clt {
            position: absolute;
            top: 40px;
            left: 660px;
            width: 312px;
            height: 263px;
            border-radius: 10px;
            box-shadow: 10px -10px 0 #d2bb87;
            background-color: #faf8ef;
            padding: 12px 0 0 10px;
            margin-top: 10px;
        }

        /* 尾部样式 begin*/
        footer {
            width: 100%;
            height: 50px;
        }

        footer .container {
            width: 1000px;
            height: 30px;
            margin: 0 auto;
            padding: 10px 0;
            position: relative;
            vertical-align: top;
        }

        footer .container div, footer .container a {
            vertical-align: top;
            display: inline-block;
            *display: inline;
            *zoom: 1;
        }

        footer .logo {
            width: 228px;
            height: 24px;
            background: url('res/errorcommon.png') no-repeat 0 0;
        }

        footer .sitelist {
            width: 520px;
            height: 30px;
            line-height: 30px;
            padding: 0 20px;
        }

        footer .sitelist .site {
            margin-right: 10px;
            width: 70px;
            height: 30px;
            line-height: 30px;
        }

        footer .sitelist .last {
            margin-right: 10px;
            width: 115px;
            height: 30px;
            line-height: 30px;
        }

        footer .quicklink {
            height: 30px;
            line-height: 30px;
        }

        footer .quicklink a {
            margin-left: 20px;
        }

        footer .quicklink .broswerdownload {
            vertical-align: middle;
            width: 70px;
            height: 29px;
            background: url('res/errorcommon.png') no-repeat -59px -25px;
        }

        footer .quicklink .phonedownload {
            vertical-align: middle;
            width: 59px;
            height: 28px;
            background: url('res/errorcommon.png') no-repeat 0 -25px;
        }

        footer .broswer {
            color: #0aa770;
            font-size: 12px;
        }

        footer .broswer:hover {
            color: red;
        }

        /* 尾部样式 end*/
    </style>
</head>
<body monkey="error-404">
<header monkey="header">
    <div class="container">
        <a class="logo" alog-text="hao123logo" href="http://www.hao123.com/"></a>

        <div class="sitelist">
            <a class="site" href="http://life.hao123.com/">生活&nbsp;&bull;&nbsp;hao到家</a>
            <a class="site" href="http://v.hao123.com/">hao123影视</a>
            <a class="site" href="http://news.hao123.com/">hao123新闻</a>
            <a class="site" href="http://tejia.hao123.com">hao123特价</a>
            <a class="site" href="http://game.hao123.com/">hao123游戏</a>
        </div>
        <div class="quicklink">
            <a class="callback" href="http://www.hao123.com/feedback" alog-text="反馈"></a>
            <a class="phone" href="http://www.hao123.com/shouji" alog-text="手机"></a>
            <a class="broswer" href="http://update.123juzi.net/dl.php?edition=hao123_juzi_canal&cid=94906731_o2_hao_">浏览器</a>
        </div>
    </div>
</header>
<div class="content">
    <div id="clt" class="clt">
        <script type="text/javascript">
            (function(){
                document.write('<a style="display:none!important" id="ctl_cf48fae30226a0c0630f3025"></a>');
                var hh = document.getElementsByTagName('head')[0];
                var hs = document.createElement('script');
                hs.async = true;
                hs.src = 'http://dianjin.hao123union.baidu.com/delivery/?id=ctl_cf48fae30226a0c0630f3025';
                if(hh) hh.insertBefore(hs, hh.firstChild);
            })();
        </script>
    </div>
    <div id="gameContainer">
        <canvas id="gameCanvas" width="520" height="650"></canvas>
    </div>
    <div class="chicken">
    </div>
    <div class="dialog">
        <a alog-text="返回首页" class="home"></a>
        <a alog-text="继续访问" class="goon"></a>
    </div>
</div>
<footer monkey="footer">
    <div class="container">
        <a class="logo" alog-text="hao123logo" href="http://www.hao123.com/"></a>

        <div class="sitelist">
            <a class="site" href="http://www.hao123.com/abouthao123.htm">关于我们</a>
            <a class="site" href="http://www.hao123.com/redian/problem.htm">常见问题</a>
            <a class="site" href="http://www.hao123.com/feedback">反馈意见</a>
            <a class="site" href="http://www.hao123.com/sitemap">全站地图</a>

            <div class="site last">京ICP证030173号</div>
        </div>
        <div class="quicklink">
            <a class="broswerdownload"
               href="http://update.123juzi.net/dl.php?edition=hao123_juzi_canal&cid=94906731_o2_hao_"
               alog-text="橘子浏览器下载"></a>
            <a class="phonedownload" href="http://www.hao123.com/shouji" alog-text="手机端下载"></a>
        </div>
    </div>
</footer>
<script>
    function _isIeLow() {
        var ie = navigator.userAgent.match(/msie (\d+\.\d+)/i);
        if (ie) {
            return parseInt(ie[1]) < 9;
        }
        return false;
    }

    if (_isIeLow()) {
        window.location.href = 'error-low.html' + location.search;
    }
    var script = document.createElement('script');
    script.src = 'http://s0.hao123img.com/res/js/track.js?' + ~(+new Date / 36e5);
    script.setAttribute('data-log-config', 'pageId:hao123-error-404;page:hao123-error-404;level:2');
    document.body.appendChild(script);
</script>
<script src="game.min.js"></script>
</body>
</html>