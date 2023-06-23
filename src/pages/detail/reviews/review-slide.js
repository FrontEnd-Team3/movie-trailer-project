import Slider from "react-slick";
import OneReview from "./one-review";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function NextArrow(props) {
	const { style, onClick } = props;
	return (
		<FontAwesomeIcon
			style={{
				...style,
				display: "block",
				position: "absolute",
				zIndex: "1",
				marginTop: "-125px",
				marginLeft: "1050px",
			}}
			onClick={onClick}
			icon={faChevronRight}
		/>
	);
}

function PrevArrow(props) {
	const { style, onClick } = props;
	return (
		<FontAwesomeIcon
			style={{
				...style,
				display: "block",
				position: "absolute",
				zIndex: "1",
				marginTop: "120px",
				marginLeft: "-30px",
			}}
			onClick={onClick}
			icon={faChevronLeft}
		/>
	);
}

export default class MultipleItems extends Component {
	render() {
		const { reviewList } = this.props;
		console.log("reviewList", reviewList);

		const settings = {
			dots: true,
			arrow: true,
			infinite: true,
			speed: 700,
			slidesToShow: 3,
			slidesToScroll: Math.ceil(reviewList.length / 3),
			nextArrow: <NextArrow />,
			prevArrow: <PrevArrow />,
		};
		return (
			<ReviewSliderBox>
				<Slider {...settings}>
					{reviewList.map((review, i) => (
						<OneReview key={i} review={review} />
					))}
				</Slider>
			</ReviewSliderBox>
		);
	}
}

const ReviewSliderBox = styled.div`
	margin-left: 60px;
`;
