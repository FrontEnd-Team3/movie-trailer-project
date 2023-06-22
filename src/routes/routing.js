import Layout from "layout";
import DetailPage from "pages/detail";
import Main from "pages/main";
import NowPlaying from "pages/now-playing";
import Search from "pages/search";
import TopRated from "pages/top-rated";
import Upcoming from "pages/upcoming";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/search",
				element: <Search />,
			},
			{
				path: "movies/detail",
				element: <DetailPage />,
			},
			{
				path: "/",
				element: <Main />,
			},
			{
				path: "movies/",
				element: <Main />,
			},
			{
				path: "movies/popular",
				element: <Main />,
			},
			{
				path: "movies/now-playing",
				element: <NowPlaying />,
			},
			{
				path: "movies/upcoming",
				element: <Upcoming />,
			},
			{
				path: "movies/top-rated",
				element: <TopRated />,
			},
		],
	},
]);

export default router;
