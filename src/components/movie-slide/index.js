import OneSlide from "components/one-slide";
import { useState } from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import styled from "styled-components";

const MovieSlide = ({ movies }) => {
	const [slide, setSlide] = useState(0);

	const toPrev = () => {
		if (slide < 0) setSlide(slide + 553);
	};
	const toNext = () => {
		if (slide > -12600) setSlide(slide - 553);
	};

	return (
		<div>
			<S.PButton onClick={toPrev}>
				<MdOutlineNavigateBefore size={50} />
			</S.PButton>
			<S.NButton onClick={toNext}>
				<MdOutlineNavigateNext size={50} />
			</S.NButton>
			<S.Wrapper>
				{movies.map(movie => (
					<OneSlide movie={movie} slide={slide} />
				))}
			</S.Wrapper>
		</div>
	);
};
export default MovieSlide;

const PButton = styled.div`
	background-color: #818181;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	position: relative;
	top: 170px;
	left: 220px;
	cursor: pointer;
	svg {
		color: aliceblue;
	}
`;

const NButton = styled.div`
	background-color: #818181;
	height: 50px;
	width: 50px;
	left: 1415px;
	top: 100px;
	border-radius: 50%;
	position: relative;

	cursor: pointer;
	svg {
		color: aliceblue;
	}
`;
const Wrapper = styled.div`
	overflow: hidden;
	height: 300px;
	width: 1080px;
	display: flex;
	margin: 0px auto;
	margin-top: -50px;
`;

const S = {
	Wrapper,
	PButton,
	NButton,
};
