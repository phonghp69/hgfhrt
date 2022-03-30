import axios from 'axios';

const login = async (userName, password) => {
    const response = await axios.post("https://localhost:7116/Users/Authenticate", {
        userName,
        password,
    });
    if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data));
    }
    return response.data;
};
const authService = {
    login
};

export default authService;