const BASEURL = 'https://projectalphaapi.onrender.com';
const ENDPOINT = {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login"
}

// Auth
const register = async (payload) => {
    console.log(payload)
    const opt = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    }
    return await fetch(BASEURL + ENDPOINT.REGISTER, opt)
}

const login = async (payload) => {
    console.log(payload)
    const opt = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    }
    return await fetch(BASEURL + ENDPOINT.LOGIN, opt)
}



export { register,login }