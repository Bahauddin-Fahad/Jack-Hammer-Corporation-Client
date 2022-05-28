import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    const url = `https://jack-hammer-corporation-server.herokuapp.com/admin/${email}`;
    const header = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };
    if (email) {
      axios.get(url, header).then((data) => {
        setAdmin(data.data.admin);
        setAdminLoading(false);
      });
    }
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;
