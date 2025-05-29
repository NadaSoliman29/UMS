import axios from 'axios';
import { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';



  interface LoginFormInputs {
    username:string;
    password:string;

  }
  interface AuthContextType{
   saveUserData: () => void; 
  }
export default function Login() {

  let {saveUserData} = useContext(AuthContext) as AuthContextType

  let {register , handleSubmit , formState:{errors}}=useForm<LoginFormInputs>()
  let navigate = useNavigate()
  let onSubmite =async (data:LoginFormInputs)=>{
    try {
      let response = await axios.post("https://dummyjson.com/auth/login" , data)
     
     localStorage.setItem("userToken",response?.data?.accessToken)
     saveUserData()
     toast.success("Login Successfully!");
      navigate('/dashboard')
    } catch (error) {
      toast.error("please insert correct data");

      console.log(error)
      
    }
  }
 
 
  return (
   <>
   
   <div className='container-fluid login-container'>
    <div className="row justify-content-center align-items-center vh-100">
      <div className="col-md-3 bg-white p-4 rounded-4 loginmobile">
      <div className="title text-center">
        <h3 className='mb-4 userTitle headuser'>User Management System</h3>
        <h5>SIGN IN</h5>
        <small className='txtsign'>Enter your credentials to access your account</small>
      </div>
      <form onSubmit={handleSubmit(onSubmite)} >
          <label className='mt-4 textlabel' >User Name</label>
          <input type="text" className="form-control mt-2"  placeholder="Enter your user name"
          {...register('username' , {required: 'UserName Is Required'})}
          
          />
       {errors.username && <p className='text-small text-danger'>{errors.username.message}</p>}
        
          <label className='mt-4 textlabel' >Password</label>
          <input type="password" className="form-control mt-2"  placeholder="Enter your password"
          
             {...register( "password", {required: 'Password Is Required'})}
          />
        {errors.password && <p className='text-small text-danger'>{errors.password.message}</p>}
          <button className=' btn btn-warning w-100 my-4 BtnSign'> SIGN IN</button>
      </form>
      </div>
      </div>
      </div>
   </>
  )
}
