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

<h2></h2>



<h2>📂 폴더 구조</h2>

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

<br>
<h2>👨‍👩‍👦‍👦 팀원</h2> 

|Front-end|Front-end|Front-end|Front-end|Front-end|Front-end|Front-end|
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| <img src="https://github.com/FrontEnd-Team3/movie-trailer-project/assets/123865139/663c4b42-dc55-4e95-8f02-c0424c1f92ec" width="118"> | <img src="https://github.com/FrontEnd-Team3/movie-trailer-project/assets/123865139/b537f778-e73e-4464-81be-eaf09f05ad7f" width="118"> | <img src="https://github.com/FrontEnd-Team3/movie-trailer-project/assets/123865139/a6e966c2-bf34-4ece-91c6-6efeb5ac681b" width="118"> | <img src="https://github.com/FrontEnd-Team3/movie-trailer-project/assets/123865139/9964f6f1-b6b0-4d20-af3a-13c7c76f5816" width="118"> | <img src="https://github.com/FrontEnd-Team3/movie-trailer-project/assets/123865139/fd4e0419-20fd-4531-b7ff-6248b14a9261" width="118"> | <img src="https://github.com/KIT-Frontend-Team1/pair1-Git-Issue-Project/assets/123865139/f7bb64fc-2d77-4bd0-9825-5823f73d5977" width="118"> | <img src="https://github.com/FrontEnd-Team3/movie-trailer-project/assets/123865139/4b3bc122-1b2d-48ef-be6a-af3b8042ce4f" width="118"> |
|[지성경](https://github.com/zivivle)|[오현우](https://github.com/ohwphil)|[박희수](https://github.com/Sueddd)|[심재원](https://github.com/GrayHound0801)|[함정우](https://github.com/JeongwooHam)|[김예슬](https://github.com/yesoryeseul)|[고승용](https://github.com/seungyonggo)|

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

1. react-qurey를 사용하여 데이터를 캐싱할 것
2. 로딩 중에는 목록 가장 하단 부에 skelton UI를 나타낼 것
3. 목록을 불러올 때는 react-query의 useInfinitQuery를 사용하여 무한 스크롤링으로 불러울 것
4. 페이지 구성
5. 스크롤 감지하여 ScrollUp button 표시되도록, 누를 시 최상단으로 스크롤 이동
6. favicon을 이용하여 웹 표시 아이콘을 수정할 것
7. 페이지 별 구현 사항
8. 협업 시스템화 하기
9. 구현 후 serverless 환경에서 배포하기


<br>
<h2>✔️ 깃허브 날짜별 정리</h2>


