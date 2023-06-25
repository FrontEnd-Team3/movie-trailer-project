import { useCallback, useEffect, useState } from "react";
import MovieList from "components/movie-list";
import useFetchMovies from "hooks/useMoviesQuery";
import useInfiniteScroll from "hooks/useInfiniteScroll";
import { QUERYKEYS2 } from "consts/QUERYKEYS";
import TopButton from "components/top-button";

const TopRated = () => {
	const [pageNum, setPageNum] = useState(1);
	const {
		data: newData,
		isSuccess,
		isLoading,
		isFetching,
	} = useFetchMovies(pageNum, QUERYKEYS2.MOVIE_NOWPLAYING);

	const [data, setData] = useState(null);

	useEffect(() => {
		if (newData) {
			if (data === null) {
				setData(newData);
			} else {
				setData(prevData => ({
					...newData,
					results: [...prevData.results, ...newData.results],
				}));
			}
		}
	}, [newData]);

	const image500 = "https://image.tmdb.org/t/p/w500";

	const loadMore = useCallback(() => {
		setPageNum(prevPageNum => prevPageNum + 1);
	}, []);

	//재사용 가능하도록 무한스크롤 커스텀훅화
	const { ref } = useInfiniteScroll(isLoading, isFetching, loadMore);

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
export default TopRated;
