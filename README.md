<p align="middle" >
  <img src="https://i.pinimg.com/564x/75/3a/e5/753ae5360acd3dd34f34ce3095168c00.jpg" width="400">
</p>
<h1 align="middle">Movie Trailer Site Project</h1>
</p><br>

<div align="center">
  
  <h1>📑 프로젝트 소개 및 개요</h1>

 <p align="middle">영화 트레일러 오픈 API를 활용하여 영화 목록을 조회하고 사이트 구현하기 </p>

</div><br>

<h2>🔗 배포 링크</h2><br>
#vercel
https://movie-trailer-project.vercel.app/
<h2>기한</h2>
 <p>2023.06.20 ~ 2023.06.26</p>
 </p><br>




<details>
<summary><h2>📂 폴더 구조</h2></summary>
<div markdown="1">

```
├─apis
│  └─@core.js
│  └─MovieApi.js
├─components
│  └─movie-list
│    └─index.js
│  └─one-movie
│    └─index.js
│  └─searchbar
│    └─index.js
│  └─top-button
│    └─index.js
├─consts
│  └─PARAMS.js
│  └─QUERYKEYS.js
├─context
│  └─selectedLanguage.js
├─hooks
│  └─useInfiniteScroll.js
│  └─useMovieList.js
│  └─useMoviesQuery.js
├─layout
│  └─Footer.js
│  └─Header.js
│  └─index.js
├─pages
│  └─detail
│    └─components
│      └─video.js
│    └─img
│    └─movie-info
│      └─credits.js
│      └─detail-info.js
│      └─gallery.js
│      └─index.js
│      └─plot.js
│    └─recomendation
│      └─index.js
│    └─review
│      └─index.js
│      └─one-review.js
│      └─review-slide.js
│  └─main
│    └─index.js
│  └─now-playing
│    └─index.js
│  └─search
│    └─index.js
│  └─top-rated
│    └─index.js
│  └─upcoming
│    └─index.js
├─routes
│  └─routing.js
└─style
│  └─common.js
│  └─global.js
│  └─theme.js
```

</div>
</details>

<br>
<h2>👨‍👩‍👦‍👦 팀원</h2>

