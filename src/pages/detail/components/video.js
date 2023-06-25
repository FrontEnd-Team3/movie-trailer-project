import styled from "styled-components";
import { axiosInstance } from "apis/@core";
import { useEffect, useState } from "react";

const Video = ({ id }) => {
	// 1. Video
	const [videoLink, setVideoLink] = useState(null);

	const getVideo = async movie_id => {
		const res = await axiosInstance.get(`/movie/${movie_id}/videos`, {
			params: { api_key: process.env.REACT_APP_TOKEN },
		});

		const TrailerVideo = res.data.results.find(
			video => video.name === "Official Trailer",
		);

		console.log("res", res.data.results);

		// console.log("video", TrailerVideo);
		if (TrailerVideo && TrailerVideo.site === "YouTube") {
			setVideoLink(
				// autoplay: 페이지 접속 시 동영상 자동재생
				// mute: chrome에서 자동재생 막는 현상 방지
				`https://www.youtube.com/embed/${TrailerVideo.key}?autoplay=1&mute=1`,
			);
		}
	};

	useEffect(() => {
		getVideo(id);
	}, []);

	return (
		videoLink && (
			<S.VideoContainer>
				<S.VideoPlayer src={videoLink} allowFullScreen></S.VideoPlayer>
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
