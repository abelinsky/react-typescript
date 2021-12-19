import { useState } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const user = users.find((user) => user.name === name);
    setUser(user);
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find</button>

      {user && (
        <div>
          <p> Name: {user.name} </p>
          <p> Age: {user.age} </p>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
