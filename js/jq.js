$(document).ready(function () {
    $('.button').click(function (event) {
        $('.text').fadeToggle(1000);
        // fadeIn 預設隱藏的東西給打開
        // fadeOut 預設開啟的東西給關閉
    });
    $(window).load(function () {
        $('#slider').nivoSlider();
    });
    $('.close-navbar').click(function () {
        $('.navbar').hide();
        $('.wrapper').css('margin-top', '40px')
    });
    $('.main-header li').click(function (event) {
        event.preventDefault();
    });
    $('.jq-about').click(function () {
        $('.about').addClass('active').siblings().removeClass('active');
        $('.jq-right-1').show();
        $('.jq-right-2').hide();
    });
    $('.jq-portfolio').click(function () {
        $('.portfolio').addClass('active').siblings().removeClass('active');
        $('.jq-right-1').hide();
        $('.jq-right-2').show();
    });
    $("#phone").mousemove(function () {
        $(this).text('0984-268-089')
    });
    $("#phone").mouseleave(function () {
        $(this).text('Phone')
    });
    $("#E-Mail").mousemove(function () {
        $(this).css("font-size", "25px");
        $(this).text('e30153015@gmail.com')
    });
    $("#E-Mail").mouseleave(function () {
        $(this).css("font-size", "25px");
        $(this).text('E-Mail')
    });

    $("#Line").click(function () {
        event.preventDefault();
        $('.line-id').slideToggle();
    });
    $('.top').click(function () {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    })
});


$.ajax({
    type: 'GET',
    url: 'https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202306179%20and%20u%3D%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
    success: function (response) {
        console.log(response)
        var result = response.query.results.channel.item.condition;
        var situation = result.text;
        if (situation == 'Partly Cloudy') {
            var situation = '晴時多雲'
        } else if (situation == 'Sunny') {
            var situation = '晴天'
        }
        $('#weather').append(
            '<br><p>來源時間: </p>' +
            '<p> ' + result.date + '</p>' +
            '<p>天氣狀況: ' + situation + '</p>' +
            '<p>氣候：' + weather_con[result.temp] + '</p>' +
            '<p>溫度: ' + result.temp + '度' + '</p><br>' +
            '<p class="source">資料來源:Yahoo氣象API</p>')
    }
});

var weather_con = {
    "0": "龍捲風",
    "1": "熱帶風暴",
    "2": "颶風",
    "3": "強雷陣雨",
    "4": "雷陣雨",
    "5": "混合雨雪",
    "6": "混合雨雪",
    "7": "混合雨雪",
    "8": "冰凍小雨",
    "9": "細雨",
    "10": "凍雨",
    "11": "陣雨",
    "12": "陣雨",
    "13": "飄雪",
    "14": "陣雪",
    "15": "吹雪",
    "16": "下雪",
    "17": "冰雹",
    "18": "雨雪",
    "19": "多塵",
    "20": "多霧",
    "21": "陰霾",
    "22": "多煙",
    "23": "狂風大作",
    "24": "有風",
    "25": "冷",
    "26": "多雲",
    "27": "晴間多雲（夜）",
    "28": "晴間多雲（日）",
    "29": "晴間多雲（夜）",
    "30": "晴間多雲（日）",
    "31": "清晰的（夜）",
    "32": "晴朗",
    "33": "晴朗（夜）",
    "34": "晴朗（日）",
    "35": "雨和冰雹",
    "36": "炎熱",
    "37": "雷陣雨",
    "38": "零星雷陣雨",
    "39": "零星雷陣雨",
    "40": "零星雷陣雨",
    "41": "大雪",
    "42": "零星陣雪",
    "43": "大雪",
    "44": "多雲",
    "45": "雷陣雨",
    "46": "陣雪",
    "47": "雷陣雨",
    "3200": "資料錯誤"
};