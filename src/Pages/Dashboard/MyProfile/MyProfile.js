import UpdateProfile from "./UpdateProfile";
import ViewProfile from "./ViewProfile";

const MyProfile = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-10">
      <ViewProfile />
      <UpdateProfile />
    </div>
  );
};

export default MyProfile;
