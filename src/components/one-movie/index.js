import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { flexalignItemCenter } from "styles/common";

const OneMovie = ({ movie }) => {
	const [isLoading, setIsLoading] = useState(true);
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
		<div onClick={() => handlePageMove()}>
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
							<S.Img src={`${imgUrl}${movie.poster_path}`} />
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
	/* :hover {
    cursor: pointer;
    transform: scale(1.5);
    background-color: pink;
    border-radius: 4px;
  } */
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

const EmptyProfile = styled.div`
	border-radius: 4px;
	width: 200px;
	height: 300px;
	background-color: gray;
	text-align: center;
	padding-left: 9px;
	padding-top: 120px;
`;

const S = {
	Title,
	Img,
	VoteLine,
	EmptyProfile,
};
