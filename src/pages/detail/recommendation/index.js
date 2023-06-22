import styled from "styled-components";
import OneSimilarMovie from "./one-similar";

const SimilarMovies = () => {
	const similarMovies = [
		{ title: "aaa" },
		{ title: "aaa" },
		{ title: "aaa" },
		{ title: "aaa" },
		{ title: "aaa" },
	];

	return (
		<div>
			<Title style={{ margin: "20px" }}>More Like This</Title>
			<SimilarList>
				{similarMovies.map((movie, i) => (
					<OneSimilarMovie key={i} movie={movie} />
				))}
			</SimilarList>
		</div>
	);
};

export default SimilarMovies;

const Title = styled.div`
	font-size: 28px;
	font-style: italic;
	font-weight: 500;
	margin-bottom: 20px;
`;

const SimilarList = styled.div`
	display: flex;
	justify-content: space-around;
	text-align: center;
	p {
		background-color: #d9d9d9;
		width: 200px;
		height: 300px;
		margin-bottom: 20px;
	}
	div {
		margin-bottom: 10px;
	}
`;
