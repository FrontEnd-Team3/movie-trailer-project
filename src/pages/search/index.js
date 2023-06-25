import { CacheUtils } from "apis/movieApi";
import MovieList from "components/movie-list";
import { useSearchParams } from "react-router-dom";

const Search = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	let searchMovies;
	const searchMoviesResult = CacheUtils.cacheSearch(
		searchParams.get("criterion"),
		searchParams.get("query"),
		1,
	);
	// 과연 캐싱해야 할까? 그리고 해야 하면 refetch
	console.log(searchMoviesResult);
	if (!searchMoviesResult.data) searchMovies = [];
	else searchMovies = searchMoviesResult.data.data.results;
	return <MovieList movies={searchMovies} />;
};
export default Search;
