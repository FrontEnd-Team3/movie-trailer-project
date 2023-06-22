import { RouterProvider } from "react-router-dom";
import router from "routes/routing";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global";
import theme from "styles/theme";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<RouterProvider router={router} />
				</ThemeProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
