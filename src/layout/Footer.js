import styled from "styled-components";
import { containerBasic, flexSpaceBetween, wrapper } from "styles/common";
import { GoTriangleDown } from "react-icons/go";
import { SiGithub } from "react-icons/si";
import { RxNotionLogo } from "react-icons/rx";

const Footer = () => {
	const onGoToGithub = () => {
		window.location.href =
			"https://github.com/FrontEnd-Team3/movie-trailer-project";
	};

	const onGoToNotion = () => {
		window.location.href =
			"https://gentle-tin-2c4.notion.site/Movie_Trailer_Site-44a200ab5feb4e4ea4f4644c5fc2759c";
	};

	return (
		<S.footerWrapper>
			<S.Container>
				<div>
					<S.Ul>
						<li>프로젝트 소개</li>
						<li>Repository</li>
						<li>Notion</li>
					</S.Ul>
					<S.Ul>
						<li>주식회사 상영관</li>
						<li>서울특별시 강남구 테헤란로 146 현익빌딩 3,4층</li>
					</S.Ul>
					<S.Ul>
						<li>
							copyright ⓒ <span>2023 by 상영관, Inc. All rights reserved.</span>
						</li>
					</S.Ul>
				</div>
				<S.RightSection>
					<S.SelectBox>
						<S.Select>
							<option value="ko-KR">한국어</option>
							<option value="en-US">English</option>
						</S.Select>
						<GoTriangleDown width={16} />
					</S.SelectBox>
					<S.Icons>
						<SiGithub onClick={onGoToGithub} />
						<RxNotionLogo onClick={onGoToNotion} />
					</S.Icons>
				</S.RightSection>
			</S.Container>
		</S.footerWrapper>
	);
};

export default Footer;

const footerWrapper = styled.footer`
	background-color: #1c1d1f;
	padding: 38px 0;
	color: #fff;
	${wrapper}
`;

const Container = styled.div`
	${flexSpaceBetween}
	align-items: center;
	${containerBasic}
	font-size: 14px;
	color: #a5a5a7;
	font-weight: 500;

	div > ul {
		margin-bottom: 20px;
	}

	div > ul > li {
		cursor: pointer;
	}
`;

const Ul = styled.ul`
	display: flex;

	li::after {
		content: "";
		display: inline-block;
		background: #848485;
		vertical-align: top;
		width: 2px;
		height: 14px;
		margin: 0 8px;
	}

	li:last-of-type::after {
		display: none;
	}
`;

const RightSection = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;
`;

const SelectBox = styled.div`
	position: relative;

	& svg {
		position: absolute;
		top: 11px;
		right: 8px;
		color: #a5a5a7;
	}
`;

const Select = styled.select`
	color: #fff;
	background: transparent;
	appearance: none;
	padding: 4px;
	padding: 10px 40px 10px 16px;

	option {
		background: #1c1d1f;
		color: #fff;
		outline: none;
	}
`;

const Icons = styled.div`
	svg {
		width: 26px;
		height: 26px;
		color: #fff;
		margin-left: 10px;
		cursor: pointer;
	}
`;

const S = {
	footerWrapper,
	Container,
	Ul,
	SelectBox,
	Select,
	RightSection,
	Icons,
};
