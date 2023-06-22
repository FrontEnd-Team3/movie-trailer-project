import styled from "styled-components";

const Credits = () => {
	return (
		<>
			<Container>
				<Title>Director</Title>Richard Curis
			</Container>
			<Container>
				<Title>Writer</Title>Richard Curis
			</Container>
			<Container>
				<Title>Top Cast</Title>Domhnall Gleeson, Rachel McAdams
			</Container>
		</>
	);
};

export default Credits;

const Container = styled.div`
	display: flex;
`;

const Title = styled.div`
	font-size: 15px;
	font-weight: 700;
	margin-bottom: 10px;
	margin-right: 30px;
`;
