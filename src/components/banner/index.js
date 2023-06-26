import styled from "styled-components";
import { containerBasic, wrapper } from "styles/common";

const Banner = ({ title }) => {
	return (
		<S.Wrapper>
			<S.Container>
				<S.Line></S.Line>
				<S.Line></S.Line>
			</S.Container>
			<S.Title>{title}</S.Title>
		</S.Wrapper>
	);
};

export default Banner;

const Wrapper = styled.div`
	${wrapper}
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	${containerBasic}
	position: relative;
	height: 100px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

const Line = styled.div`
	width: 100%;
	height: 4px;
	background-color: #777;
	margin: 4px 0;
`;

const Title = styled.div`
	position: absolute;
	color: #333;
	background-color: #fff;
	font-size: 36px;
	padding: 10px;
	font-family: "Alfa Slab One", cursive;
`;

const S = {
	Wrapper,
	Container,
	Line,
	Title,
};
