import { RouterProvider } from "react-router-dom";
import router from "routes/routing";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global";
import theme from "styles/theme";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import LanguageStoreProvider from "context/selectedLanguage";

function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<LanguageStoreProvider>
				<QueryClientProvider client={queryClient}>
					<ThemeProvider theme={theme}>
						<GlobalStyles />
						<RouterProvider router={router} />
					</ThemeProvider>
				</QueryClientProvider>
			</LanguageStoreProvider>
		</>
	);
}

export default App;
