// @core.js
import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_URL,
	params: {
		api_key: process.env.REACT_APP_TOKEN,
	},
});
