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
		<>
			<ReviewsTop>
				<Title>Reviews</Title>
				<span>{reviewList.length}</span>
			</ReviewsTop>
			{reviewList.length ? (
				<ReviewSlides reviewList={reviewList} />
			) : (
				<NoReview>No Reviews</NoReview>
			)}
		</>
	);
};

export default Reviews;

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

const ReviewListBox = styled.div`
	display: flex;
	overflow: hidden;
	button {
		border: none;
		background-color: white;
	}
`;

const ReviewList = styled.div`
	display: flex;
	/* justify-content: space-around; */
`;

const Title = styled.div`
	font-size: 28px;
	font-style: italic;
	font-weight: 500;
	margin-bottom: 20px;
`;

const NoReview = styled.div`
	height: 247px;
	color: darkgray;
	margin-left: 20px;
`;
