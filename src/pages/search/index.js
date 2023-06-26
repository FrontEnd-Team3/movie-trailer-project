import { MovieApi } from "apis/movieApi";
import Banner from "components/banner";
import MovieList from "components/movie-list";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchMovies, setSearchMovies] = useState([]);

	const getSearchMovies = async () => {
		console.log("collection" || searchParams.get("criterion"));
		const searchMoviesResult = await MovieApi.getSearch(
			searchParams.get("criterion") === "undefined"
				? "collection"
				: searchParams.get("criterion"),
			{
				page: 1,
				query:
					searchParams.get("query") === "undefined"
						? ""
						: searchParams.get("query"),
			},
		);
		setSearchMovies(searchMoviesResult.data.results);
		console.log("asdfasdfasdf", searchMoviesResult);
	};

	useEffect(() => {
		getSearchMovies();
	}, [searchMovies]);
	// 과연 캐싱해야 할까? 그리고 해야 하면 refetch

	// console.log("asdf", searchMoviesResult.data);

	// if (searchMoviesResult.data) {
	// 	searchMovies = searchMoviesResult.data.results;
	// 	console.log("aaaa");
	// }
	return (
		<>
			<Banner title="SEARCH" />
			<MovieList movies={searchMovies} />
		</>
	);
};
export default Search;
