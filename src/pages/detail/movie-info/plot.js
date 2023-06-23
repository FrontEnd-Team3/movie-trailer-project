import styled from "styled-components";

const Plot = ({ plot }) => {
	return (
		<Container>
			<Title>Plot</Title>
			<Overview>{plot ? plot : "No Plot"}</Overview>
		</Container>
	);
};

export default Plot;

const Container = styled.div`
	grid-area: 3 / 1 / 5 / 4;
	margin-top: 20px;
	height: auto;
`;

const Title = styled.div`
	font-size: 28px;
	font-style: italic;
	font-weight: 500;
	margin-bottom: 20px;
`;

const Overview = styled.div`
	font-weight: 200;
	line-height: 25px;
`;
