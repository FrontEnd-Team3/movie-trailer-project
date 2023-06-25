import { axiosInstance } from "apis/@core";
import { useQuery } from "react-query";

const useFetchMovies = (page, endpoint) => {
	async function fetchMovies(params) {
		const response = await axiosInstance.get(`/movie/${endpoint}`, {
			params,
		});
		return response.data;
	}

	return useQuery(["movies", page], () => fetchMovies({ page }), {
		keepPreviousData: false,
		staleTime: 0,
		refetchOnWindowFocus: false,
		retry: false,
	});
};
export default useFetchMovies;
