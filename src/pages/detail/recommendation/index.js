import styled from "styled-components";
import { axiosInstance } from "apis/@core";
import MovieList from "components/movie-list";
import { useInfiniteQuery, useQueryClient } from "react-query";
import { useEffect } from "react";

const SimilarMovies = ({ id }) => {
	/*
		movie/{movie_id}/similar
        - 각 영화 클릭하면 해당 페이지로 이동할 수 있도록 하기
        - results로 접근 후 사용
        - 포스터: .poster_path
        - 제목: .title
        - 평점: .vote_average
	*/

	const queryClient = useQueryClient();

	// data: 가져온 데이터
	// fetchNextPage: 다음 페이지의 데이터를 가져오는 함수
	const { data, fetchNextPage, isLoading } = useInfiniteQuery(
		"recommend-movies",
		// pageParam: 페이지 식별자. getNextPageParam을 통해 이 값에 1씩 더해줌으로써 페이지 구분
		({ pageParam = 1 }) =>
			axiosInstance.get(`/movie/${id}/similar`, {
				params: { api_key: process.env.REACT_APP_TOKEN, page: pageParam },
			}),
		{
			// getNextPageParam: 다음 페이지의 파라미터 값을 결정함
			// lastPage: 이전 페이지들의 데이터, pages: 이전까지 가져온 페이지들의 배열
			getNextPageParam: (lastPage, pages) => {
				if (lastPage.data.page === 3) {
					return pages.length < 3 ? 1 : undefined;
				}
				// 현재 페이지가 마지막 페이지인 경우 undefined를 반환하여 페이지 요청 중단
				// 현재 페이지가 마지막 페이지가 아닌 경우 다음 페이지 번호를 반환하여 다음 페이지로 이동
				return lastPage.data.page + 1;
			}, // query 활성화 여부 결정
			// 값이 캐싱 되어 다른 영화 상세 페이지로 이동했을 때 무한 스크롤이 멈추는 것을 막기 위해 사용
			// props로 전달된 id 값이 바뀔 때마다 useEffect를 사용하여 실행되도록 설정
			enabled: false,
		},
	);
	console.log("response", data);

	const similarMovies =
		data?.pages
			?.map(page => page.data.results)
			.reduce((prev, curr) => prev.concat(curr), []) || [];

	const handleScroll = () => {
		// 문서의 현재 scroll 높이 (페이지 전체 콘텐츠의 높이)
		const scrollHeight = document.documentElement.scrollHeight;
		// 문서의 현재 scroll 위치 (페이지가 수직으로 얼마나 내려갔는지)
		const scrollTop = document.documentElement.scrollTop;
		// 브라우저 창에서 보이는 viewport의 높이
		const clientHeight = document.documentElement.clientHeight;
		// 만약 현재 scroll의 위치를 더한 값과 브라우저 창에서 보이는 창의 높이가 전체 콘텐츠 높이보다 커진다면 (페이지의 끝에 도달한다면)
		// 다음 페이지의 데이터를 가져오는 fetchNextPage 함수 실행
		// console.log("scrolled");
		if (scrollTop + clientHeight >= scrollHeight) return fetchNextPage();
	};

	useEffect(() => {
		// 스크롤 될 때 해당 함수 실행
		window.addEventListener("scroll", handleScroll);
		return () => {
			// 내릴 때마다 동작을 감지할 수 있도록 함수 다시 삭제
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		// invalidate: cache 데이터를 무효화하여 id 값이 바뀔 때마다 다시 데이터를 요청할 수 있게 함
		queryClient.invalidateQueries("recommend-movies");
		// 해당 queryKey로 보낸 query를 찾아서 enabled 속성을 true로 만들기
		queryClient.getQueryCache().find("recommend-movies").enabled = true;
		// 위의 query로 받아온 데이터로 만든 배열을 사용하여 무한 스크롤
		queryClient.setQueryData("recommend-movies", similarMovies);
	}, [id]);

	return (
		similarMovies && (
			<S.MoreLikeThis>
				<S.Title style={{ margin: "20px" }}>More Like This</S.Title>
				<MovieList movies={similarMovies} isLoading={isLoading} />
			</S.MoreLikeThis>
		)
	);
};

export default SimilarMovies;

const MoreLikeThis = styled.div`
	margin-top: 50px;
`;

const Title = styled.div`
	font-size: 28px;
	font-style: italic;
	font-weight: 500;
	margin-bottom: 20px;
`;

const S = { MoreLikeThis, Title };
