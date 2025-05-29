import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserForm from "../UserForm/UserForm";

export default function EditUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://dummyjson.com/users/${id}`)
      .then((res) => {
        console.log("User fetched:", res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center mt-5">Loading user...</p>;

  if (!user) return <p className="text-center text-danger mt-5">User not found.</p>;

  return <UserForm initialData={user} isEditMode={true} />;
}
