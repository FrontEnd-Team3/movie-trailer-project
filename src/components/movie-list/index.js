import { Skeleton } from "@mui/material";
import OneMovie from "components/one-movie";
import { Suspense } from "react";
import styled from "styled-components";
import { wrapper } from "styles/common";

const MovieList = ({ movies }) => {
	return (
		<S.Wrapper>
			<Suspense fallback={<Skeleton width={200} height={369} />}>
				<S.Container>
					{movies.map(movie => (
						<OneMovie movie={movie} />
					))}
				</S.Container>
			</Suspense>
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
