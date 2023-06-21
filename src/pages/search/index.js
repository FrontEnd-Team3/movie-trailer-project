import MovieList from "components/movie-list";

const Search = () => {
    const searchMovies = {} // 대충 api 콜해오는 로직
    return <MovieList movies={searchMovies}/>;
};
export default Search; 
