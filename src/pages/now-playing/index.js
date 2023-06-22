// import { CacheUtils } from "apis/movieApi";
import { CacheUtils } from "apis/movieApi";
import MovieList from "components/movie-list";

const NowPlaying = () => {
	// CacheUtils.cacheNowPlayingMovie(1);

	// 사용법
	const nowPlayingMovies = CacheUtils.cacheNowPlayingMovie().data.data;
	console.log(nowPlayingMovies);
	return nowPlayingMovies && <MovieList movies={nowPlayingMovies} />;
};
export default NowPlaying;
