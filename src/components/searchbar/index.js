import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";

const SearchBar = () => {
	const navigate = useNavigate();

	const formRef = useRef();
	const selectRef = useRef();
	const [searchParams, setSearchParams] = useSearchParams();

	const searchRedirect = e => {
		e.preventDefault();
		searchParams.set("query", formRef.current.key.value);
		navigate(`/search?${searchParams.toString()}`);
	};

	const selectRedirect = () => {
		searchParams.set("criterion", selectRef.current.value);
		navigate(`/search?${searchParams.toString()}`);
	};

	useEffect(() => {
		if (formRef.current && formRef.current.key.value !== "") searchRedirect();
		// while (!selectRef.current) {}
		console.log("ref", selectRef.current.value);
		selectRedirect();
	}, []);


	return (
		<>
			<div>
				<S.Form onSubmit={searchRedirect} ref={formRef}>
					<S.SearchInput
						autocomplete="off"
						placeholder="검색어를 입력해보세요."
						onChange={searchRedirect}
						name="key"
					/>
					<S.SearchButton>
						<FiSearch size={16} />
					</S.SearchButton>
				</S.Form>
			</div>
			<S.SearchSelect
				name="searchCriterion"
				ref={selectRef}
				id=""
				onChange={selectRedirect}
			>
				<SearchOption value="collection">Collection</SearchOption>
				<SearchOption value="company">Company</SearchOption>
				<SearchOption value="keyword">Keyword</SearchOption>
				<SearchOption value="movie">Movie</SearchOption>
				<SearchOption value="multi">Multi</SearchOption>
				<SearchOption value="person">Person</SearchOption>
				<SearchOption value="tv">TV</SearchOption>
			</S.SearchSelect>
		</>
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

const SearchSelect = styled.select`
	background: #f5f5f7;
	border: none;
	outline: none;
	padding: 10px 51px 10px 12px;
	margin-left: 10px;
`;
// Option 스타일링 방법 찾기

const SearchOption = styled.option`
	font-family: inherit;
	background-color: #f5f5f7;
	border: none;
	outline: none;
	padding: 10px 51px 10px 12px;
`;

const S = {
	Form,
	SearchInput,
	SearchButton,
	SearchSelect,
	SearchOption,
};
