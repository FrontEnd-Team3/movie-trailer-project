import styled from "styled-components";
import FakeProfile from "../img/9.jpg";

const OneReview = ({ review }) => {
	return (
		<>
			<Review>
				<ReviewTop>
					<UserInfo>
						<div>
							<ProfileImage src={FakeProfile} />
						</div>
						<UserName>UserName</UserName>
					</UserInfo>
					<UserRate>★3.5</UserRate>
				</ReviewTop>

				<ReviewContent>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
					pellentesque mattis lorem sit amet semper. Nam rhoncus justo quis
					dictum placerat. Donec tempor, orci ac tincidunt maximus, sapien massa
					suscipit dolor, at aliquet quam urna vitae metus. Aenean vitae dui
					pulvinar, congue libero quis, consectetur lectus.
				</ReviewContent>
			</Review>
		</>
	);
};

export default OneReview;

const Review = styled.p`
	width: 322px;
	height: 247px;
	background-color: #d9d9d9;
	border-radius: 16px;
	padding: 10px;
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
	font-size: 24px;
`;

const ReviewContent = styled.div`
	margin-top: 10px;
	font-weight: 100;
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
