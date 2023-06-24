import styled from "styled-components";
import { MovieApi } from "apis/movieApi";
import { QUERYKEYS } from "consts/QUERYKEYS";
import { useQuery } from "react-query";

const Video = ({ id }) => {
	// 1. Video
	// const [VideoLink, setVideoLink] = useState();
	// const getVideo = async () => {
	// 	const res = await axiosInstance.get(`/movie/${id}/videos`);

	// 	const TrailerVideo = res.data.results.find(
	// 		video => video.name === "Official Trailer",
	// 	);

	// 	// console.log("video", TrailerVideo);
	// 	if (TrailerVideo && TrailerVideo.site === "YouTube") {
	// 		setVideoLink(
	// 			// autoplay: 페이지 접속 시 동영상 자동재생
	// 			// mute: chrome에서 자동재생 막는 현상 방지
	// 			`https://www.youtube.com/embed/${TrailerVideo.key}?autoplay=1&mute=1`,
	// 		);
	// 	}
	// };

	// useEffect(() => {
	// 	getVideo();
	// }, []);

	const { data } = useQuery(
		[QUERYKEYS.MOVIE_VIDEO, id],
		() => MovieApi.getMovieVideo(id, { page: 1 }),
		{ staleTime: 1000 * 60 * 5, cacheTime: 1000 * 60 * 4 },
	);

	// console.log("link", data?.data?.results);

	let OfficialTrailer;
	if (data && data.data && data.data.results) {
		OfficialTrailer = data.data.results.find(video => {
			// console.log("video.type:", video.type);
			return video.type === "Trailer";
		});
	}

	// console.log("T", OfficialTrailer);

	let VideoLink;
	if (OfficialTrailer) {
		VideoLink = `https://www.youtube.com/embed/${OfficialTrailer.key}?autoplay=1&mute=1`;
	}

	return (
		VideoLink && (
			<S.VideoContainer>
				<S.VideoPlayer src={VideoLink} allowFullScreen></S.VideoPlayer>
			</S.VideoContainer>
		)
	);
};

export default Video;

const VideoContainer = styled.div`
	padding: 43px 0px;
	display: flex;
	justify-content: center;
`;
const VideoPlayer = styled.iframe`
	width: 1120px;
	/* margin-left: em; */
	height: 560px;
`;
const S = {
	VideoContainer,
	VideoPlayer,
};
