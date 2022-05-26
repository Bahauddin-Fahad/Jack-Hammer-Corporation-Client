import axios from "axios";
import { toast } from "react-toastify";
const useDeleteModal = (url, deleteData, setDeleteData, data, refetch) => {
  const { _id, name } = deleteData;
  const handleDelete = (id) => {
    const header = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };
    axios.delete(url, header).then((data) => {
      if (data.data.acknowledged) {
        toast.success(`${name} is Deleted Successfully`, { theme: "colored" });
        refetch();
        setDeleteData(null);
      } else {
        toast.error(`Can't Delete ${name}`, { theme: "colored" });
      }
    });
  };
  return { _id, handleDelete, name };
};

export default useDeleteModal;
