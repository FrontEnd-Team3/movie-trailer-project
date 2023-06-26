import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { flexalignItemCenter } from "styles/common";
import { PiPlayCircleLight } from "react-icons/pi";

const OneMovie = ({ movie }) => {
	const [isLoading, setIsLoading] = useState(true);

	const [isHovering, setIsHovering] = useState(false);
	const [timeoutId, setTimeoutId] = useState(null);

	const handleMouseEnter = () => {
		//마우스 올릴때 0.2초 뒤에 true
		const id = setTimeout(() => {
			setIsHovering(true);
		}, 200);
		setTimeoutId(id);
	};

	const handleMouseLeave = () => {
		clearTimeout(timeoutId);
		setIsHovering(false);
	};
	const imgUrl = "https://image.tmdb.org/t/p/w500";
	const navigate = useNavigate();
	const handlePageMove = () => {
		navigate(`/movies/detail?id=${movie.id}`);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div
			onClick={() => handlePageMove()}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Wrapper>
				{isLoading ? (
					<Skeleton
						variant="rectangular"
						width={200}
						height={300}
						animation="wave"
					/>
				) : (
					<>
						{movie.poster_path ? (
							<div>
								<S.Img
									style={{
										backgroundImage: `url(${imgUrl}${movie.poster_path})`,
									}}
								>
									{isHovering && (
										<S.HoverDetail>
											<S.FlexWrapper>
												<p>평점</p>
												<S.StarRating>
													<AiFillStar size={16} color={"rgb(252, 213, 63)"} />
													<p>{(movie.vote_average / 2).toFixed(1)}</p>
												</S.StarRating>
												<S.PlayIcon>
													<PiPlayCircleLight size={36} />
												</S.PlayIcon>
											</S.FlexWrapper>
											<OverviewText>{movie.overview}</OverviewText>
										</S.HoverDetail>
									)}
								</S.Img>
							</div>
						) : (
							<S.EmptyProfile>No Profile</S.EmptyProfile>
						)}
					</>
				)}
				{isLoading ? (
					<Skeleton variant="text" sx={{ fontSize: "15px" }} />
				) : (
					<S.Title>{movie.title}</S.Title>
				)}
				{isLoading ? (
					<Skeleton variant="text" sx={{ fontSize: "13px" }} />
				) : (
					<S.VoteLine>
						<AiFillStar size={16} />
						<span>{(movie.vote_average / 2).toFixed(1)}</span>
					</S.VoteLine>
				)}
			</Wrapper>
		</div>
	);
};

export default OneMovie;

const Wrapper = styled.div`
	cursor: pointer;
`;

const Title = styled.p`
	font-size: 15px;
	word-break: keep-all;
	line-height: 1.2rem;
	font-weight: 500;
	width: 200px;
	color: #1c1d1f;
	margin-top: 6px;
`;

const Img = styled.div`
	border-radius: 4px;
	background-repeat: no-repeat;
	background-size: cover;
	width: 200px;
	height: 300px;
	position: relative;
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

const EmptyProfile = styled.div`
	border-radius: 4px;
	width: 200px;
	height: 300px;
	background-color: gray;
	text-align: center;
	padding-left: 9px;
	padding-top: 120px;
`;

const HoverDetail = styled.div`
	position: absolute;
	width: 200px;
	height: 140px;
	background-color: rgba(0, 0, 0, 0.7);
	bottom: 0;
	color: white;
	white-space: wrap;
	padding: 10px 10px 10px 10px;
`;

const FlexWrapper = styled.div`
	display: flex;
	margin-bottom: 20px;
`;

const OverviewText = styled.div`
	font-size: 14px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: pre-wrap;
	word-wrap: break-word; //단어 단위로 줄바꿈
	display: -webkit-box; //유연하게 height를 증감시킬 수 있는 플렉스 박스형태로 변환
	-webkit-line-clamp: 4; //보여줄 줄 수
	-webkit-box-orient: vertical; //플렉스 박스의 방향 설정(가로)
	line-height: 20px; //행간 간격
`;

const StarRating = styled.div`
	display: flex;
`;
const PlayIcon = styled.div`
	svg {
		color: white;
	}
	position: absolute;
	right: 10px;
	top: 4px;
`;

const S = {
	Title,
	Img,
	VoteLine,
	EmptyProfile,
	HoverDetail,
	FlexWrapper,
	OverviewText,
	StarRating,
	PlayIcon,
};
