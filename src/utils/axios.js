import deafultAxios from "axios";

const axios = () =>
	deafultAxios.create({
		baseURL: "http://localhost:8080",
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});

export default axios;
