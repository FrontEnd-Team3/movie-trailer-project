import MovieList from "components/movie-list";

const Upcoming = () => {
	const upcomingMovies = {}; // 대충 api 콜해오는 로직
	return <MovieList movies={upcomingMovies} />;
};
export default Upcoming;
