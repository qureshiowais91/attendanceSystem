// // import { useEffect, useState } from 'react';
// // import { useSelector } from 'react-redux';
// // import { Paper, Typography } from '@mui/material';
// // import { profile } from '../../API/APIs';

// // const UserProfile = () => {
// //   // Get the JWT token from Redux state
// //   const token = useSelector((state) => state.auth.jwt);

// //   // Define state to store the user profile and loading state
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         // Fetch the user profile using the token
// //         const res = await profile(token);
// //         // Parse the response as JSON
// //         const userData = await res.json();
// //         // Set the user profile in state
// //         setUser(userData);
// //         // Set loading to false once data is fetched
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching profile:', error);
// //         // Set loading to false in case of an error
// //         setLoading(false);
// //       }
// //     };

// //     if (token) {
// //       fetchProfile();
// //     }
// //   }, [token]); // Fetch the profile whenever the token changes

// //   // Render the user profile or loading state
// //   return (
// //     <Paper elevation={3} style={{ padding: '16px' }}>
// //       <Typography variant='h3' gutterBottom>
// //         Profile
// //       </Typography>
// //       {loading ? (
// //         <Typography variant='body1' gutterBottom>
// //           Loading...
// //         </Typography>
// //       ) : user && user.school ? ( // Conditional rendering
// //         <>
// //           <Typography variant='h4' gutterBottom>
// //             School: {user.school.name}
// //           </Typography>
// //           <Typography variant='body1' gutterBottom>
// //             Address: {user.school.address}
// //           </Typography>
// //           <Typography variant='body1' gutterBottom>
// //             Contact Details: {user.school.contactDetails}
// //           </Typography>
// //         </>
// //       ) : (
// //         <Typography variant='body1' gutterBottom>
// //           You Are A {user.role}
// //         </Typography>
// //       )}
// //     </Paper>
// //   );
// // };

// // export default UserProfile;
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import {
//   CircularProgress,
//   TextField,
//   Button,
// } from '@mui/material';
// import { profile } from '../../../API/APIs';

// const UserProfileEditable = ({ setEditMode }) => {
//   const token = useSelector((state) => state.auth.jwt);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [editableUser, setEditableUser] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await profile(token);
//         const userData = await res.json();
//         setUser(userData);
//         setEditableUser(userData);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching profile:', error);
//         setLoading(false);
//         setEditMode(false);
//       }
//     };

//     if (token) {
//       fetchProfile();
//     }
//   }, [token]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setEditableUser((prevUser) => ({
//       ...prevUser,
//       school: {
//         ...prevUser.school,
//         [name]: value,
//       },
//     }));

//     console.log(editableUser)
//   };

//   const handleSave = () => {
//     // Handle saving the updated profile
//     // Example:
//     // saveProfile(editableUser);
//     console.log(editableUser)
//     setUser(editableUser);
//     setEditMode(false);
//   };

//   return (
//     <>
//       {loading ? (
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             minHeight: '100px',
//           }}
//         >
//           <CircularProgress />
//         </div>
//       ) : (
//         <>
//           <TextField
//             fullWidth
//             name='name'
//             label='School Name'
//             value={editableUser?.school?.name || ''}
//             onChange={handleChange}
//             variant='outlined'
//             margin='normal'
//           />
//           <TextField
//             fullWidth
//             name='address'
//             label='Address'
//             value={editableUser?.school?.address || ''}
//             onChange={handleChange}
//             variant='outlined'
//             margin='normal'
//           />
//           <TextField
//             fullWidth
//             name='contactDetails'
//             label='Contact Details'
//             value={editableUser?.school?.contactDetails || ''}
//             onChange={handleChange}
//             variant='outlined'
//             margin='normal'
//           />
//           <Button
//             variant='contained'
//             color='primary'
//             onClick={handleSave}
//             style={{ marginTop: '16px' }}
//           >
//             Save
//           </Button>
//         </>
//       )}
//     </>
//   );
// };

// export default UserProfileEditable;
