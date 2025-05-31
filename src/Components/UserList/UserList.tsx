import axios from 'axios'
import Table from 'react-bootstrap/Table';
import  { useEffect, useState } from 'react'
import { MdOutlineModeEdit } from 'react-icons/md';

import { SlTrash } from 'react-icons/sl';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

interface User {
  id:number;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
}

export default function UserList() {
  
// dark mode 
const theme = useContext(ThemeContext);
if (!theme) throw new Error("ThemeContext not provided");
const { isDark } = theme;


 let [users, setUsers] = useState <User[]>([])
let [userId, setUserId] = useState <number | null>(null)
const [userData, setUserData] = useState <User | null>(null)
 let navigate = useNavigate()

// model
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (user:User) =>{
    setShow(true);
    setUserId(user.id)
    setUserData(user)
  }
  // end model 
let deleteUser=async ()=>{
  try {

     await axios.delete(`https://dummyjson.com/users/${userId}`)
    handleClose()
    toast.success("Delete Successfully")
    getUsers()
    
  } catch (error) {
    console.log(error)
    toast.error("can not deleted")

    
  }

}

  let getUsers=async() =>{
    try {  
      let response = await axios.get("https://dummyjson.com/users")
     setUsers(response?.data?.users || [])
    } catch (error) {
      console.log(error)
    }
  };

let moveToAddUser=()=>{
navigate("/dashboard/Adduser")
}
// let moveToUpdate=()=>{
// navigate(`/dashboard/update-user/${user.id}`)
// }

  useEffect(() => {
   
  getUsers()
  }, [])
  
  return (
  <>
 <div className={isDark ? 'bg-dark text-white' : 'bguser'}>
    <div className=''>
  <div className=' user-header sticky-top d-flex justify-content-between align-items-center p-2 px-3 z-3'>
    <h3>Users List</h3>
    <button className='btn btn-warning text-white adduserbtn' onClick={moveToAddUser}>ADD NEW User</button>
  </div>
  </div>
 
  <hr />
   <Table  borderless hover responsive   className={isDark ? 'table-dark' : ''} >
      <thead>

        <tr>
         
          <th></th>
          <th>First Name</th>
          <th className="d-none d-md-table-cell">Last Name</th>
          <th>Email</th>
          <th className="d-none d-md-table-cell">Phone</th>
          <th className="d-none d-md-table-cell">Birth Date</th>
          <th>Actions</th>


        </tr>
      </thead>
      <tbody>
       {users.map((user)=>(
        
        <tr key={user?.id} className="bg-light rounded-3 shadow-sm">
        
         
          <td><img src={user?.image} className='w-25' alt='profile' /></td>
          <td>{user?.firstName}</td>
          <td className="d-none d-md-table-cell">{user?.lastName}</td>
          <td>{user?.email}</td>
          <td className="d-none d-md-table-cell">{user?.phone}</td>
          <td className="d-none d-md-table-cell">{user?.birthDate}</td>
          <td>
            <MdOutlineModeEdit className='text-warning mx-2 handelcaursoual' size={20} onClick={() => navigate(`/dashboard/update-user/${user.id}`)}/>
            <SlTrash className='text-danger mx-2  handelcaursoual' size={20} onClick={()=>handleShow(user)}  />

          </td> 
        </tr>
        
       ))}
      </tbody>
    </Table>
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure , You Delete {userData?.firstName}  {userData?.lastName}  ? </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteUser}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
          No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  </>
  )
}
