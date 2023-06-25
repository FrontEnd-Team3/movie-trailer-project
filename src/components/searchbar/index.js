import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "context/selectedLanguage";

const SearchBar = () => {
	const navigate = useNavigate();

	const { selectedLanguage } = useLanguage();
	return (
		<div>
			<S.Form>
				<S.SearchInput
					autocomplete="off"
					placeholder={
						selectedLanguage === "ko-KR"
							? "작품명을 검색해보세요."
							: "Search Movies You Want"
					}
				/>
				<S.SearchButton onClick={() => navigate("/search")}>
					<FiSearch size={16} />
				</S.SearchButton>
			</S.Form>
		</div>
	);
};

export default SearchBar;

const Form = styled.form`
	position: relative;
`;

const SearchInput = styled.input`
	background: #f5f5f7;
	border: none;
	outline: none;
	padding: 10px 51px 10px 12px;
`;

const SearchButton = styled.button`
	border: 0;
	background: transparent;
	cursor: pointer;
	position: absolute;
	right: 2px;
	top: 8px;
`;

const S = {
	Form,
	SearchInput,
	SearchButton,
};
