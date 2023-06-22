import styled from "styled-components";

const Plot = () => {
	return (
		<Container>
			<Title>Plot</Title>
			<Overview>
				At the age of 21, Tim discovers he can travel in time and change what
				happens and has happened in his own life. His decision to make his world
				a better place by getting a girlfriend turns out not to be as easy as
				you might think.
			</Overview>
		</Container>
	);
};

export default Plot;

const Container = styled.div`
	grid-area: 3 / 1 / 5 / 4;
	margin-top: 20px;
	height: 100px;
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
