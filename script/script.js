$(document).ready(function () {
    //view-work-click
    $(".view-work, .A, .M, .S, .P, .C").click(function (event) {
        console.log(".view-work, .A, .M, .S, .P, .C");
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 300);
    })

    //언어
    $(".btn-en").click(function () {
        //언어
        $("#en").css("display", "block")
        $("#ko").css("display", "none")

        //언어 버튼
        $(".btn-ko").css("display", "block")
        $(".btn-en").css("display", "none")

        //언어
        $(".lang").css("display", "block")
        $(".lang2").css("display", "none")

        //작품보기
        $(".view-work2").css("margin-left", "30.25%")

        //메뉴
        $(".me2").css("display", "block")
        $(".me1").css("display", "none")

        //테마
        $(".sn2").css("display", "block")
        $(".sn").css("display", "none")
    });
    $(".btn-ko").click(function () {
        //언어
        $("#ko").css("display", "block")
        $("#en").css("display", "none")

        //언어 버튼
        $(".btn-en").css("display", "block")
        $(".btn-ko").css("display", "none")

        //언어
        $(".lang2").css("display", "block")
        $(".lang").css("display", "none")

        //작품보기
        $(".view-work").css("margin-left", "35%")
        
        //메뉴
        $(".me1").css("display", "block")
        $(".me2").css("display", "none")

        //테마
        $(".sn").css("display", "block")
        $(".sn2").css("display", "none")
    });

    //테마
    $('.btn-dk').click(function() {
        //테마
        $(".btn-lt").css("display", "block")
        $(".btn-dk").css("display", "none")
        
        //메뉴 오픈
        $(".mi2").css("display", "block")
        $(".mi1").css("display", "none")

        //메뉴 닫기
        $(".close2").css("display", "block")
        $(".close").css("display", "none")

        //메인 메뉴
        $(".mm .r").css("background-color", "black")

        //나머지
        $(".btn-lt").css("background-color", "black")("border","3px","solid","black")
    })
    $('.btn-lt').click(function() {
        //테마
        $(".btn-dk").css("display", "block")
        $(".btn-lt").css("display", "none")

        //메인메뉴 버튼
        $(".mi1").css("display", "block")
        $(".mi2").css("display", "none")
        $(".close").css("display", "block")
        $(".close2").css("display", "none")

        //메인 메뉴
        $(".mm .r").css("background-color", "white")

        //나머지
        $(".screen button").css("background-color", "white")
    })

    $(".view-work, .view-work2").mouseover(function(){

    })

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
            M.css("background-color", "black"); // 색상 변경
            M.css("color", "white"); // 색상 변경
        } else {
            M.css("background-color", "white");
            M.css("color", "black", "!important");
        }

        //About
        if (scrollPosition > About && scrollPosition < reAbout) {
            A.css("background-color", "black"); // 색상 변경
            A.css("color", "white"); // 색상 변경
        } else {
            A.css("background-color", "white");
            A.css("color", "black");
        }

        //Skills
        if (scrollPosition > Skills && scrollPosition < reSkills) {
            S.css("background-color", "black"); // 색상 변경
            S.css("color", "white"); // 색상 변경
        } else {
            S.css("background-color", "white");
            S.css("color", "black");
        }

        //Portfolio
        if (scrollPosition > Portfolio && scrollPosition < rePortfolio) {
            P.css("background-color", "black"); // 색상 변경
            P.css("color", "white"); // 색상 변경
        } else {
            P.css("background-color", "white");
            P.css("color", "black");
        }

        //Contents
        if (scrollPosition > Contents && scrollPosition < reContents) {
            C.css("background-color", "black"); // 색상 변경
            C.css("color", "white"); // 색상 변경
        } else {
            C.css("background-color", "white");
            C.css("color", "black");
        }
    });

    //메인메뉴 슬라이드
    $(".menu-logo").click(function () {
        $(".main-menu").css("display", "block");
        setTimeout(function () {
            $(".main-menu .l").css("display", "block")
            $(".main-menu .r").animate({ right: "0" }, 200);
        });
        $(".menu-logo-close").click(function () {
            $(".main-menu .l").css("display", "none")
            $(".main-menu .r").animate({ right: "-550px" }, 200, function () {
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