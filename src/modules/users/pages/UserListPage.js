import React from "react";
import useUserList from "../hooks/useUserList";
import UserList from "../components/UserList";
import ButtonNavBack from "../../common/components/ButtonNavBack";

export default function UserListPage() {
  const list = useUserList();
  return (
    <div className="App__users-list container">
      <h2 className="App__users-title">Users</h2>
      <UserList list={list} />
      <ButtonNavBack />
    </div>
  );
}
