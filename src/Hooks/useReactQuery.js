import axios from "axios";
// import axiosPrivate from "../api/axiosPrivate";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Pages/Shared/Loading";

const useReactQuery = (url, header = {}) => {
  const [data, setData] = useState([]);
  const { isLoading, refetch } = useQuery("data", () =>
    axios.get(url, header).then((data) => {
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
