import { axiosInstance } from "apis/@core";
import { useQuery } from "react-query";

const useFetchMovies = (page, language, endpoint, criterion, query) => {
	async function fetchMovies(params) {
		const response =
			endpoint !== "search"
				? await axiosInstance.get(`/movie/${endpoint}`, {
						params,
				  })
				: await axiosInstance.get(`/search/${criterion}`, {
						params,
				  });
		return response.data;
	}

	if (endpoint !== "search")
		return useQuery(
			[`movies/${endpoint}`, page],
			() => fetchMovies({ language, page }),
			{
				keepPreviousData: true,
				staleTime: 0,
				refetchOnWindowFocus: false,
				retry: false,
			},
		);
	else
		return useQuery(
			[`movies/search`, criterion, query, page],
			() => fetchMovies({ language, page, query }),
			{
				keepPreviousData: true,
				staleTime: 0,
				refetchOnWindowFocus: false,
				retry: false,
			},
		);
};
export default useFetchMovies;
