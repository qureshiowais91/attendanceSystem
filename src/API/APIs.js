const BASEURL = 'https://projectalphaapi.onrender.com';
const ENDPOINT = {
  REGISTER: '/api/auth/register',
  LOGIN: '/api/auth/login',
  RESET: '/api/resetpassword',
  VALIDATE: '/api/validateotp',
  PROFILE: '/api/user/profile',
  INVITECODE: '/api/genrateInviteCode',
  JOINSCHOOL: '/api/joinbyInviteCode',
  CREATESCHOOL: '/api/school',
  CREATECLASSROOM: '/api/admin/classroom',
  ADDSTUDENT: '/api/student',
  GETCLASSROOMS: '/api/user/classrooms',
  JOINCLASSROOM: '/api/user/classroom/join',
  LISTSTUDENT: '/api/user/classroom/students', // depricated by LISTSTUDENTS //list student by classroomId // any teacher who is join to that same school could list and take attendance
  JOINCLASSROOMTEACHER: '/api/user/classroomTeacher/join',
  CREATEATTENDANCE: '/api/user/attendance',
  RESETPASSWORD: '/api/reset',
  LISTSTUDENTS: '/api/user/students',
  VIEWATTANDANCE: '/api/user/viewAttendance',
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
// send otp
// change name to sendotp
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

const getStudentsByClassroom = async (payload) => {
  const opt = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${payload.token}`, // teacher will send token //
    },
    body: JSON.stringify({ classroomId: payload.classroomId }),
  };
  return await fetch(BASEURL + ENDPOINT.LISTSTUDENT, opt);
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

const joinClassroom = async (payload) => {
  const opt = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${payload.token}`,
    },
    body: JSON.stringify(payload.joinPayload), // student id and classroom id
  };
  return await fetch(BASEURL + ENDPOINT.JOINCLASSROOM, opt);
};

const joinClassroomTeacher = async (payload) => {
  const opt = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${payload.token}`,
    },
    body: JSON.stringify(payload.joinPayload), // student id and classroom id
  };
  return await fetch(BASEURL + ENDPOINT.JOINCLASSROOMTEACHER, opt);
};

const createAttendance = async (payload) => {
  const opt = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${payload.token}`,
    },
    body: JSON.stringify(payload.attendance), // studentId,schoolId
  };
  return await fetch(BASEURL + ENDPOINT.CREATEATTENDANCE, opt);
};

// change new password
const resetpassword = async (payload) => {
  const opt = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: payload.email,
      newpassword: payload.newpassword,
    }), // student id and classroom id
  };
  return await fetch(BASEURL + ENDPOINT.RESETPASSWORD, opt);
};

const students = async (payload) => {
  const opt = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${payload.token}`,
    },
  };
  return await fetch(BASEURL + ENDPOINT.LISTSTUDENTS + payload.query, opt);
};

const viewattandance = async (payload) => {
  const opt = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${payload.token}`,
    },
  };
  return await fetch(BASEURL + ENDPOINT.VIEWATTANDANCE, opt);
};

export {
  register,
  login,
  resetPassword, //change name
  validateotp,
  profile,
  updateInviteCode,
  joinbyInviteCode,
  createNewSchool,
  addStudent,
  listClassroom,
  createClassroom,
  joinClassroom, //Student Join Classroom as soon as they are  Created by parent
  joinClassroomTeacher,
  getStudentsByClassroom,
  createAttendance,
  resetpassword,
  students,
  viewattandance
};
