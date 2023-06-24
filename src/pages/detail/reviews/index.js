import styled from "styled-components";
import { useEffect, useState } from "react";
import { axiosInstance } from "apis/@core";
import ReviewSlides from "./review-slide";

const Reviews = ({ id }) => {
	/*
	movie/{movie_id}/reviews
        - results 로 접근 후 map 돌리기 (뱌로 사용하지 않도록 주의)

	*/
	const [reviewList, setReviewList] = useState([]);

	const getReviews = async movie_id => {
		const res = await axiosInstance.get(`/movie/${movie_id}/reviews`, {
			params: { api_key: process.env.REACT_APP_TOKEN },
		});
		// console.log("credit", res.data);
		setReviewList(res.data.results);
		// console.log("reviews", res.data);
	};

	useEffect(() => {
		getReviews(id);
	}, []);

	return (
		<S.ReviewBox>
			<S.ReviewsTop>
				<S.Title>Reviews</S.Title>
				<span>{reviewList.length}</span>
			</S.ReviewsTop>
			{reviewList.length ? (
				<ReviewSlides reviewList={reviewList} />
			) : (
				<S.NoReview>No Reviews</S.NoReview>
			)}
		</S.ReviewBox>
	);
};

export default Reviews;

const ReviewBox = styled.div`
	margin-top: 50px;
`;

const ReviewsTop = styled.div`
	display: flex;
	margin-left: 20px;
	span {
		margin-left: 10px;
		font: 25px italic;
		color: lightgray;
	}
`;

const Title = styled.div`
	font-size: 28px;
	font-style: italic;
	font-weight: 500;
	margin-bottom: 20px;
`;

const NoReview = styled.div`
	height: 100px;
	color: darkgray;
	margin-left: 20px;
`;

const S = { ReviewBox, ReviewsTop, Title, NoReview };
