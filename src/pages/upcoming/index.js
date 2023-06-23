import { CacheUtils } from "apis/movieApi";
import MovieList from "components/movie-list";

const Upcoming = () => {
	let upComingMovies;
	const cachesUpcomingMovies = CacheUtils.cacheUpcomingMovie();
	if (!cachesUpcomingMovies.data) upComingMovies = [];
	else {
		upComingMovies = cachesUpcomingMovies.data.data.results;
	}
	console.log(upComingMovies);
	return upComingMovies && <MovieList movies={upComingMovies} />;
};
export default Upcoming;
