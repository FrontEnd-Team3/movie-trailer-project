import { debounce } from "lodash";
import { useState, useEffect, useCallback } from "react";
import useInfiniteScroll from "./useInfiniteScroll";
import useFetchMovies from "./useMoviesQuery";

const useMovieList = queryKey => {
	const [pageNum, setPageNum] = useState(1);
	const language = localStorage.getItem("selectedLanguage") || "ko-KR";
	const {
		data: newData,
		isSuccess,
		isLoading,
		isFetching,
	} = useFetchMovies(pageNum, language, queryKey);
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

	const loadMore = useCallback(
		debounce(() => {
			setPageNum(prevPageNum => prevPageNum + 1);
		}, 400),
	);

	const { ref } = useInfiniteScroll(isLoading, isFetching, loadMore);

	return { data, isLoading, isFetching, isSuccess, pageNum, ref };
};

export default useMovieList;
