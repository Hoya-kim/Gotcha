# Gotcha! - 갓쨔

## 🥇 개요

K-netfilx, [Watcha-왓챠](https://watcha.com/) 프론트 클론 프로젝트입니다.<br>
Watcha가 **웹 표준**과 **접근성**을 준수하고 있는지, **성능부분**에서 놓치고 있는 부분이 있는지 분석 및 확인하여, 개선하는 것을 목표로 합니다. 🎯

<br>

### 🌟 탄생배경

- [Gotcha intro, youtube](https://www.youtube.com/watch?v=ddoiaokwGC4&ab_channel=%EC%BD%94%EB%A6%B0%EC%9D%B4)

#### ✅ 주제 선정 배경

1. 미니 프로젝트를 시작했을때, 새로 페이지를 디자인해서 만들지 아니면 클론코딩을 할 지 고민을 많이했다. 사실 우리 팀만의 독자적인 사이트를 만들어보고싶었지만 너무나도 짧은 시간에 디자인에 너무 많은 시간을 빼앗길것 같다는 생각에 클론 코딩을 하기로 결정했다. 대신, 수업시간에 배웠던 것을 최대한 많이 활용하여 접근성과 성능을 개선시켜보기로 목표를 잡았다.
2. 왓챠 팝콘먹다 왓챠 1개월 무료 감상권 쿠폰(?) 뽑고 팀원들이랑 너무 들떴다. 그래서 왓챠를 보려고하는데 로딩 시간이 너무 길어서 화가난 우리는 왓챠 클론 코딩을 하며 이런 부분을 우리가 개선시키고자했다.
3. 갓챠의 최종 목표는 접근성과 성능을 모두 향상시켜 국내 유일의 OTT 서비스를 제공하는 것이다. (자바스크립트를 배우면서 계속 리펙토링을 할 예정이다)

<br>

### :calendar: 프로젝트 기간

21.08.27 ~ 21.09.03

- 2021.08.27 : 주제 선정, 로고 제작, CSS 설계 기법 정리, 칸반차트 생성
- 2021.08.28~08.30 : 왓챠와 넷플릭스(경쟁사) 페이지 (성능 및 접근석 분석), 공통 UI 마크업 및 스타일링 작업, 깃 컨벤션 및 코딩 컨벤션 작성
- 2021.08.31~09.01 : 개별 UI 마크업 및 스타일링, JS 작업
- 2021.09.02 : 코드 리뷰 및 리펙토링, 발표 준비하기 (PPT 및 대본 준비), KPT 작성
- 2021.09.03 : 발표

<br>

---

## 📘 commit convention

`$ git commit`

```plaintext
[type]: [subject] - [Issue #num]

[body]
```

[type] : commit의 타입

[subject] : commit의 제목

[body] : commit의 내용

[Issue] : 이슈 연결

- 제목과 본문은 한 줄을 띄워 분리합니다
- 제목은 간략하게 간추립니다 (기왕이면 `50자`이내)
- 제목 첫 글자는 대문자
- 제목 끝에 `.`금지

<br>

### 📗 type 종류

```
feat: 새로운 기능을 추가
fix: 버그 수정
style: 코드 포맷팅, 세미콜론 추가 등 코드 변경이 없는 경우
docs: 문서 수정
refactor: 코드 리펙토링
chore: 패키지 매니저 등 빌드 관련 설정 수정
test: 테스트 코드 추가
```

### 📙 Issue #num

```
- Issue #13    # 평소 커밋시 사용 - 기능에 해당하는 이슈에 연결

- Close #14    # 이슈를 닫을 때 (일반 개발 이슈)
- Fix #15    # 이슈를 닫을 때 (버그 픽스 이슈)
- Resolve #16    # 문의나 요청 사항 대응
```

<details markdown="1">
<summary>이건 뭔가요?</summary>

- 해당 구문이 commit에 들어가면 github이 자동으로 인식해 이슈를 종료합니다.

</details>

참고자료

- [좋은 git 커밋 메시지를 작성하기 위한 8가지 약속](https://www.notion.so/hoyakim/Github-2c07494e5cb8492c96bf4b81e855d149#0d61025ceaba408f881b89a7d49e2dcc)

<br>

---

## 📌 브랜칭 및 PR 전략

### 🪄 git-flow를 경량화한 형태를 사용

- git-flow형태를 따르되 규모가 작은 토이 프로젝트이므로, 경량화한 형태를 사용

`main` : 배포 이외 사용금지

`develop` : 기능단위 feature들이 merge될 브랜치

`feat-` : 기능별 브랜치 ( ex, feat-common : 공통 기능 개발 브랜치 )

`fix-` : 버그 fix or hot fix시 사용할 브랜치

### 📤 Pull Request 전략

`upstream-repo: develop` ←`forked-repo: develop`

1. 각자의 origin에서 기능 개발 완료 후 devlop으로 머지
2. 각자의 develop에서 테스트 후 이상이 없으면 upstream의 develop으로 PR

---

### 📍 기존 서비스의 문제점

1. 성능 점수는 예상과도 같이 낮았다. (로딩속도가 10~15초 정도라서 web core vitals의 LCP 지표에 한참 미치지 못했다)
2. 접근성 점수는 높음에도 불구하고 마크업은 전혀 시멘틱하지못했다 (div와 span이 대다수인 마크업)클래스 이름 또한 불분명하여 해당 마크업 구조를 전혀 파악할 수 없었다.
3. 탭 키 또한 논리적으로 이동하지않았고, 중간에 outline이 사라져 어디에 탭이 위치한지 파악하기도 힘들었고 어떤 부분은 탭키로 다가갈수도 없었다.

---

### 🖼 Preview

#### 1. 메인 페이지

https://user-images.githubusercontent.com/41777022/142970648-a50d24e8-66e4-441f-a613-7209cef74617.mp4

#### 2. 뷰 페이지

https://user-images.githubusercontent.com/41777022/142970593-64304480-15e3-4715-b1f2-07bf4008c0a0.mp4

작품에 관해 다양한 정보를 제공하는 페이지로 사용자가 정보를 한눈에 알아볼수있도록 탭 메뉴로 구성했습니다.

시멘틱한 마크업을 위하여 별점 부분은 데스크탑 기준, 밑에 설명 부분은 모바일 기준으로 작성했습니다. 또한, 모바일 환경에서는 탭이 사라지기때문에 탭 기능을 가진 태그를 사용하기보다는 div에 wai-aria의 role을 주며 접근성을 지키고자 했습니다.

#### 3. 평가하기 페이지

https://user-images.githubusercontent.com/41777022/142970614-cb4bacc9-d57e-4f93-b956-3357b9949d68.mp4

<br>

---

### 📝 프로젝트 설계 기록

- [Gotcha - 갓쨔, Notion](https://hoyakim.notion.site/Gotcha-1b66d2f66632424993a667f55fedcdd9)

<br>

### 🥇 발표 slide

- [Gotcha - slides.com](https://slides.com/hoya/gotcha)

<br>

---

### 🎓 Team

<table>
    <tr align="center">
        <td><B>김정호<B></td>
        <td><B>박바름<B></td>
        <td><B>박지영<B></td>
        <td><B>박태준<B></td>
    </tr>
    <tr align="center">
        <td>
            <img src="https://github.com/hoya-kim.png?size=100" style="width:100px; height:100px;">
            <br>
            <a href="https://github.com/hoya-kim"><I>Hoya-kim</I></a>
        </td>
        <td>
            <img src="https://github.com/congaweb.png?size=100" style="width:100px; height:100px;">
            <br>
            <a href="https://github.com/congaweb"><I>congaweb</I></a>
        </td>
        <td>
            <img src="https://github.com/kkdd0757.png?size=100" style="width:100px; height:100px;">
            <br>
            <a href="https://github.com/kkdd0757"><I>kkdd0757</I></a>
        </td>
        <td>
            <img src="https://github.com/joker77z.png?size=100" style="width:100px; height:100px;">
            <br>
            <a href="https://github.com/joker77z"><I>joker77z</I></a>
        </td>
    </tr>
</table>
