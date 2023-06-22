import styled from "styled-components";
import OneReview from "./one-review";

const Reviews = () => {
	const reviewList = [{ user: "aaa" }, { user: "aaa" }, { user: "aaa" }];
	return (
		<ReviewsContainer>
			<ReviewsTop>
				<Title>Reviews</Title>
				<span>1500 +</span>
			</ReviewsTop>
			<ReviewList>
				{reviewList.map((review, i) => (
					<OneReview key={i} review={review} />
				))}
			</ReviewList>
		</ReviewsContainer>
	);
};

export default Reviews;

const ReviewsContainer = styled.div`
	margin-top: -100px;
`;

const ReviewsTop = styled.div`
	display: flex;
	margin-left: 20px;
	span {
		margin-left: 10px;
		margin-top: -3px;
		font: 25px italic;
		color: lightgray;
	}
`;

const ReviewList = styled.div`
	display: flex;
	justify-content: space-around;
`;

const Title = styled.div`
	font-size: 28px;
	font-style: italic;
	font-weight: 500;
	margin-bottom: 20px;
`;
