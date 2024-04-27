const BASEURL = 'https://projectalphaapi.onrender.com';
const ENDPOINT = {
    REGISTER: '/api/auth/register',
    LOGIN: '/api/auth/login',
    RESET: '/api/resetpassword',
    VALIDATE: '/api/validateotp',
    PROFILE: '/api/profile',
    INVITECODE: '/api/genrateInviteCode',
    JOINSCHOOL: '/api/joinbyInviteCode',
    CREATESCHOOL: '/api/school',
    CREATECLASSROOM: '/api/admin/classroom',
    ADDSTUDENT: '/api/student',
    GETCLASSROOMS: '/api/user/classrooms',
    JOINCLASSROOM:'/api/user/classroom/join'
};

// Auth
const register = async (payload) => {
    const opt = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    };
    return await fetch(BASEURL + ENDPOINT.REGISTER, opt);
};

const login = async (payload) => {
    const opt = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    };
    return await fetch(BASEURL + ENDPOINT.LOGIN, opt);
};

const resetPassword = async (payload) => {
    const opt = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    };
    return await fetch(BASEURL + ENDPOINT.RESET, opt);
};

const validateotp = async (payload) => {
    const opt = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    };
    return await fetch(BASEURL + ENDPOINT.VALIDATE, opt);
};

const profile = async (jwt) => {
    const opt = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
        },
    };
    return await fetch(BASEURL + ENDPOINT.PROFILE, opt);
};
// inviteCode
const updateInviteCode = async (payload) => {
    const opt = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${payload.token}`,
        },
        body: JSON.stringify(payload.inviteCode),
    };
    return await fetch(BASEURL + ENDPOINT.INVITECODE, opt);
};

const joinbyInviteCode = async (payload) => {
    const opt = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${payload.token}`,
        },
        body: JSON.stringify({ inviteCode: payload.inviteCode }),
    };
    return await fetch(BASEURL + ENDPOINT.JOINSCHOOL, opt);
};

// CreateSchool by Admin Role
const createNewSchool = async (payload) => {
    const opt = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${payload.token}`,
        },
        body: JSON.stringify(payload.school),
    };
    return await fetch(BASEURL + ENDPOINT.CREATESCHOOL, opt);
};

const addStudent = async (payload) => {
    const opt = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${payload.token}`,
        },
        body: JSON.stringify(payload.student),
    };
    return await fetch(BASEURL + ENDPOINT.ADDSTUDENT, opt);
};

const listClassroom = async (payload) => {
    const opt = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${payload.token}`,
        },
    };
    return await fetch(BASEURL + ENDPOINT.GETCLASSROOMS, opt);
};


const createClassroom = async (payload) => {
    const opt = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${payload.token}`,
        },
        body: JSON.stringify(payload.classroom),
    };
    return await fetch(BASEURL + ENDPOINT.CREATECLASSROOM, opt);
};

const joinClassroom =async(payload)=>{
    const opt = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${payload.token}`,
        },
        body: JSON.stringify(payload.joinPayload),// student id and classroom id
    };
    return await fetch(BASEURL + ENDPOINT.JOINCLASSROOM, opt);
}

export {
    register,
    login,
    resetPassword,
    validateotp,
    profile,
    updateInviteCode,
    joinbyInviteCode,
    createNewSchool,
    addStudent,
    listClassroom,
    createClassroom,
    joinClassroom
};
