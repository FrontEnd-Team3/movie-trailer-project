import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { CacheUtils } from "apis/movieApi";
import MovieList from "components/movie-list";

const Main = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	useEffect(() => {
		navigate("/movies/popular");
	}, []);

	// 캐시하기
	CacheUtils.cachePopularMovie(1);

	CacheUtils.cacheTopRatedMovie(1);

	const getPopularMovie = () => {
		const result = queryClient.getQueryData("get/popular");
		// 에러 방지용
		return result || {};
		// return { data, isLoading, isSuccess };
		// You can use the cached data in other places as needed
	};

	// 사용법
	const popularMovies = getPopularMovie().data;
	console.log(popularMovies);
	return popularMovies && <MovieList movies={popularMovies} />;
};
export default Main;
