import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";
const OneSlide = ({ movie, slide }) => {
	const imgUrl = "https://image.tmdb.org/t/p/w500";
	const navigate = useNavigate();
	const onClickNavigate = () => {
		navigate(`/movies/detail?id=${movie.id}`);
	};
	return (
		<div>
			<div
				style={{
					transform: `translateX(${slide}px) `,
					transition: `0.5s ease`,
				}}
			>
				<S.Wrap>
					<S.Img src={`${imgUrl}${movie.backdrop_path}`}></S.Img>
					<TextWrapper>
						<p>{movie.title}</p>
						<div>{movie.overview}</div>
						<div>
							<p>Realease</p>
							<p>{movie.release_date.slice(0, 4)},</p>
							<p>{movie.release_date.slice(5, 7)}</p>
							<p>{movie.release_date.slice(8, 10)}</p>
						</div>
						<S.Play>
							<div onClick={onClickNavigate}>
								<BsFillPlayFill size={20} />
							</div>
							<div onClick={onClickNavigate}>play</div>
							<div>
								<AiOutlineExclamationCircle size={17} />
							</div>
						</S.Play>
					</TextWrapper>
				</S.Wrap>
			</div>
		</div>
	);
};
export default OneSlide;

const Play = styled.div`
	display: flex;
	position: relative;
	bottom: 3px;
	right: 4px;
	cursor: pointer;
	div:nth-child(2) {
		position: relative;
		left: 2px;
	}
	div:nth-child(3) {
		position: relative;
		left: 13px;
		top: 2px;
	}
`;
const TextWrapper = styled.div`
	width: 360px;
	height: 128px;
	position: relative;
	left: 15px;
	color: white;
	bottom: 190px;
	line-height: 2;
	-webkit-text-stroke-width: 0.2px;
	text-shadow: 0px 0.1px black, 0.1px 0px black;
	p:first-child {
		font-size: 27px;
		font-weight: bold;
	}
	div:nth-child(2) {
		height: 60px;
		font-size: 12px;
		line-height: 1.6;
		text-overflow: ellipsis;
		overflow: hidden;
		min-height: 22px;
	}
	div:nth-child(3) {
		display: flex;
		font-size: 12px;
		line-height: 3;
		p:first-child {
			margin-right: 8px;
			font-size: 12px;
		}
		p:nth-child(2) {
			margin-right: 5px;
		}
		p:nth-child(3) {
			margin-right: 5px;
		}
	}
`;

const Wrap = styled.div`
	width: 525px;
	height: 290px;
	margin-right: 28px;
	position: relative;
	overflow: hidden;
	border-radius: 13px;
	right: 280px;
`;

const Img = styled.img`
	width: 525px;
	position: relative;
	&:hover {
		transform: scale(1.3);
		transition: 0.5s ease;
	}
`;

const S = {
	Wrap,
	Img,
	Play,
};
