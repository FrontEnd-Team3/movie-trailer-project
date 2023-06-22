import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CacheUtils } from "apis/movieApi";
import MovieList from "components/movie-list";

const Main = () => {
	useEffect(() => {
		if (location.pathname !== "/movies/popular") {
			const navigate = useNavigate();
			navigate("/movies/popular");
			// 캐시하기
		}
	}, []);
	CacheUtils.cachePopularMovie(1);
	CacheUtils.cacheNowPlayingMovie(1);
	CacheUtils.cacheTopRatedMovie(1);

	// 사용법
	const cachedPopularMovies = CacheUtils.cachePopularMovie().data;
	const popularMovies = cachedPopularMovies.data || null;
	console.log(popularMovies);
	return popularMovies && <MovieList movies={popularMovies} />;
};
export default Main;
