import { useCallback, useState } from "react";
import UserItem from "./UserItem";

const UsersList = () => {
  const [inputValue, setinputValue] = useState("");
  const [users, setUsers] = useState([
    { id: 1, name: "Name 1" },
    { id: 2, name: "Name 2" },
  ]);

  const onChange = (event) => {
    const value = event.target.value;
    setinputValue(value);
  };

  const adduser = (event) => {
    event.preventDefault();

    const user = {
      id: users.length + 1,
      name: inputValue,
    };

    setUsers((prevState) => [...prevState, user]);
    setinputValue("");
  };

  const removeUser = useCallback((id) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  }, []);

  return (
    <div className="users">
      <form onSubmit={adduser} className="user-form">
        <input type="text" onChange={onChange} value={inputValue} />
        <button type="submit">Add Name</button>
      </form>

      {users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          action={removeUser}
        />
      ))}
    </div>
  );
};

export default UsersList;
