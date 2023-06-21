import Layout from "layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <div>:)</div>,
				children: [
					{
						path: "main",
						elememt: <div>main page</div>,
					},
					{
						path: "detail",
						elememt: <div>detail page</div>,
					},
				],
			},
		],
	},
]);

export default router;
