# Portfolio
## 목차 
- teamproject (팀 프로젝트 결과물)
- assignment (과제)
- oldwork (이전 프로젝트들)

## Team Project 팀 프로젝트

원본 팀프로젝트 깃허브 링크
- https://github.com/minji99710/devgram-frontend 

### 프로젝트 설명

기획 배경 
- 신규 회사에 입사하게 된 주니어 개발자가 어떤 개발 장비를 맞출지 몰라 커뮤니티를 검색하던 중 해당 내용에 대한 니즈가 많다는 사실을 알게 되었고 , 해당 니즈를 충족시켜주기 위하여 이 기획을 시작하게 되었습니다.  

해결 컨셉 
- 새로 개발장비를 구매하거나 업그레이드 하려는 사람들이 개발자 커뮤니티 내에서의 장비에 대한 평가를 볼 수 있고, 다른 개발자들의 데스크탑 셋업을 구경할 수 있습니다.

기대 효과
- 키보드, 마우스 등 개발자 장비에 대한 실제 사용자 리뷰를 통해 정확한 정보를 얻을 수 있습니다.
- 자신의 개발 데스크 셋업을 공유하여, 개발자 데스크 셋업에 대한 의견을 나눌 수 있습니다.
- 추가적인 정보가 필요할 경우 사이트에서 제공하는 채팅 기능을 통하여 정보를 교환할 수 있습니다.

프로젝트를 진행하며 배운 점 
- JWT 토큰 기반의 로그인 구현
- React.js로 마이페이지 전반, 피드/상품 상세 화면 구현
- json server를 이용한 Mock Server로 가짜 REST API 활용 후 백엔드 API 연동
- Intersection observer를 사용한 무한스크롤 구현
- 와이어프레임 제작

### 와이어프레임 초안

![화면 캡처 2023-01-12 161618](https://user-images.githubusercontent.com/108535619/212055999-bafd510c-94f1-4e79-bbc0-7a6f724a2d4b.jpg)

### 기술 스펙 초안

프론트엔드>>

|구분|기술 스펙|
|-----|-----|
|프레임워크|ReactJS|
|상태관리|contextAPI, react-query|
|스타일|tailwind css|
|빌드|Vite|
|배포|Vercel|

백엔드>>

|구분|기술 스펙|
|-----|-----|
|ORM|JPA, JPQL, QueryDSL|
|API명세|swagger|
|DB|Redis, MySQL|
|배포|AWS, Docker|
|JAVA|JAVA11|
|TEST|j-unit, mockito|
|Security|Spring-Security|
|Package-management|gradle|

### 팀원 및 참고 자료

## [각 기능별 구성담당]

### FE_김성연

[로그인/회원]

- 사용자 로그인
- 회원 정보 관리

[피드 작성 페이지]

- 피드 작성(상품명/태그/글/사진)

[상품 상세 페이지]

- 상품 상세 페이지(상품/리뷰/리뷰 작성란-사진, 글)

[마이페이지] 

- 사용자가 업로드한 피드
- 업로드한 후기
- 좋아요한 피드
- 팔로우&팔로잉

참고자료 
- https://www.youtube.com/watch?v=rRn2EisxPl4&ab_channel=CooperCodes (깃허브 로그인 구현)

---

### FE_김민지

[관리자 페이지]

- 카테고리 추가/삭제
- 상품 등록
- 유저가 신고한 피드 댓글 및 리뷰 표시/삭제 기능

[메인 페이지]

- Nav - 홈/ 로그인/ 마이페이지/ 카테고리/ 피드로 연결
    - 각 카테고리에 해당하는 페이지로 연결
- 캐러셀 : 좋아요 가장 많은 상품 5개
- NEW 상품: 최신 상품 5개
- 캐러셀 : 피드 게시물 3개
    - 모바일에서 버튼 없애고 터치로
    - 더 보기 버튼 클릭하면 피드 페이지로 이동
- BEST 상품 : 별점 순으로 8개

[상품 페이지]

- 관리자가 등록한 상품 전체(무한 스크롤)

[피드 페이지]

- 피드에 등록된 게시물 카드 형태로(무한스크롤)
- 각 피드를 클릭하면 피드 게시물로 이동

[피드 게시물 페이지]

- 피드 사진/내용/태그/상품명
- 피드 댓글/좋아요

[채팅]

- 그룹 채팅

---

### BE_문진수

### [회원]

- 회원가입
- 회원정보확인
- 내가 팔로잉하고 있는 사람들의 정보 확인
- 나를 팔로잉하고 있는 사람들의 정보 확인
- 회원 로그인
- 회원 로그아웃

### [채팅]

---

### BE_신유림

### [카테고리]

- 카테고리 리스트 확인
- 카테고리 추가
- 카테고리 수정
- 카테고리 삭제

### [상품]

- 인기있는 상품 4개 보여주기
- 상품 등록(일반) + 페이징
- 상품 목록 전체 조회 + 페이징
- 상품 수정
- 상품 삭제
- 상품 Detail(+조회수 증가)
- 찜

### [리뷰]

- UserId에 해당하는 유저의 리뷰 내용 리스트 보여주기
- 신규 리뷰 작성
- ReviewId에 해당하는 리뷰 삭제
- Review에 대한 신고
- Review 전체 목록 조회
- 별점 시스템 구현

---

### BE_김명기

### [댓글]

- 댓글 전체 목록 보여주기
- 댓글 삭제
- 댓글 등록
- 댓글 신고

### [태그]

- 태그 리스트 보여주기
- 태그 삭제
- 태그 자동완성 기능

### [채팅]

---

### BE_최태훈

### [피드]

- 피드 전체 리스트 보여주기
- 피드 삭제
- 피드 등록
- 피드 신고

### [채팅]

---

### Assignment 과제

## JS
주제 
- JS를 이용한 다양한 기능 구현 
- (토글, 시계, 별점, 달력, 뉴스 API 무한스크롤)

진행하며 배운점
- Asios를 사용한 비동기 서버통신 (promise)
- Intersection observer를 사용한 무한스크롤 구현
- 이벤트 위임에 대한 이해와 그를 이용한 이벤트 핸들러 등록

## html
주제
- 쿠팡 일부분 클론코딩 

진행하며 배운점 
- WAI-ARIA의 role, 스크린리더 사용자를 배려한 마크업
- 웹표준과 웹접근성을 준수하며 검색 엔진 최적화를 위한 시멘틱한 마크업 복습

### Old Work 이전 프로젝트

개발기간 
- 10일(기획&디자인 4일, 개발 6일)
- 2022.05 제작 완료

주제 
- V12 (골프웨어 사이트) 리뉴얼 