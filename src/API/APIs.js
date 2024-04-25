const BASEURL = 'https://projectalphaapi.onrender.com';
const ENDPOINT = {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
    RESET: "/api/resetpassword",
    VALIDATE: "/api/validateotp",
    PROFILE: "/api/profile",
    INVITECODE: '/api/genrateInviteCode'
}

// Auth
const register = async (payload) => {
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
    const opt = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    }
    return await fetch(BASEURL + ENDPOINT.LOGIN, opt)
}

const resetPassword = async (payload) => {
    const opt = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    }
    return await fetch(BASEURL + ENDPOINT.RESET, opt)
}

const validateotp = async (payload) => {
    const opt = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    }
    return await fetch(BASEURL + ENDPOINT.VALIDATE, opt)
}

const profile = async (jwt) => {
    const opt = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`
        }
    };
    return await fetch(BASEURL + ENDPOINT.PROFILE, opt);
};

const updateInviteCode = async (payload) => {
    const opt = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${payload.token}`
        },
        body: JSON.stringify(payload.inviteCode),

    };
    return await fetch(BASEURL + ENDPOINT.INVITECODE, opt);

}



export { register, login, resetPassword, validateotp, profile, updateInviteCode }