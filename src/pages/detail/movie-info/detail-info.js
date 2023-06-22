const { default: styled } = require("styled-components");

const DetailInfo = () => {
	return (
		<>
			<MovieDetailTop>
				<MovieRate>15</MovieRate>
				<MovieTitle>About Time</MovieTitle>
			</MovieDetailTop>
			<MovieDetailMiddle>
				<p>2013 | UK</p>
				<p>
					<MovieGenre>Comedy</MovieGenre>
					<MovieGenre>Drama</MovieGenre>
					<MovieGenre>Fantasy</MovieGenre>
				</p>
			</MovieDetailMiddle>
			<StarRating>
				<p>★★★★★</p> <span>5.0(1500)</span>
			</StarRating>
		</>
	);
};

export default DetailInfo;

const MovieDetailTop = styled.div`
	margin-top: 10px;
	display: flex;
`;

const MovieRate = styled.span`
	background-color: #ffe5e5;
	font-size: 24px;
	color: #646464;
	font-weight: Semi bold;
	border-radius: 5px;
	text-align: center;
	vertical-align: middle;
	padding: 5px;
`;

const MovieTitle = styled.div`
	font-weight: bold;
	font-size: 32px;
	margin-left: 20px;
`;

const MovieDetailMiddle = styled.div`
	display: flex;
	font-size: 15px;
	font-weight: 400;
	line-height: 21px;
	p {
		display: flex;
	}
`;

const MovieGenre = styled.span`
	background-color: #d9d9d9;
	border-radius: 34px;
	width: 75px;
	height: 21px;
	margin-left: 10px;
	text-align: center;
`;

const StarRating = styled.div`
	font-size: 24px;
	color: #f09191;
	margin-left: -5px;
	display: flex;
	p {
		font-size: 32px;
		font-weight: bold;
		margin-right: 10px;
	}
	span {
		line-height: 32px;
	}
`;
