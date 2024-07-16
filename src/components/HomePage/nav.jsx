import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const redirect = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  const rediretLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-right'>
          <button className='cta-button' onClick={redirect}>
            Register
          </button>
          <button className='cta-button' onClick={rediretLogin}>
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