|                                                               Front-end                                                               |                                                               Front-end                                                               |                                                               Front-end                                                               |                                                               Front-end                                                               |                                                               Front-end                                                               |                                                                  Front-end                                                                  |                                                               Front-end                                                               |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/FrontEnd-Team3/movie-trailer-project/assets/123865139/663c4b42-dc55-4e95-8f02-c0424c1f92ec" width="118"> | <img src="https://github.com/FrontEnd-Team3/movie-trailer-project/assets/123865139/b537f778-e73e-4464-81be-eaf09f05ad7f" width="118"> | <img src="https://github.com/FrontEnd-Team3/movie-trailer-project/assets/123865139/a6e966c2-bf34-4ece-91c6-6efeb5ac681b" width="118"> | <img src="https://github.com/FrontEnd-Team3/movie-trailer-project/assets/123865139/9964f6f1-b6b0-4d20-af3a-13c7c76f5816" width="118"> | <img src="https://github.com/FrontEnd-Team3/movie-trailer-project/assets/123865139/fd4e0419-20fd-4531-b7ff-6248b14a9261" width="118"> | <img src="https://github.com/KIT-Frontend-Team1/pair1-Git-Issue-Project/assets/123865139/f7bb64fc-2d77-4bd0-9825-5823f73d5977" width="118"> | <img src="https://github.com/FrontEnd-Team3/movie-trailer-project/assets/123865139/4b3bc122-1b2d-48ef-be6a-af3b8042ce4f" width="118"> |
|                                                 [지성경](https://github.com/zivivle)                                                  |                                                 [오현우](https://github.com/ohwphil)                                                  |                                                  [박희수](https://github.com/Sueddd)                                                  |                                              [심재원](https://github.com/GrayHound0801)                                               |                                               [함정우](https://github.com/JeongwooHam)                                                |                                                  [김예슬](https://github.com/yesoryeseul)                                                   |                                               [고승용](https://github.com/seungyonggo)                                                |

<br>
<h2>⚙️ 사용 기술 스택</h2>

<img src="https://github.com/FrontEnd-Team3/movie-trailer-project/assets/123865139/047754be-f577-4e61-b63b-2968a03b095e" width="800">

<br><br>

<h2>☑️ 커밋 컨벤션</h2>

|   Type   | Description                   |
| :------: | ----------------------------- |
|   feat   | Add a new feature             |
|   fix    | Fix the bug                   |
|  design  | UI design changes such as CSS |
|  style   | code formatting               |
| refactor | Refactoring the code          |
|   docs   | Modify the document           |
|  chore   | etc.                          |

<br>

<h2>✔️ 요구사항 구현 내용</h2>

<details>
<summary> 1. 스켈레톤 UI (승용)</summary>
<div markdown="1">

  - mui 라이브러리 사용 
  - useEffect를 써서 1초동안 스켈레톤 UI가 로딩될때마다 나오게 적용

</div>
</details>
<details>
<summary> 2. 검색 기능 (현우)</summary>
<div markdown="1">
  
  - 검색어 입력 태그와 mui로 만든 검색 유형 select 태그를 만듬
  - 캐시 기능으로 각 검색 유형과 쿼리에 대해서 캐싱을 해서 4분동안 검색 결과가 유지되게 함
    
</div>
</details>
<details>
<summary> 3. 상세페이지 (정우)</summary>
<div markdown="1">

  - useSearchParams로 받아온 아이디를 사용해 각 영화의 상세 페이지를 구현하고 데이터 호출 로직을 분리

</div>
</details>
<details>
<summary> 4. 언어변환 기능 (정우)</summary>
<div markdown="1">
  
   - footer에서 한/영 변환이 가능하도록 하였고, 해당 값을 localstorage에 저장하여 새로고침하여도 저장될 수 있게 함
    
</div>
</details>
<details>
<summary> 5. 미리보기 기능 (재원)</summary>
<div markdown="1">

  - onMouseEnter과 onMouseLeave 이벤트 핸들러를 통해 마우스 커서에 따라 미리보기 화면이 보이게 하였고 setTimeOut으로 0.2초 뒤에 보이도록 설정

</div>
</details>
<details>
<summary> 6. 메인페이지 (성경)</summary>
<div markdown="1">
  
  - react query의 useQuery 사용
  - 데이터 캐싱 로직을 커스텀 훅 함수로 만들어서 적용하였고 메인 페이지 외 다른 페이지에도 적용할 수 있도록 함

</div>
</details>
<details>
<summary> 7. 무한스크롤 (성경)</summary>
<div markdown="1">

  - react query의 useQuery / lodash의 debounce / react-intersection-observe의 useInView 사용
  - 데이터 캐싱 로직과 마찬가지로 무한스크롤 로직을 커스텀 훅 함수로 만들어서 적용, 다른 페이지에도 적용 가능하도록 함
  - 받아오는 데이터늬 촤대 갯수를 설정함 (60개)

</div>
</details>
<details>
<summary> 8. 메인슬라이드 (희수)</summary>
<div markdown="1">

  - useState를 사용해 슬라이드 이동 길이 구현
  - 라이브러리 사용 x

</div>
</details>
<details>
<summary> 9. 데이터 통신 로직 구현 (예슬) </summary>
<div markdown="1">

  - axios 인스턴스를 활용하여 데이터 통신 로직을 구현하였고, params를 인스턴스에 설정하여 api call 시 가독성을 높임

</div>
</details>
<details>
<summary> 10. 상수화 작업 (예슬)</summary>
<div markdown="1">

  - useQuery로 캐시할 때 재사용성과 오타방지를 위한 쿼리키를 상수화하였습니다.

</div>
</details>
<details>
<summary> 11. 헤더, 푸터, 타이틀 배너 디자인, 파비콘 기능 (예슬)</summary>
<div markdown="1">

  - 헤더, 푸터, 타이틀 배너 디자인, 파비콘 기능을 추가
    
</div>
</details>



