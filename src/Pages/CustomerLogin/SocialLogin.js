import React, { useEffect } from "react";
import googleLogo from "../../Assets/images/logo/google.png";
import fbLogo from "../../Assets/images/logo/facebook.png";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../Hooks/useToken";
import Loading from "../Shared/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  //Google Sign In
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  // Facebook Sign In
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);

  const [token] = useToken(googleUser || fbUser);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  if (googleLoading || fbLoading) {
    return <Loading />;
  }

  let signInError;
  if (googleError || fbError) {
    signInError = (
      <p className="text-[red] mb-4">
        <span className="text-sm">{googleError?.message}</span>
      </p>
    );
  }
  return (
    <div>
      {signInError}
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline w-full"
      >
        <img className="w-7 mr-2" src={googleLogo} alt="" />
        Continue With Google
      </button>
      <button
        onClick={() => signInWithFacebook()}
        className="btn btn-outline w-full bg-blue-600 text-white mt-3"
      >
        <img className=" w-7 mr-2" src={fbLogo} alt="" /> Continue with Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
