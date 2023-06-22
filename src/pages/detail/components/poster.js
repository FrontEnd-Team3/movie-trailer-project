import styled from "styled-components";
import PosterImg from "../img/Group 4.jpg";
const Poster = () => {
	return (
		<div>
			<MoviePoster src={PosterImg} />
		</div>
	);
};

export default Poster;

const MoviePoster = styled.img`
	width: 165px;
	height: 269px;
`;
