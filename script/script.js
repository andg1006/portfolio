$(".view-work").click(function (event) {
    console.log(".view-work");
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 300);
})

$(document).ready(function () {
    var element = $("header");
    var offset = element.offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > offset) {
            element.addClass("fixed");

        } else {
            element.removeClass("fixed");
        }
    });
});

$(document).ready(function () {
    var M = $(".M");
    var Main = -100;
    var reMain = 943;

    var A = $(".A");
    var About = 944;
    var reAbout = 1818;

    var S = $(".S");
    var Skills = 1817;
    var reSkills = 2769;

    var P = $(".P");
    var Portfolio = 2768;
    var rePortfolio = 3729;

    var C = $(".C");
    var Contents = 3728;
    var reContents = 4000;

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();

        //Main
        if (scrollPosition > Main && scrollPosition < reMain) {
            M.css("background-color", "white"); // 색상 변경
            M.css("color", "black"); // 색상 변경
        } else {
            M.css("background-color", "black");
            M.css("color", "white");
        }

        //About
        if (scrollPosition > About && scrollPosition < reAbout) {
            A.css("background-color", "white"); // 색상 변경
            A.css("color", "black"); // 색상 변경
        } else {
            A.css("background-color", "black");
            A.css("color", "white");
        }

        //Skills
        if (scrollPosition > Skills && scrollPosition < reSkills) {
            S.css("background-color", "white"); // 색상 변경
            S.css("color", "black"); // 색상 변경
        } else {
            S.css("background-color", "black");
            S.css("color", "white");
        }

        //Portfolio
        if (scrollPosition > Portfolio && scrollPosition < rePortfolio) {
            P.css("background-color", "white"); // 색상 변경
            P.css("color", "black"); // 색상 변경
        } else {
            P.css("background-color", "black");
            P.css("color", "white");
        }

        //Contents
        if (scrollPosition > Contents && scrollPosition < reContents) {
            C.css("background-color", "white"); // 색상 변경
            C.css("color", "black"); // 색상 변경
        } else {
            C.css("background-color", "black");
            C.css("color", "white");
        }
    });
});