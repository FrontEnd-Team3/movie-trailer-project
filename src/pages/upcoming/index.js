import MovieList from "components/movie-list";
import TopButton from "components/top-button";
import useMovieList from "hooks/useMovieList";
import { PARAMS } from "consts/PARAMS";

const Upcoming = () => {
	const { data, isSuccess, isLoading, isFetching, pageNum, ref } = useMovieList(
		PARAMS.MOVIE_UPCOMING,
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
			<MovieList movies={data?.results} />
			{(isLoading || isFetching) && <div>Loading More...</div>}
			{!isFetching && (
				<div ref={ref}>{isSuccess && pageNum < data.total_pages}</div>
			)}
		</div>
	);
};
export default Upcoming;
