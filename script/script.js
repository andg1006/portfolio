$(document).ready(function () {
    //view-work-click
    $(".view-work, .A, .M, .S, .P, .C").click(function (event) {
        console.log(".view-work, .A, .M, .S, .P, .C");
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 300);
    })

    //언어
    $(".btn-en").click(function () {
        $("#en").css("display", "block")
        $("#ko").css("display", "none")
        $(".btn-ko").css("display", "block")
        $(".btn-en").css("display", "none")
        $(".lang2").css("display", "none")
        $(".lang").css("display", "block")
        $(".view-work2").css("margin-left", "30.25%")
    });
    $(".btn-ko").click(function () {
        $("#ko").css("display", "block")
        $("#en").css("display", "none")
        $(".btn-en").css("display", "block")
        $(".btn-ko").css("display", "none")
        $(".lang2").css("display", "block")
        $(".lang").css("display", "none")
        $(".view-work").css("margin-left", "35%")
    });

    var element = $("header");
    var offset = element.offset().top;

    //menu-fixed
    $(window).scroll(function () {
        if ($(window).scrollTop() > offset) {
            element.addClass("fixed");

        } else {
            element.removeClass("fixed");
        }
    });

    //menu
    var M = $(".M");
    var Main = -1;
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
            M.css("color", "white", "!important");
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

    //메인메뉴 슬라이드
    $(".menu-logo").click(function () {
        $(".main-menu").css("display", "block");
        setTimeout(function () {
            $(".main-menu .l").css("display", "block")
            $(".main-menu .r").animate({ right: "0" }, 100);
        });
        $(".menu-logo-close").click(function () {
            $(".main-menu .l").css("display", "none")
            $(".main-menu .r").animate({ right: "-550px" }, 100, function () {
                $(".main-menu").css("display", "none");
            });
        });

        //스크롤 잠금
        $(".main-menu").on('scroll touchmove mousewheel', function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
    });
});