import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  console.log(user);
  const [token, setToken] = useState("");

  useEffect(() => {
    const name = user?.user?.displayName || "";
    const email = user?.user?.email;
    const currentUser = {
      email: email,
      name: name,
      img:
        user?.user?.img ||
        "https://i.ibb.co/pvmWXsv/male-placeholder-image.jpg",
      phone: user?.user?.phone || "",
      address: user?.user?.address || "",
      linkedIn: user?.user?.linkedIn || "",
    };
    if (email) {
      axios
        .put(`http://localhost:5000/user/${email}`, currentUser)
        .then((data) => {
          const accessToken = data?.data?.accessToken;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
