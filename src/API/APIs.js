const BASEURL = 'https://projectalphaapi.onrender.com';
const ENDPOINT = {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
    RESET: "/api/resetpassword",
    VALIDATE: "/api/validateotp",
    PROFILE: "/api/profile",
    INVITECODE: '/api/genrateInviteCode',
    JOINSCHOOL: '/api/joinbyInviteCode',
    CREATESCHOOL: '/api/school',
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
// inviteCode
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

const joinbyInviteCode = async (payload) => {
    const opt = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${payload.token}`
        },
        body: JSON.stringify(payload.inviteCode),

    };
    return await fetch(BASEURL + ENDPOINT.JOINSCHOOL, opt);
}


// CreateSchool by Admin Role
const createNewSchool = async (payload) => {
    const opt = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${payload.token}`
        },
        body: JSON.stringify(payload.school),

    };
    return await fetch(BASEURL + ENDPOINT.CREATESCHOOL, opt);
}


export { register, login, resetPassword, validateotp, profile, updateInviteCode, joinbyInviteCode, createNewSchool }