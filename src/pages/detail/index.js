import styled from "styled-components";
import Video from "./components/video";
import MovieInfo from "./movie-info";
import Reviews from "./reviews";
import SimilarMovies from "./recommendation";

const DetailPage = () => {
	// const [searchParams, setSearchParams] = useSearchParams();
	// const MovieId = searchParams.get("id");
	// console.log(MovieId);

	// const getMovieDetail = async ({ movie_id }) => {
	// 	const res = await axiosInstance.get(`/movie/${movie_id}`, {
	// 		params: { api_key: process.env.REACT_APP_TOKEN },
	// 	});
	// 	console.log(res.data);
	// };

	// useEffect(() => {
	// 	getMovieDetail({ movie_id: MovieId });
	// }, []);
	// @ 받아올 데이터 목록
	/*
    1. Video
    2. poster: poster_path
    3. 등급: adult? 19 : 15
    4. 개봉년도: release_date.split("-")[0]
    5. 개봉국가: production_countries[0]["iso_3166_1"]
    6. 장르: genres -> map 돌리기
    7. 평점: vote_average (vote_count)
    8. movie/{movie_id}/credits (프로필 이미지도 추가할 지 고민해볼 것)
        - 감독
            - key: crew
            - job: Director 중 첫 번째
        - 작가
            - key: crew
            - job: Story 중 첫 번째
        - 배우 
            - key: cast (바로 접근 안 되므로 주의)
            - known_for_department로 filter 돌리기 (Acting)
            - order 값이 0, 1인 배우 가져오기 
    9.줄거리: overview
    10. movie/{movie_id}/images
        - file_path
        - 가로형 1: backdrop[0]
        - 세로형 2: posters[0], posters[1]
    11. movie/{movie_id}/reviews
        - results 로 접근 후 map 돌리기 (뱌로 사용하지 않도록 주의)
        - 이미지가 없는 경우 기본 프로필, 별점이 없는 경우 no rating 띄우기
        - 프로필 이미지: author_details[avatar_path]
        - 작성자 이름: author
        - 평점: author_details[rating]
        - 내용: content
    12. movie/{movie_id}/similar
        - 각 영화 클릭하면 해당 페이지로 이동할 수 있도록 하기
        - results로 접근 후 사용
        - 포스터: .poster_path
        - 제목: .title
        - 평점: .vote_average
    */

	return (
		<>
			<VideoContainer>
				<Video />
			</VideoContainer>
			<Container>
				<MovieInfo />
				<Reviews />
				<SimilarMovies />
			</Container>
		</>
	);
};

export default DetailPage;

const VideoContainer = styled.div`
	background-color: black;
`;

const Container = styled.div`
	width: 1120px;
	margin: 0px 200px;
	font-family: "Inter";
	/* background-color: #f2f2f2; */
`;
