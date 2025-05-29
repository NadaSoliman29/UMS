// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";


// interface UserFormData{
//   firstName: string;
//   lastName: string;
//   email: string;
//   age : number;
//   phone: number;
//   birthDate: string;
// }
     

// export default function AddUser() {
//     let {register, handleSubmit , formState:{errors}}=useForm<UserFormData>()
// let navigate =useNavigate()

//  let onSubmit=async(data:UserFormData)=>{
// try {
//   let response = await axios.post('https://dummyjson.com/users/add', data)
//   console.log(response)
//   toast.success("User Is Added Successfully")
//   navigate("/dashboard/User-List")

  
// } catch (error) {
//   console.log(error)
//   toast.error("Sorry User Can not be Added")
// }

//  }

//   return (
//  <>
//  <div>
//   <h3 className='m-2'> Add User</h3>
//   <hr/>
//  <div className='mt-5'>
//    <form className='m-auto shadow-lg p-5 addform rounded-4' onSubmit={handleSubmit(onSubmit)}>
//   <div className="row">
//     <div className="col-md-6">
//       <div className='mb-1'>
//          <label className='mt-4 textlabel' >First Name</label>
//           <input type="text" className="form-control mt-2"  placeholder="Enter your First Name"
//            {...register('firstName' , {required: 'firstName Is Required'})}/>
//             {errors.firstName && <p className='text-small text-danger'>{errors.firstName.message}</p>}

//       </div>
//     </div>
//      <div className="col-md-6">
//       <div className='mb-1'>
//          <label className='mt-4 textlabel' >Last Name</label>
//           <input type="text" className="form-control mt-2"  placeholder="Enter your Last Name"
//           {...register('lastName' , {required: 'lastName Is Required'})} />
//             {errors.lastName && <p className='text-small text-danger'>{errors.lastName.message}</p>}

//       </div>
//     </div>
//   </div>
//     <div className="row">
//     <div className="col-md-6">
//       <div className='mb-1'>
//          <label className='mt-4 textlabel' >Email</label>
//           <input type="text" className="form-control mt-2"  placeholder="Enter your Email"
//           {...register('email' , {required: 'email Is Required' , pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ , message:"Please Insert the correct Email "}})}
          
//           />
//             {errors.email && <p className='text-small text-danger'>{errors.email.message}</p>}

//       </div>
//     </div>
//      <div className="col-md-6">
//       <div className='mb-1'>
//          <label className='mt-4 textlabel' >Age</label>
//           <input type="number" className="form-control mt-2"  placeholder="Enter your Age"
//           {...register('age' , {required: 'age Is Required', max:{value:60,message:"Max Age is 60"}})} />
//             {errors.age && <p className='text-small text-danger'>{errors.age.message}</p>}

//       </div>
//     </div>
//   </div>
//     <div className="row">
//     <div className="col-md-6">
//       <div className='mb-1'>
//          <label className='mt-4 textlabel' >Phone Number</label>
//           <input type="text" className="form-control mt-2"  placeholder="Enter your Phone Number"
//          {...register('phone' , {required: 'phone Is Required'})}
//           />
//           {errors.phone && <p className='text-small text-danger'>{errors.phone.message}</p>}

//       </div>
//     </div>
//      <div className="col-md-6">
//       <div className='mb-1'>
//          <label className='mt-4 textlabel' >birth Date</label>
//           <input type="date" className="form-control mt-2"  placeholder="Enter your birth Date"
//            {...register('birthDate' , {required: 'birthDate Is Required'})}  />
//             {errors.birthDate && <p className='text-small text-danger'>{errors.birthDate.message}</p>}

//       </div>
//     </div>
//   </div>
// <div className=' text-center mt-4'>
//  <button className=' btn btn-warning w-50 mt-2  BtnSign'> Save</button>

// </div>
//   </form>
//  </div>
//  </div>
 
 
 
//  </>
//   )
// }


import UserForm from "../UserForm/UserForm";
export default function AddUser() {
  return <UserForm />;
}
