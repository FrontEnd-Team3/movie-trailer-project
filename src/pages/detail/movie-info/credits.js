import { axiosInstance } from "apis/@core";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Credits = ({ id }) => {
	/*
	movie/{movie_id}/credits (프로필 이미지도 추가할 지 고민해볼 것)
        - 감독
            - key: crew
            - job: Director 중 첫 번째
        - 작가
            - key: crew
            - job: Story 중 첫 번째
        - 배우 
            - key: cast (바로 접근 안 되므로 주의)
            - known_for_department로 filter 돌리기 (Acting)
            - order 값이 0, 1인 배우 가져오기 
	*/
	const [creditData, setCreditData] = useState(null);

	const getCredits = async movie_id => {
		const res = await axiosInstance.get(`/movie/${movie_id}/credits`, {
			params: { api_key: process.env.REACT_APP_TOKEN },
		});
		console.log("credit", res.data);
		setCreditData(res.data);
	};

	useEffect(() => {
		getCredits(id);
	}, []);

	let Director;
	let Writer;

	if (creditData) {
		Director = creditData.crew.find(
			person => person.known_for_department === "Directing",
		);
		Writer = creditData.crew.find(
			person => person.known_for_department === "Writing",
		);
	}

	if (Director && Director.name) {
		Director = Director.name;
	} else {
		Director = "unknown";
	}

	if (Writer && Writer.name) {
		Writer = Writer.name;
	} else {
		Writer = "unknown";
	}

	return (
		creditData && (
			<>
				<Container>
					<Title>Director</Title>
					{Director}
				</Container>
				<Container>
					<Title>Writer</Title>
					{Writer}
				</Container>
				<Container>
					<Title>Top Cast</Title>
					{creditData.cast[0].name}, {creditData.cast[1].name}
				</Container>
			</>
		)
	);
};

export default Credits;

const Container = styled.div`
	display: flex;
`;

const Title = styled.div`
	font-size: 15px;
	font-weight: 700;
	margin-bottom: 10px;
	margin-right: 30px;
`;
