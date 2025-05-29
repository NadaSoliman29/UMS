import axios from 'axios'
import Table from 'react-bootstrap/Table';
import  { useEffect, useState } from 'react'
import { MdOutlineModeEdit } from 'react-icons/md';

import { SlTrash } from 'react-icons/sl';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

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
  <div className='bguser'>
    <div className=''>
  <div className='d-flex  justify-content-between mx-2 p-2  '>
    <h3>Users List</h3>
    <button className='btn btn-warning text-white BtnSign' onClick={moveToAddUser}>ADD NEW User</button>
  </div>
  </div>
  <hr />
   <Table  borderless hover responsive  >
      <thead>

        <tr>
         
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Birth Date</th>
          <th>Actions</th>


        </tr>
      </thead>
      <tbody>
       {users.map((user)=>(
        
        <tr key={user?.id} className="bg-light rounded-3 shadow-sm">
        
         
          <td><img src={user?.image} className='w-25' alt='profile' /></td>
          <td>{user?.firstName}</td>
          <td>{user?.lastName}</td>
          <td>{user?.email}</td>
          <td>{user?.phone}</td>
          <td>{user?.birthDate}</td>
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
