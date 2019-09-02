// 使用封装的模式，处理每一个页面的逻辑
var index = {};
index.nav = {
    html: function () {
        var HTML = '<div id="nav">';
        HTML += '<div class="con">';
        HTML += '    <div class="log">个人博客</div>';
        HTML += '';
        HTML += '    <ul>';
        HTML += '        <li>网站首页</li>';
        HTML += '        <li>文章列表</li>';
        HTML += '        <li>我的相册</li>';
        HTML += '        <li>时间轴</li>';
        HTML += '       <li>留言</li>';
        HTML += '        <li>关于我</li>';
        HTML += '        <li>发表博客</li>';
        HTML += '    </ul>';
        HTML += '';
        HTML += '    <div class="act">';
        HTML += '        <a href="">登入</a>';
        HTML += '        <a href="">注册</a>';
        HTML += '    </div>';
        HTML += '</div>';
        HTML += '</div>';
        return HTML;
    },
    event: function () {
        var elemNavlis = $("#nav .con ul li");
        // console.log(elemNavlis[0]);
        elemNavlis.each(function () {
            $(this).on("mouseover", function () {
                // console.log($(this));
                $(this).addClass("focus");
            })
            $(this).on("mouseout", function () {
                // console.log($(this));
                $(this).removeClass("focus");
            })
        })
    }
}

index.imgsEvent = {
    imgsSwitch: function (imgs, lis, elemImg) {
        var n = -1
        lis.each(function (i, elem) {
            $(this).on("click", function () {
                $.each(imgs, function (j, img) {

                    if (i == j) {
                        $(lis[j]).addClass("focus");
                        // console.log(imgs[j]);
                        elemImg.attr("src", imgs[j]);
                        n = j;
                    }
                    else {
                        $(lis[j]).removeClass("focus");
                    }
                })
            })
        })
        setInterval(function () {
            // console.log(lis[(++n) % imgs.length]);
            lis[(++n) % imgs.length].click();
        }, 3000);
    }
}