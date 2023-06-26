// import { CacheUtils } from "apis/movieApi";
import { CacheUtils } from "apis/movieApi";
import MovieList from "components/movie-list";

const NowPlaying = () => {
	// CacheUtils.cacheNowPlayingMovie(1);

	// 사용법
	let nowPlayingMovies;
	const cachedNowPlayingMovies = CacheUtils.cacheNowPlayingMovie();
	if (!cachedNowPlayingMovies.data) nowPlayingMovies = [];
	else {
		nowPlayingMovies = cachedNowPlayingMovies.data.data.results;
	}
	console.log(nowPlayingMovies);
	return nowPlayingMovies && <MovieList movies={nowPlayingMovies} />;
};
export default NowPlaying;
