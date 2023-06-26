import MovieList from "components/movie-list";
import TopButton from "components/top-button";
import useMovieList from "hooks/useMovieList";
import { PARAMS } from "consts/PARAMS";
import Banner from "components/banner";
import { useSearchParams } from "react-router-dom";
import MovieSlide from "components/movie-slide";

const Search = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const criterion =
		searchParams.get("criterion") === "undefined"
			? "collection"
			: searchParams.get("criterion");
	const query =
		searchParams.get("query") === "undefined" ? "" : searchParams.get("query");
	const { data, isSuccess, isLoading, isFetching, pageNum, ref } = useMovieList(
		PARAMS.MOVIE_SEARCH,
		criterion,
		query,
	);

	if (isLoading && pageNum === 1) {
		return <div>Loading...</div>;
	}
	if (!data && pageNum === 1) {
		return <div>Data is not available</div>;
	}

	return (
		<div>
			{/* {data && <img src={`${image500}${data.results[0].backdrop_path}`} />} */}
			{/* <br />
			<br />
			<br />
			<br /> */}
			<TopButton />
			<MovieSlide movies={data?.results} />
			<Banner title="SEARCH" />
			<MovieList movies={data?.results} />
			{(isLoading || isFetching) && <div>Loading More...</div>}
			{!isFetching && (
				<div ref={ref}>{isSuccess && pageNum < data.total_pages}</div>
			)}
		</div>
	);
};
export default Search;
