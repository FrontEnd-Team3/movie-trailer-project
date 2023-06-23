import styled from "styled-components";
import FakeProfile from "../img/FakeProfile.jpg";

const OneReview = ({ review }) => {
	/*
        - 이미지가 없는 경우 기본 프로필, 별점이 없는 경우 no rating 띄우기
        - 프로필 이미지: author_details[avatar_path]
        - 작성자 이름: author
        - 평점: author_details[rating]
        - 내용: content
	*/

	const BaseURL = "https://image.tmdb.org/t/p/w500";

	// console.log("review", review);
	let profileURL;
	if (review.author_details.avatar_path) {
		// 이미지 주소가 "/https:~"인 경우 앞의 slash 삭제 후 바로 이미지 주소가 될 수 있도록
		if (review.author_details.avatar_path.includes("http")) {
			const replacedURL = review.author_details.avatar_path.replace("/", "");
			profileURL = replacedURL;
		} else {
			// BaseURL과 사용해야하는 이미지 주소라면
			profileURL = BaseURL + review.author_details.avatar_path;
		}
	} else {
		// 프로필 이미지가 없다면
		profileURL = FakeProfile;
	}

	// 별점 없는 경우 처리
	let UserRating;
	if (review.author_details.rating) {
		UserRating = review.author_details.rating;
	} else {
		UserRating = "No Rating";
	}

	return (
		<Review>
			<ReviewTop>
				<UserInfo>
					<div>
						<ProfileImage src={profileURL} />
					</div>
					<UserName>UserName</UserName>
				</UserInfo>
				<UserRate>★{UserRating}</UserRate>
			</ReviewTop>
			<ReviewContent>{review.content}</ReviewContent>
		</Review>
	);
};

export default OneReview;

const Review = styled.div`
	width: 322px;
	height: 247px;
	background-color: #d9d9d9;
	border-radius: 16px;
	padding: 10px;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-right: 40px;
`;

const ProfileImage = styled.img`
	border-radius: 50%;
	width: 44px;
	height: 44px;
`;

const UserRate = styled.div`
	color: #f09191;
	margin-top: 10px;
	margin-right: 10px;
	font-size: 15px;
`;

const ReviewContent = styled.div`
	margin-top: 10px;
	font-weight: 100;
	line-height: 30px;
`;

const ReviewTop = styled.div`
	display: flex;
	justify-content: space-between;
`;

const UserInfo = styled.div`
	display: flex;
	justify-content: space-around;
	font-size: 24px;
`;

const UserName = styled.div`
	margin-left: 10px;
	margin-top: 10px;
`;
