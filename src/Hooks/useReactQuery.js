import axios from "axios";
// import axiosPrivate from "../api/axiosPrivate";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Pages/Shared/Loading";

const useReactQuery = (url) => {
  const [data, setData] = useState([]);
  const { isLoading, refetch } = useQuery("tools", () =>
    axios.get(url).then((data) => {
      setData(data?.data);
      refetch();
    })
  );

  if (isLoading) {
    return <Loading />;
  }
  return { data, refetch };
};

export default useReactQuery;
