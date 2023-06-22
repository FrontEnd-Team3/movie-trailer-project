import Image1 from "../img/image 4.png";
import Image2 from "../img/image 2.png";
import Image3 from "../img/img.jpg";
import styled from "styled-components";

const Gallery = () => {
	return (
		<MovieGallery>
			<Title>Gallery</Title>
			<div>
				<TopImage src={Image1} />
			</div>
			<GalleryBottom>
				<BottomImage src={Image2} />
				<BottomImage src={Image3} />
			</GalleryBottom>
		</MovieGallery>
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
