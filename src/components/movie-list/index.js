import OneMovie from "components/one-movie";
import styled from "styled-components";
import { wrapper } from "styles/common";

const MovieList = ({ movies }) => {
	return (
		<S.Wrapper>
			<S.Container>
				{movies.map((movie, i) => (
					<OneMovie key={i} movie={movie} />
				))}
			</S.Container>
		</S.Wrapper>
	);
};

export default MovieList;

const Wrapper = styled.div`
	${wrapper}
	margin: 60px 0;
`;

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 20px;
`;

const S = {
	Wrapper,
	Container,
};
