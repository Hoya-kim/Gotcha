export function commonFunc () {
    let rootElement = document.documentElement;
    let bannerClose = document.querySelector('.topBanner--closeButton');
    let mainTabOpen = document.getElementsByClassName('tabMenu')[0];
    let mainTabs = document.querySelectorAll('.tabMenu__header');
    let mainLogo = document.querySelector('.header__logo--link');
    let mainEvalButton = document.querySelector('.eval-button');
    let moMenu = document.querySelector('.header__naviWrap');
    let moMenuButton = document.querySelector('.header--openButton');
    let searchForm = document.getElementsByClassName('header__searchForm')[0];
    let searchButton = document.getElementsByClassName('header__searchForm--button')[0];
    let searchInput = document.getElementById('searchInput');
    let profileOpens = document.querySelector('.header__userConfig');
    let profileOpenButton = profileOpens.querySelector('.header__userConfig--user');
    let lastElem = profileOpens.querySelectorAll('a');
    let lastTarget = lastElem[lastElem.length - 1];
    let controller = document.querySelector('.controller');
    let scrollToTopBtn = document.querySelector('.controller__topButton');
    let footer = document.querySelector('.footer');
    let footerHeight, winScrollTop, bodyHeight, value, winHeight;
    let topButtonTimer;

    // 탑 배너 닫기
    bannerClose.addEventListener('click', function () {
        this.parentElement.classList.remove('is-active');
        headerPos = header.offsetTop;
    })

    // header fixed
    let header, headerPos;
    header = document.querySelector('.header');
    headerPos = header.offsetTop;

    function headerFixed(){
        if ( window.pageYOffset > headerPos ) {
            header.classList.add("is-active");
            document.querySelector('body').classList.add("is-active");

        } else {
            header.classList.remove("is-active");
            document.querySelector('body').classList.remove("is-active");
        }
    }

    document.addEventListener('scroll',headerFixed);

    // 모바일 메인 메뉴
    moMenuButton.addEventListener('focusin', function (){
        moMenu.classList.add('is-active');
    });

    moMenuButton.addEventListener('click', function (){
        if(!moMenu.classList.contains('is-active')){
            moMenu.classList.add('is-active');
        }else{
            moMenu.classList.remove('is-active');
        }
    });

    moMenu.addEventListener('mouseover', function (){
        moMenu.classList.add('is-active');
    });

    moMenu.addEventListener('mouseleave', function (){
        moMenu.classList.remove('is-active');
    });

    // 탐색하기 마우스오버, 포커스 이벤트 제어
    // 마우스 오버 됐을 떄
    mainTabOpen.addEventListener('mouseover', function () {
        this.classList.add('is-active');
    });

    // 포커스 들어갔을 때
    mainTabOpen.addEventListener('focusin', function () {
        this.classList.add('is-active');
    });

    // 마우스 떠났을 떄
    mainTabOpen.addEventListener('mouseleave', function () {
        this.classList.remove('is-active');
    });

    // 포커스 떠날 때 & 백탭
    mainLogo.addEventListener('focusin', function (){
        mainTabOpen.classList.remove('is-active');
        moMenu.classList.remove('is-active');
    });

    mainEvalButton.addEventListener('focusin', function (){
        mainTabOpen.classList.remove('is-active');
    });


    // 탐색하게 탭 제어하기
    for (var i = 0; i < mainTabs.length; i++) {
        // 탭 요소에 클릭 이벤트 연결
        mainTabs[i].addEventListener('click', handleTab);
    }

    // 탭 선택 시 부모 요소의 클래스 제거 및 추가하는 함수
    function handleTab(e) {
        // 탭의 부모 요소에 is-select 클래스 제거
        for (var i = 0; i < mainTabs.length; i++) {
            if (!mainTabs[i].parentElement.classList.contains('is-active')) {
                continue;
            }
            mainTabs[i].parentElement.classList.remove('is-active');
        }

        // 탭의 부모 요소에 is-select 클래스 추가
        e.target.parentElement.classList.add('is-active');
    }

    // 검색 영역 클릭 이벤트 제어
    searchButton.addEventListener('click', function () {
        this.parentElement.classList.add('is-active');
        searchInput.focus();
    });
    searchInput.addEventListener('focusout', function () {
        searchForm.classList.remove('is-active');
    })


    // 프로필 마우스 오버 & 포커스 시 동작 제어
    profileOpens.addEventListener('mouseover', function (){
        this.classList.add('is-active');
    });

    profileOpens.addEventListener('mouseleave', function (){
        this.classList.remove('is-active');
    });

    // 클릭 이벤트
    profileOpenButton.addEventListener('click', function () {
        if(this.parentNode.classList.contains('is-active')){
            this.parentNode.classList.remove('is-active');
        }else {
            this.parentNode.classList.add('is-active');
        }
    });

    // 키보드 포커스인
    profileOpenButton.addEventListener('focusin', function () {
        this.parentNode.classList.add('is-active');
    });

    // 키보드 포커스 아웃
    lastTarget.addEventListener('focusout', function () {
        profileOpens.classList.remove('is-active');
    })

    // 백탭
    searchButton.addEventListener('focusin', function () {
        profileOpens.classList.remove('is-active');
        moMenu.classList.remove('is-active');
    })

    // TOP 버튼 위치 제어
    function topBtnPos(){
        bodyHeight = document.body.clientHeight;
        footerHeight = footer.clientHeight;
        winScrollTop = window.scrollY;
        winHeight = window.innerHeight;
        value = bodyHeight - winHeight- footerHeight;

        if(winScrollTop >= value){
            controller.style.position = "absolute";
            controller.style.bottom = footerHeight + 15 + 'px';
        }else {
            controller.style.position = "fixed";
            controller.style.bottom = "3%";
        }
    }

    window.addEventListener('scroll', function (){
        clearTimeout(topButtonTimer);
        topButtonTimer = setTimeout(function () {
            topBtnPos();
        }, 15);
        // topBtnPos();
    });

    // TOP 버튼 클릭 이벤트
    function scrollToTop(e) {
        e.preventDefault();
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    scrollToTopBtn.addEventListener("click", scrollToTop)
};