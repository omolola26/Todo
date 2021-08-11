import { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data: users } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      console.log(users);
      setListOfUsers([...listOfUsers, ...users]);
    };
    fetchData();
  }, []);

  const mapUsers = listOfUsers.map(
    ({
      id,
      name,
      email,
      username,
      address: {
        city,
        geo: { lat, lng },
      },
    }) => (
      <div key={id}>
        <h1>{name}</h1>
        Username: <span>{username}</span>
        <p>{email}</p>
        <p>{city}</p>
        <span>
          latitude:{lat}, longitude:{lng}
        </span>
      </div>
    )
  );
  return <>{mapUsers}</>;
};
export default UserList;
