import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider'

function AuthStatus() {
  let auth = useAuthContext();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in!!!</p>;
  }

  return (
    <p>
      Welcome {auth.user}!{' '}
      <button
        onClick={() => {
          auth.signout(() => navigate('/'));
        }}
      >
        Log Out
      </button>
    </p>
  )
}

export default AuthStatus