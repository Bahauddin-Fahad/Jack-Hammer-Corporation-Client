import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useReactQuery from "../../../Hooks/useReactQuery";
import UpdateProfile from "./UpdateProfile";
import ViewProfile from "./ViewProfile";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const url = `http://localhost:5000/user/${email}`;
  const header = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  const { data: profile, refetch } = useReactQuery(url, header);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-10">
      <ViewProfile key={profile._id} profile={profile} />
      <UpdateProfile key={profile._id} refetch={refetch} />
    </div>
  );
};

export default MyProfile;
