import { CacheUtils } from "apis/movieApi";
import MovieList from "components/movie-list";
import { useQueryClient } from "react-query";

const NowPlaying = () => {
	const queryClient = useQueryClient();
	const getNowPlayingMovie = () => {
		const result = queryClient.getQueryData("get/now-playing");
		return result || {};
		// return { data, isLoading, isSuccess };
		// You can use the cached data in other places as needed
	};
	CacheUtils.cacheNowPlayingMovie(1);

	// 사용법
	const nowPlayingMovies = getNowPlayingMovie().data;
	console.log(nowPlayingMovies);
	return nowPlayingMovies && <MovieList movies={nowPlayingMovies} />;
};
export default NowPlaying;
