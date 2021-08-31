(function () {
    let bannerClose = document.getElementsByClassName('topBanner--closeButton')[0];
    let mainTabOpen = document.getElementsByClassName('tabMenu')[0];
    let mainTabs = document.querySelectorAll('.tabMenu__header');
    let mainTabPanels = document.querySelectorAll('.tabMenu__panel');
    let searchForm = document.getElementsByClassName('header__searchForm')[0];
    let searchButton = document.getElementsByClassName('header__searchForm--button')[0];
    let searchInput = document.getElementById('searchInput');


    // 탑 배너 닫기
    bannerClose.addEventListener('click', function () {
        this.parentElement.classList.remove('is-active');
    })

    // 탐색하기 마우스오버, 포커스 이벤트 제어
    mainTabOpen.addEventListener('mouseover', function () {
        this.classList.add('is-active');
    })

    mainTabOpen.addEventListener('focusin', function () {
        this.classList.add('is-active');
    })

    mainTabOpen.addEventListener('mouseleave', function () {
        this.classList.remove('is-active');
    })


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

    let profileOpens = document.querySelector('.header__userConfig');
    let profileOpenButton = profileOpens.querySelector('.header__userConfig--user');
    let lastElem = profileOpens.querySelectorAll('a');
    let lastTarget = lastElem[lastElem.length - 1];

    // 프로필 마우스 오버 & 포커스 시 동작 제어
    profileOpens.addEventListener('mouseover', function (){
        this.classList.add('is-active');
    });

    profileOpens.addEventListener('mouseleave', function (){
        this.classList.remove('is-active');
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
    })
})();