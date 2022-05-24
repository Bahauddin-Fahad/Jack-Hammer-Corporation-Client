import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  // console.log(user?.user?.email);
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      axios
        .put(`http://localhost:5000/user/${email}`, currentUser)
        .then((data) => {
          console.log(data);
          const accessToken = data?.data?.accessToken;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
