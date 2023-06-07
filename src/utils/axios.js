import deafultAxios from "axios";

const axios = () =>
	deafultAxios.create({
		baseURL: "https://ecommerce-app-kh8a.onrender.com",
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});

export default axios;
