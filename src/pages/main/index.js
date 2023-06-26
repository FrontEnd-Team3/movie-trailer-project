import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CacheUtils } from "apis/movieApi";
import MovieList from "components/movie-list";

const Main = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (location.pathname !== "/movies/popular") {
			navigate("/movies/popular");
			// 캐시하기
		}
	}, []);
	CacheUtils.cachePopularMovie(1);
	CacheUtils.cacheNowPlayingMovie(1);
	CacheUtils.cacheTopRatedMovie(1);

	// 사용법
	let popularMovies;
	const cachedPopularMovies = CacheUtils.cachePopularMovie();
	console.log("cached", cachedPopularMovies);
	if (!cachedPopularMovies.data) popularMovies = [];
	else {
		popularMovies = cachedPopularMovies.data.data.results;
	}
	console.log(popularMovies);
	return popularMovies && <MovieList movies={popularMovies} />;
};
export default Main;
