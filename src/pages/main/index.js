import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieList from "components/movie-list";
import MovieSlide from "components/movie-slide";
import TopButton from "components/top-button";
import useMovieList from "hooks/useMovieList";
import { PARAMS } from "consts/PARAMS";
import Banner from "components/banner";

const Main = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (location.pathname !== "/movies/popular") {
			navigate("/movies/popular");
			// 캐시하기
		}
	}, []);

	const { data, isSuccess, isLoading, isFetching, pageNum, ref } = useMovieList(
		PARAMS.MOVIE_POPULAR,
	);

	if (isLoading && pageNum === 1) {
		return <div>Loading...</div>;
	}
	if (!data && pageNum === 1) {
		return <div>Data is not available</div>;
	}

	return (
		<div>
			{/* {data && <img src={`${image500}${data.results[0].backdrop_path}`} />} */}
			{/* <br />
			<br />
			<br />
			<br /> */}
			<TopButton />
			<MovieSlide movies={data?.results} />
			<Banner title="POPULAR MOVIE" />
			<MovieList movies={data?.results} />
			{(isLoading || isFetching) && <div>Loading More...</div>}
			{!isFetching && (
				<div ref={ref}>{isSuccess && pageNum < data.total_pages}</div>
			)}
		</div>
	);
};
export default Main;
