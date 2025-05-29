import { useNavigate } from "react-router-dom";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

export default function Home() {
  const navigate = useNavigate();

  const data = [
    { month: 'Jan', users: 20 },
    { month: 'Feb', users: 35 },
    { month: 'Mar', users: 45 },
    { month: 'Apr', users: 60 },
    { month: 'May', users: 80 },
  ];

  return (
    <div className="container p-4">

      {/* Hero Section with Image */}
      <div className="row align-items-center my-4">
        <div className="col-md-6">
          <h2 className="fw-bold">Welcome to User Dashboard</h2>
          <p className="text-muted">You can add, update, and manage all users in one place easily.</p>
          <div className="d-flex gap-3 mt-3">
            <div className="mb-3">
              <button className="btn btn-warning px-2" onClick={() => navigate("/dashboard/Adduser")}> 
              <i className="fa-solid fa-plus me-2"></i> Add User
            </button>
            <button className="btn btn-outline-primary mx-2" onClick={() => navigate("/dashboard/User-List")}> 
              <i className="fa-solid fa-users me-2"></i> View Users
            </button>
          </div>
        </div>
        <div className="col-md-6 text-center">
        
        </div>
      </div>


      {/* Chart Section */}
      <div className="card shadow-sm p-4">
        <h5 className="mb-3">User Growth Overview</h5>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#f0ad4e" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    </div>
  );
}
