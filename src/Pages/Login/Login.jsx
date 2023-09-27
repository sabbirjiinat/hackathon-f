import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import {
  Link,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../Share/SocialLogin/SocialLogin";
import Lottie from "lottie-react";
import loginLottie from '../../assets/Lottie/animation_lmi33i3d.json'

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const isParticipant = location.pathname.includes("participant");
  const isMentor = location.pathname.includes("mentor");

  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          position: "top-start",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        // ...
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className="hero min-h-screen pt-12 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center lg:text-left">
            {isParticipant ? (
              <h1 className="text-5xl font-bold">
                Login as <span className="text-blue-700">Participant</span>
              </h1>
            ) : (
              <h1 className="text-5xl font-bold">
                Login as <span className="text-red-500">Mentor</span>
              </h1>
            )}
           <Lottie animationData={loginLottie} loop={true} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-900 text-white">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            {isMentor && (
              <>
                <p className="m-4">
                  New Here?{" "}
                  <Link to="/signUp/mentor">
                    <span className="text-blue-500">Create an account</span>
                  </Link>
                </p>
                <SocialLogin />
              </>
            )}

            {isParticipant && (
              <>
                {" "}
                <p className="m-4">
                  New Here?{" "}
                  <Link to="/signUp/participant">
                    <span className="text-blue-500">Create an account</span>
                  </Link>
                </p>{" "}
                <SocialLogin />
              </>
            )}
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
};

export default Login;
