import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

import { useNavigate, useSearchParams } from "react-router-dom";
import { useLanguage } from "context/selectedLanguage";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { Select, MenuItem } from "@mui/material";


const SearchBar = () => {
	const navigate = useNavigate();

	const formRef = useRef();
	const selectRef = useRef();
	const [searchParams, setSearchParams] = useSearchParams();
	const [criterion, setCriterion] = useState("collection");
  const { selectedLanguage } = useLanguage();

	const searchRedirect = e => {
		e.preventDefault();
		searchParams.set("query", formRef.current.key.value || "");
		navigate(`/search?${searchParams.toString()}`);
	};

	const selectRedirect = value => {
		console.log(window.location);
		searchParams.set("criterion", value || "collection");
		navigate(window.location.pathname + "?" + searchParams.toString());
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
						placeholder={
						selectedLanguage === "ko-KR"
							? "작품명을 검색해보세요."
							: "Search Movies You Want"
					}
						name="key"
					/>
					<S.SearchButton>
						<FiSearch size={16} />
					</S.SearchButton>
				</S.Form>
			</div>
			<Select
				id="demo-select-small"
				value={criterion}
				ref={selectRef}
				onChange={e => {
					setCriterion(e.target.value);
					selectRedirect(e.target.value);
				}}
				displayEmpty
				inputProps={{ "aria-label": "Without label" }}
				style={{ marginLeft: "10px", height: "35px", fontSize: "12px" }}
			>
				<MenuItem value="collection">Collection</MenuItem>
				<MenuItem value="company">Company</MenuItem>
				<MenuItem value="keyword">Keyword</MenuItem>
				<MenuItem value="movie">Movie</MenuItem>
				<MenuItem value="multi">Multi</MenuItem>
				<MenuItem value="person">Person</MenuItem>
				<MenuItem value="tv">TV</MenuItem>
			</Select>
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
