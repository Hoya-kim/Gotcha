class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <aside class="controller">
    <a href="#" target="_blank" rel="noopener noreferrer" class="controller__random">
        <img src="./src/images/common/img_gotcha_random.svg" alt="갓챠 랜덤플레이">
    </a>
    <a href="#" class="controller__topButton">페이지 TOP으로</a>
</aside>
<footer class="footer">
    <ul class="footer__service">
        <li class="footer__service--item">
            <button type="button">갓챠피디아 서비스 이용약관</button>
        </li>
        <li class="footer__service--item">
            <button type="button"><strong>개인정보 처리 방침</strong></button>
        </li>
        <li class="footer__service--item">
            <button type="button">왓챠 서비스 이용약관</button>
        </li>
        <li class="footer__service--item">
            <a href="#">고객센터</a>
        </li>
        <li class="footer__service--item">
            <a href="#">채용정보</a>
        </li>
    </ul>
    <address class="footer__address">
        <dl class="footer__address__content">
            <div class="footer__address__content--item">
                <dt>고객센터(이용 및 결제 문의)</dt>
                <dd>
                    <a href="mailto:cs@watcha.co.kr">cs@watcha.co.kr</a> /
                    <a href="tel:02-515-9985">02-515-9985(유료)</a>
                </dd>
            </div>
            <div class="footer__address__content--item">
                <dt>제휴 및 대회 협력</dt>
                <dd>
                    <a href="https://watcha.team/contact" target="_blank" rel="noopener noreferrer">https://watcha.team/contact</a>
                </dd>
            </div>
            <div class="footer__address__content--item">
                <dt>B2B 이용권 구매 문의</dt>
                <dd>쿠프마케팅(<a href="mailto:m_oper@coopnc.com">m_oper@coopnc.com</a> / <a href="tel:070-4020-5289">070-4020-5289</a>)
                </dd>
            </div>
        </dl>
        <div class="footer__address--info">
            <span>주식회사 갓챠</span>
            <span>대표 김호야</span>
            <span>서울시 서초구 강남대로 343 신덕빌딩 3층</span>
            <span>사업자등록번호 211-88-66013</span>
            <span>통신판매업 신고번호 제 2019-서울서초-0965호</span>
        </div>
    </address>
    <ul class="footer__sns">
        <li><a href="https://www.facebook.com/watchaKR" target="_blank" rel="noopener noreferrer"
               class="footer__sns--item facebook">페이스북</a></li>
        <li><a href="https://twitter.com/watcha_kr" target="_blank" rel="noopener noreferrer"
               class="footer__sns--item twitter">트위터</a></li>
        <li><a href="https://www.instagram.com/watcha_kr/" target="_blank" rel="noopener noreferrer"
               class="footer__sns--item instagram">인스타그램</a></li>
        <li><a href="https://watcha.team/" target="_blank" rel="noopener noreferrer"
               class="footer__sns--item blog">블로그</a></li>
    </ul>
    <div class="footer__rights">
        <a href="/" class="footer__rights--logo">
            <img src="./src/images/common/logo_footer.svg" alt="GOTCHA">
        </a>
        <small class="footer__rights--copyright">Copyright &copy; 2021 by Gotcha, Inc. All rights reserved.</small>
    </div>
</footer>
      `;
  }
}

customElements.define("footer-component", Footer);
