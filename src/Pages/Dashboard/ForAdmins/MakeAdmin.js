import React, { useState } from "react";
import useReactQuery from "../../../Hooks/useReactQuery";
import DeleteUserModal from "./DeleteUserModal";

import UserList from "./UserList";
const MakeAdmin = () => {
  const [deleteUser, setDeleteUser] = useState(null);
  const url = "https://jack-hammer-corporation-server.herokuapp.com/users";
  const header = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  const { data: users, refetch } = useReactQuery(url, header);
  return (
    <div className="fadeIn">
      <h2 className="text-left ml-3 text-lg text-primary font-bold">
        All Users: {users?.length}
      </h2>
      <div className="overflow-x-auto mx-5">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UserList
                key={user._id}
                index={index}
                refetch={refetch}
                user={user}
                setDeleteUser={setDeleteUser}
              />
            ))}
          </tbody>
        </table>
        {deleteUser && (
          <DeleteUserModal
            deleteUser={deleteUser}
            setDeleteUser={setDeleteUser}
            refetch={refetch}
          />
        )}
      </div>
    </div>
  );
};

export default MakeAdmin;
