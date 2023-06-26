import styled from "styled-components";
import Video from "./components/video";
import MovieInfo from "./movie-info";
import Reviews from "./reviews";
import SimilarMovies from "./recommendation";
import { useSearchParams } from "react-router-dom";
import { CacheUtils } from "apis/movieApi";

const DetailPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const MovieId = parseInt(searchParams.get("id"));
	console.log("id", MovieId);

	let Target;
	const TargetMovie = CacheUtils.cacheMovieDetail(MovieId, 1);
	if (!TargetMovie.data) Target = null;
	else {
		if (TargetMovie.data) Target = TargetMovie.data.data;
		console.log("target", Target);
	}

	return (
		Target && (
			<>
				<S.VideoContainer>
					<Video id={MovieId} />
				</S.VideoContainer>
				<S.Container>
					<MovieInfo id={MovieId} target={Target} />
					<Reviews id={MovieId} />
					<SimilarMovies id={MovieId} />
				</S.Container>
			</>
		)
	);
};

export default DetailPage;

const VideoContainer = styled.div`
	background-color: black;
`;

const Container = styled.div`
	width: 1120px;
	margin: 0 auto;
	font-family: "Inter";
	display: flex;
	flex-direction: column;
`;

const S = {
	VideoContainer,
	Container,
};
