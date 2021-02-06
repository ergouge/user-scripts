// ==UserScript==
// @name         first_demo
// @namespace    http://zhihu.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*.zhihu.com/*
// @grant        none
// @require      tampermonkey://vendor/jquery.js
// ==/UserScript==

(function() {
    'use strict';
    console.log("hello world");
    let hrefs = new Array();
    let aa = $('a');
    aa.each(function(i, ele){
        hrefs.push($(ele).attr('href'))
    });
    console.log(hrefs);
    // Your code here...
    //假设每隔5秒发送一次请求
    window.onload = function () {
        getApi();
    }
    function getApi() {
        console.log('定时任务');
        // 设置时间 5-秒  1000-毫秒  这里设置你自己想要的时间
        setTimeout(getApi,5*1000);
        //--- Loop through cookies and delete them.
        // var cookieList  = document.cookie.split (/;\s*/);

        // for (var J = cookieList.length - 1;   J >= 0;  --J) {
        //     // var cookieName = cookieList[J].replace (/\s*(\w+)=.+$/, "$1");
        //     console.log(cookieList[J]);
        //     // console.log(cookieName);
        //     // eraseCookie (cookieName);
        // }
        
        $.ajax({
            type: "GET",
            url: "https://www.zhihu.com/api/v4/creators/analysis/card",
            data: JSON.stringify({'num': 1}),
            dataType: 'json',
            xhrFields: {
                withCredentials: true //允许跨域带Cookie
            },
            success: function(data) {
                console.log(data)
            }
        })
        /*$.ajax({
            url: 'http://www.andy.com/xxx',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                //方法中传入的参数data为后台获取的数据
                // console.log(data.data);
                var data1 = data['data']['history'];
                // console.log(data1);
                var tr;
                $.each(data1,function (index,item) {
                    //字符串转数组
                    var code = item['code'].split(',');
                    //数组转字符串：
                    var strCode = code.join(' ');
                    // console.log(strCode)
                    tr = '<td>'+item['issue']+'</td>'+'<td>'+strCode+'</td>'+'<td>'+item['sum']+'</td>';
                    $('#table-test').append('<tr>'+tr+'</tr>')
                })
            }
        })*/
    }
})();