import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const name = user?.user?.displayName || "";
    const email = user?.user?.email;
    const currentUser = {
      email: email,
      name: name,
    };
    if (email) {
      axios
        .put(
          `https://jack-hammer-corporation-server.herokuapp.com/user/${email}`,
          currentUser
        )
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
