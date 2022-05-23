import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const { toolId } = useParams();
  // const [tool, setTool] = useState({});
  const url = `http://localhost:5000/purchase/${toolId}`;
  // useEffect(() => {
  //   axios.get(url).then((data) => console.log(data.data));
  // }, []);
  const { data: tool, isLoading } = useQuery(["purchase", toolId], () =>
    axios.get(url).then((data) => {
      console.log(data);
      return data.data;
    })
  );
  // console.log(tool);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>Purchase</h2>
      <h2>{toolId}</h2>
    </div>
  );
};

export default Purchase;
