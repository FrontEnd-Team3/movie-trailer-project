import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";
import { flexalignItemCenter } from "styles/common";
const OneMovie = ({ movie }) => {
	const imgUrl = process.env.REACT_APP_IMG_BASIC_URL;
	return (
		<div>
			<S.Img src={`${imgUrl}${movie.poster_path}`} />
			<S.Title>{movie.title}</S.Title>
			<S.VoteLine>
				<AiFillStar size={16} />
				<span>{(movie.vote_average / 2).toFixed(1)}</span>
			</S.VoteLine>
		</div>
	);
};
export default OneMovie;

const Title = styled.p`
	font-size: 15px;
	word-break: keep-all;
	line-height: 1.2rem;
	font-weight: 500;
	color: #1c1d1f;
	margin-top: 6px;
`;

const Img = styled.img`
	border-radius: 4px;
	width: 200px;
	height: 300px;
`;

const VoteLine = styled.p`
	font-size: 13px;
	margin-top: 6px;
	${flexalignItemCenter}

	& svg {
		color: #fcd53f;
		margin-right: 2px;
	}
`;

const S = {
	Title,
	Img,
	VoteLine,
};
