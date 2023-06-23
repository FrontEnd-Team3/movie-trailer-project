import styled from "styled-components";
import { useEffect, useState } from "react";
import { axiosInstance } from "apis/@core";

const Gallery = ({ id }) => {
	/*
		movie/{movie_id}/images
        - file_path
        - 가로형 1: backdrop[0]
        - 세로형 2: posters[0], posters[1]
	*/
	const [images, setImages] = useState(null);
	const BaseURL = "https://image.tmdb.org/t/p/w500";
	let Image1;
	let Image2;
	let Image3;

	const getImages = async movie_id => {
		const res = await axiosInstance.get(`/movie/${movie_id}/images`, {
			params: { api_key: process.env.REACT_APP_TOKEN },
		});
		console.log("images", res.data);
		setImages(res.data);
	};

	useEffect(() => {
		getImages(id);
	}, []);

	if (images && images.backdrops.length) {
		Image1 = BaseURL + images.backdrops[0].file_path;
	} else {
		Image1 = null;
	}

	if (images && images.logos.length) {
		Image2 = BaseURL + images.logos[0].file_path;
	} else {
		Image2 = null;
	}

	if (images && images.posters.length) {
		if (images.posters.length > 100) {
			Image3 = BaseURL + images.posters[100].file_path;
		} else {
			Image3 = BaseURL + images.posters[0].file_path;
		}
	} else {
		Image3 = null;
	}

	return (
		images && (
			<S.MovieGallery>
				<S.Title>Gallery</S.Title>
				<div>
					{Image1 ? (
						<S.TopImage src={Image1} />
					) : (
						<S.NoBackdropImage>No Image</S.NoBackdropImage>
					)}
				</div>
				<S.GalleryBottom>
					{Image2 ? (
						<S.BottomImage src={Image2} />
					) : (
						<S.NoImage>No Image</S.NoImage>
					)}
					{Image3 ? (
						<S.BottomImage src={Image3} />
					) : (
						<S.NoImage>No Image</S.NoImage>
					)}
				</S.GalleryBottom>
			</S.MovieGallery>
		)
	);
};

export default Gallery;

const Title = styled.div`
	font-size: 28px;
	font-style: italic;
	font-weight: 500;
	margin-bottom: 20px;
`;

const MovieGallery = styled.div`
	grid-area: 1/4/5/6;
	text-align: right;
	width: 300px;
	margin-left: 150px;
`;

const TopImage = styled.img`
	width: 300px;
	height: 160px;
`;

const GalleryBottom = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
`;

const BottomImage = styled.img`
	width: 140px;
	height: 180px;
`;

const NoBackdropImage = styled.div`
	width: 300px;
	height: 160px;
	background-color: gray;
	text-align: center;
	padding-left: 9px;
	padding-top: 70px;
`;
const NoImage = styled.div`
	width: 140px;
	height: 180px;
	background-color: gray;
	text-align: center;
	padding-left: 10px;
	padding-top: 80px;
`;
const S = {
	Title,
	MovieGallery,
	TopImage,
	GalleryBottom,
	BottomImage,
	NoBackdropImage,
	NoImage,
};
