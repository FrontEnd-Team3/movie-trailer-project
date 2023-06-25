import styled from "styled-components";

const TopButton = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return <StyledTopButton onClick={scrollToTop}>Top</StyledTopButton>;
};

export default TopButton;

const StyledTopButton = styled.button`
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 1000;
`;
