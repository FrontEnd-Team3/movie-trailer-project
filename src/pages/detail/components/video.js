import styled from "styled-components";
import Fakevideo from "../img/52f1ec75f384ab43dd5bbefd785c183b.gif";

const Video = () => {
	return (
		<VideoContainer>
			<VideoPlayer src={Fakevideo} />
		</VideoContainer>
	);
};

export default Video;

const VideoContainer = styled.div`
	width: 1120px;
	padding: 43px 100px;
`;

// video 받아와지면 video로 바꾸기
const VideoPlayer = styled.img`
	width: 1120px;
	margin-left: 110px;
`;
