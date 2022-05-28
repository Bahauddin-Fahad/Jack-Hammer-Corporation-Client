import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useReactQuery from "../../../Hooks/useReactQuery";
import UpdateProfile from "./UpdateProfile";
import ViewProfile from "./ViewProfile";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const url = `https://jack-hammer-corporation-server.herokuapp.com/user/${email}`;
  const header = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  const { data: profile, refetch } = useReactQuery(url, header);
  return (
    <div className="flex justify-center flex-wrap gap-20">
      <ViewProfile key={profile?._id} profile={profile} />
      <UpdateProfile refetch={refetch} user={user} />
    </div>
  );
};

export default MyProfile;
