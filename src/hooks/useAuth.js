import { useSelector } from 'react-redux';

const useAuth = () => {
  const isAuth = useSelector((state) => state.auth.isAuth); // Assuming your authentication state is stored in Redux under `auth` slice and `isSignedIn` is a boolean value
  console.log(isAuth,"checkl")

  return { isAuth };
};
export { useAuth };
