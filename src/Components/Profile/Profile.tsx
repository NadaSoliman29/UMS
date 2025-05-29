import { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "../UserForm/UserForm";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/users/1')
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  if (!user) return <p>Loading...</p>;
  return <UserForm initialData={user} isViewMode={true} />;
}
