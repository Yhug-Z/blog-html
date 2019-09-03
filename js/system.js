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
        HTML += '        <a href="./login.html">登入</a>';
        HTML += '        <a href="">注册</a>';
        HTML += '    </div>';
        HTML += '</div>';
        HTML += '</div>';
        return HTML;
    },
    addr: ["index.html", "list.html", "pics.html", null, null, null, "send.html"],
    event: function () {
        var elemNavlis = $("#nav .con ul li");
        // console.log(elemNavlis[0]);
        elemNavlis.each(function (j, elem) {
            $(this).on("mouseover", function () {
                // console.log($(this));
                $(this).addClass("focus");
            })
            $(this).on("mouseout", function () {
                // console.log($(this));
                $(this).removeClass("focus");
            })
            $(this).on("click", function () {
                console.log(index.nav.addr);
                $.each(index.nav.addr, function (i, item) {
                    if (i == j) {
                        console.log(item);
                        window.location.href = item;
                    }
                })
            })

        })
    },
    title: function (title) {
        var HTML = '<div class="title">';
        HTML += '<div class="ltip">' + title[0] + '</div>';
        HTML += '<div class="rtip">' + title[1] + '</div>';
        HTML += '</div>';
        return HTML;
    }
}

index.imgsEvent = {
    imgsSwitch: function (imgs, mags, lis, elemImg) {
        var n = -1
        lis.each(function (i, elem) {
            $(this).on("click", function () {
                $.each(imgs, function (j, img) {

                    if (i == j) {
                        $(lis[j]).addClass("focus");
                        // console.log(imgs[j]);
                        elemImg.attr("src", imgs[j]);
                        elemImg.next().text(mags[j]);
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

index.articlelist = {
    box: function () {
        var HTML = '<div class="txtbox" data-scroll-reveal="bottom 5px 3 3">';
        HTML += '<div class="tlttip">Python语言在人工智能（AI）中的优势</div>';
        HTML += '<div class="tltframe">';
        HTML += '<figure class="tltfleft">';
        HTML += '<img src="images/toppic01.jpg" alt="" srcset="">';
        HTML += '</figure>';
        HTML += '<p class="tltfright">本文探讨了Python语言在AI领域的优势与运用。谁会成为AI和大数据时代的第一开发语言？</p>';
        HTML += '</div>';
        HTML += '</div>';
        return HTML;
    },
    commendBox: function () {
        var HTML = '<div class="trimgbox">';
        HTML += '<figure class="triimg">';
        HTML += '<img src="images/banner03.jpg" alt="">';
        HTML += '</figure>';
        HTML += ' </div>';

        return HTML;
    }
}
index.pics = {
    html: function (imgurl, p1) {
        var HTML = '<div class="item">'
        HTML += '<figure>'
        HTML += '<img width="270px" height="160px" src="' + imgurl + '" alt="">'
        HTML += '</figure>'
        HTML += '<p>' + p1 + '</p>'
        HTML += '</div>';
        return HTML;
    }

}