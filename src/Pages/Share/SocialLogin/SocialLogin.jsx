
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';

const SocialLogin = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const isParticipant = location.pathname.includes("participant")
    const isMentor = location.pathname.includes("mentor")
    
  
    const from = location?.state?.from?.pathname || "/";

    const {googleLogin} = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleLogin()
        .then((result) => {
      
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const saveUser = { name: loggedInUser?.displayName, email: loggedInUser.email, isMentor: isMentor,
              isParticipant: isParticipant, }
                fetch("https://warrior-beta.vercel.app/users", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(saveUser),
                })
                  .then((res) => res.json())
                  .then(() => {
                      navigate(from, { replace: true });
                      Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Login Successful',
                        showConfirmButton: false,
                        timer: 1500
                      })
                  });
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
        console.log(errorCode, errorMessage);
          });
    }
    return (
        <div>
            <div className='divider'></div>
          <div className='text-center my-4 w-full'>
          <button onClick={handleGoogleSignIn} className='btn btn-circle btn-outline'>
                <FaGoogle/>
            </button>
          </div>
        </div>
    );
};

export default SocialLogin;