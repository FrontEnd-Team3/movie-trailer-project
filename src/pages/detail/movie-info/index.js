import styled from "styled-components";
import Credits from "./credits";
import Plot from "./plot";
import Gallery from "./gallery";
import DetailInfo from "./detail-info";
import Poster from "../components/poster";

const MovieInfo = () => {
	return (
		<MovieInfoContainer>
			<MovieDetail>
				<Poster />
				<MovieDetailContent>
					<DetailInfo />
					<Credits />
				</MovieDetailContent>
			</MovieDetail>
			<Plot />
			<Gallery />
		</MovieInfoContainer>
	);
};

export default MovieInfo;

const MovieInfoContainer = styled.div`
	width: 1080px;
	padding-top: 20px;
	padding-left: 20px;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(4, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
`;

const MovieDetail = styled.div`
	grid-area: 1 / 1 / 3 / 4;
	display: flex;
`;

const MovieDetailContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 20px;
`;
