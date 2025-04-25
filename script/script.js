$(document).ready(function () {
    //보러가기 이동
    $(".view-work, .A, .M, .S, .P, .C").click(function (event) {
        console.log(".view-work, .A, .M, .S, .P, .C");
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 300);
    })

    $(".txt-en").hide()

    //영어로 전환
    $(".btn-en").click(function () {
        //영어
        $(".txt-en").show()
        $(".txt-ko").hide()
    });
    //한국어로 전환
    $(".btn-ko").click(function () {
        //한국어
        $(".txt-ko").show()
        $(".txt-en").hide()
    });

    // 헤더 상단 고정
    var element = $("header");
    var offset = element.offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > offset) {
            element.addClass("fixed");

        } else {
            element.removeClass("fixed");
        }
    });

    //메뉴 버튼 이동
    var M = $(".M");
    var Main = -1;
    var reMain = 943;

    var A = $(".A");
    var About = 944;
    var reAbout = 1818;

    var S = $(".S");
    var Skills = 1917;
    var reSkills = 2890;

    var P = $(".P");
    var Portfolio = 3475;
    var rePortfolio = 4435;

    var C = $(".C");
    var Contents = 4435;
    var reContents = 5000;

    // 버튼 이동 색상
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();

        //Main
        if (scrollPosition > Main && scrollPosition < reMain) {
            M.css("background-color", "#ff6a6a"); // 색상 변경
            M.css("color", "white"); // 색상 변경
        } else {
            M.css("background-color", "white", "!important");
            M.css("color", "black", "!important");
        }

        //About
        if (scrollPosition > About && scrollPosition < reAbout) {
            A.css("background-color", "#ff6a6a"); // 색상 변경
            A.css("color", "white"); // 색상 변경
        } else {
            A.css("background-color", "white");
            A.css("color", "black");
        }

        //Skills
        if (scrollPosition > Skills && scrollPosition < reSkills) {
            S.css("background-color", "#ff6a6a"); // 색상 변경
            S.css("color", "white"); // 색상 변경
        } else {
            S.css("background-color", "white");
            S.css("color", "black");
        }

        //Portfolio
        if (scrollPosition > Portfolio && scrollPosition < rePortfolio) {
            P.css("background-color", "#ff6a6a"); // 색상 변경
            P.css("color", "white"); // 색상 변경
        } else {
            P.css("background-color", "white");
            P.css("color", "black");
        }

        //Contents
        if (scrollPosition > Contents && scrollPosition < reContents) {
            C.css("background-color", "#ff6a6a"); // 색상 변경
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