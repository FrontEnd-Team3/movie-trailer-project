import { CacheUtils } from "apis/movieApi";
import MovieList from "components/movie-list";

const TopRated = () => {
	const getTopRatedMovie = () => {
		const result = queryClient.getQueryData(["get/top-rated"]);
		return result || {};
		// return { data, isLoading, isSuccess };
		// You can use the cached data in other places as needed
	};
	// CacheUtils.cacheTopRatedMovie(1);

	// 사용법
	const topRatedMovies = CacheUtils.cacheTopRatedMovie().data.data;
	console.log(topRatedMovies);
	return topRatedMovies && <MovieList movies={topRatedMovies} />;
};
export default TopRated;
