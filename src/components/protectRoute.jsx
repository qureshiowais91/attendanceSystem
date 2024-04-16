import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAuth);
    if (!isAuth) {
      navigate('/login', { replace: true });
    } 
  }, [isAuth, navigate]);

  return children;
}
