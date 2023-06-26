import { CacheUtils } from "apis/movieApi";
import MovieList from "components/movie-list";
import { useSearchParams } from "react-router-dom";

const Search = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const criterion =
		searchParams.get("criterion") === "undefined"
			? "movie"
			: searchParams.get("criterion");
	const query =
		searchParams.get("query") === "undefined" ? "" : searchParams.get("query");
	const searchMovies = CacheUtils.cacheSearch(criterion, query, 1);

	return <MovieList movies={searchMovies.data?.data.results || []} />;
};
export default Search;
