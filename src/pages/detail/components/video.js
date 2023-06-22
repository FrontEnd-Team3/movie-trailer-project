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

		// console.log("video", TrailerVideo);
		if (TrailerVideo && TrailerVideo.site === "YouTube") {
			setVideoLink(`https://www.youtube.com/embed/${TrailerVideo.key}`);
		}
	};

	useEffect(() => {
		getVideo(id);
	}, []);

	return (
		videoLink && (
			<VideoContainer>
				<VideoPlayer src={videoLink} allowFullScreen></VideoPlayer>
			</VideoContainer>
		)
	);
};

export default Video;

const VideoContainer = styled.div`
	width: 1120px;
	padding: 43px 100px;
`;

const VideoPlayer = styled.iframe`
	width: 1120px;
	margin-left: 110px;
	height: 560px;
`;
