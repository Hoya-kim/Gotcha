export class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="skipNavigation">
    <a href="#continue">이어보기 바로가기</a>
    <a href="#wanted">보고싶어요 바로가기</a>
    <a href="#trending">인기작 바로가기</a>
</div>
<div class="topBanner is-active">
    <p class="topBanner__desc">왓챠가 그립지 않으세요? 다시 돌아오셔서 모든 영화, 드라마 무제한으로 감상하세요.</p>
    <div class="topBanner__btnGroup">
        <button class="topBanner__btnGroup--button btn-primary">이용권 구매</button>
        <button class="topBanner__btnGroup--button">쿠폰 등록</button>
    </div>
    <button class="topBanner--closeButton" aria-label="배너 닫기"></button>
</div>
<header class="header">
    <h1 class="header__logo">
        <a href="/" class="header__logo--link">
            <img src="./src/images/common/logo_top.svg" alt="GOTCHA">
        </a>
    </h1>
    <nav>
        <h2 class="a11y-hidden">메인 메뉴</h2>
        <div class="header__naviWrap">
            <button type="button" class="header--openButton">메뉴</button>
            <ul class="header__navigation">
                <li class="header__navigation--item tabMenu">
                    <a href="#" class="header__navigation--link tab-open">탐색하기</a>
                    <ul class="tabMenu__container">
                        <li class="tabMenu__item is-active">
                            <button type="button" class="tabMenu__header tabMenu__header--genre">장르</button>
                            <ul class="tabMenu__panel">
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link item-new">새로 올라온 작품</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="" class="tabMenu__panel--link">새로운 에피소드</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="" class="tabMenu__panel--link">공개 예정인 작품</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="" class="tabMenu__panel--link">왓챠 익스클루시브</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="" class="tabMenu__panel--link">영어 자막 지원 작품</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="" class="tabMenu__panel--link">TV 드라마</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="" class="tabMenu__panel--link">TV 애니메이션</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="" class="tabMenu__panel--link">재난</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="" class="tabMenu__panel--link">로맨틱코디미</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="" class="tabMenu__panel--link">시트콤</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="" class="tabMenu__panel--link">SF</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="" class="tabMenu__panel--link">시대극</a>
                                </li>
                            </ul>
                        </li>
                        <li class="tabMenu__item">
                            <button type="button" class="tabMenu__header tabMenu__header--country">국가</button>
                            <ul class="tabMenu__panel">
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">독일</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">캐나다</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">이탈리아</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">스페인</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">대만</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">영국</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">프랑스</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">인도</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">홍콩</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">중국</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">미국</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">일본</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">한국</a>
                                </li>
                            </ul>
                        </li>
                        <li class="tabMenu__item">
                            <button type="button" class="tabMenu__header tabMenu__header--point">특징</button>
                            <ul class="tabMenu__panel">
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">재능</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">완성도</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">워킹타이틀</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">단편기반</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">마약</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">악역</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">치열한</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">오디션</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">퍼포먼스</a>
                                </li>
                                <li class="tabMenu__panel--item">
                                    <a href="#" class="tabMenu__panel--link">뉴욕배경</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="header__navigation--item">
                    <a href="#" class="header__navigation--link eval-button">평가하기</a>
                </li>
                <li class="header__navigation--item">
                    <a href="#" class="header__navigation--link">보고싶어요</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="header__searchForm">
        <h2 class="a11y-hidden">검색 영역</h2>
        <button type="button" class="header__searchForm--button">검색</button>
        <form>
            <fieldset>
                <legend class="a11y-hidden">검색 영역</legend>
                <label for="searchInput" class="a11y-hidden">검색</label>
                <span class="header__searchForm--input">
                    <input type="search" id="searchInput" placeholder="제목, 감독, 배우로 검색">
                </span>
            </fieldset>
        </form>
        <div class="header__trending">
            <h3 class="header__trending--Title">인기 검색어</h3>
            <ul class="header__trending--list">
                <li class="header__trending--item">
                    <a href="#" class="header__trending--link">소리도 없이</a>
                </li>
                <li class="header__trending--item">
                    <a href="#" class="header__trending--link">해리포터와 마법사의 돌</a>
                </li>
                <li class="header__trending--item">
                    <a href="#" class="header__trending--link">와이 우먼 킬</a>
                </li>
                <li class="header__=trending--item">
                    <a href="#" class="header__trending--link">와이 우먼 킬2</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="header__userConfig">
        <button class="header__userConfig--user">쓰리박</button>
        <div class="header__userConfig--list">
            <ul class="header__userConfig--profile">
                <li><a href="#" class="profile-icon"><i class="icon-kids"></i>키즈</a></li>
                <li><a href="#" class="profile-icon"><i class="icon-custom"></i>박쓰</a></li>
            </ul>
            <ul class="header__userConfig--edit">
                <li><a href="#">프로필 편집</a></li>
            </ul>
            <ul class="header__userConfig--watched">
                <li><a href="#">이어보기</a></li>
                <li><a href="#">다 본 작품</a></li>
            </ul>
            <ul class="header__userConfig--others">
                <li><a href="#">설정</a></li>
                <li><a href="#">공지사항</a></li>
                <li><a href="#">초대하기</a><i class="icon-new"></i></li>
                <li><a href="#">고객센터</a></li>
                <li><a href="#">로그아웃</a></li>
            </ul>
        </div>
    </div>
</header>
      `;
  }
}
