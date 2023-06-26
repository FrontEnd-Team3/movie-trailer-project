//movie-list
import OneMovie from "components/one-movie";
import TopButton from "components/top-button";
import styled from "styled-components";
import { wrapper } from "styles/common";

const MovieList = ({ movies }) => {
	return (
		<S.Wrapper>
			<S.Container>
				<TopButton />
				{movies?.map(movie => (
					<OneMovie key={movie.id} movie={movie} />
				))}
			</S.Container>
		</S.Wrapper>
	);
};

export default MovieList;

const Wrapper = styled.div`
	${wrapper}
	margin: 10px 0 60px 0;
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
