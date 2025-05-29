import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface UserFormData {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phone: number;
  birthDate: string;
}


interface UserFormProps {
  initialData?: UserFormData;
  isEditMode?: boolean;
  isViewMode?: boolean;
}

export default function UserForm({ initialData, isEditMode = false, isViewMode = false }: UserFormProps) {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<UserFormData>();
  const navigate = useNavigate();

  useEffect(() => {
    if (initialData) {
   Object.entries(initialData).forEach(([key, value]) => {
  if (key === "birthDate" && typeof value === "string") {
    const date = new Date(value);
    const formattedDate = date.toISOString().split("T")[0]; // ✅ yyyy-MM-dd
    console.log("Formatted Birth Date:", formattedDate);
    setValue("birthDate", formattedDate as any);
  } else {
    setValue(key as keyof UserFormData, value);
  }
});
    }
  }, [initialData, setValue]);

  const onSubmit = async (data: UserFormData) => {
    try {
    
      if (isEditMode && initialData?.id) {
 let res =    await axios.put(`https://dummyjson.com/users/${initialData.id}`, data);
        toast.success("User Updated Successfully");
        console.log("Fetched user:", res.data);
      } else {
       await axios.post('https://dummyjson.com/users/add', data);
        toast.success("User Added Successfully");
      }
      navigate("/dashboard/User-List");
    } catch (error) {
      console.log(error);
      toast.error("Operation Failed");
    }
  };

  return (
    <div>
      <h3 className='m-2'>{isEditMode ? "Update User" : isViewMode ? " Profile" : "Add User"}</h3>
      <hr />
      <div className='mt-5'>
        <form className='m-auto shadow-lg  p-md-5  addform rounded-4' onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-12 col-md-6 mb-2">
              <div className='mb-1'>
                <label className='mt-4 textlabel'>First Name</label>
                <input type="text" className="form-control mt-1" placeholder="Enter First Name"
                  {...register('firstName', { required: 'First Name is required' })} disabled={isViewMode} />
                {errors.firstName && <p className='text-danger'>{errors.firstName.message}</p>}
              </div>
            </div>
          <div className="col-12 col-md-6 mb-2">
              <div className='mb-1'>
                <label className='mt-4 textlabel'>Last Name</label>
                <input type="text" className="form-control mt-1" placeholder="Enter Last Name"
                  {...register('lastName', { required: 'Last Name is required' })} disabled={isViewMode} />
                {errors.lastName && <p className='text-danger'>{errors.lastName.message}</p>}
              </div>
            </div>
          </div>

          <div className="row">
           <div className="col-12 col-md-6 mb-2">
              <div className='mb-1'>
                <label className='mt-4 textlabel'>Email</label>
                <input type="text" className="form-control mt-1" placeholder="Enter Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Invalid email format"
                    }
                  })} disabled={isViewMode} />
                {errors.email && <p className='text-danger'>{errors.email.message}</p>}
              </div>
            </div>
            <div className="col-12 col-md-6 mb-2">
              <div className='mb-1'>
                <label className='mt-4 textlabel'>Age</label>
                <input type="number" className="form-control mt-1" placeholder="Enter Age"
                  {...register('age', { required: 'Age is required', max: { value: 60, message: "Max age is 60" } })} disabled={isViewMode} />
                {errors.age && <p className='text-danger'>{errors.age.message}</p>}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 mb-2">
              <div className='mb-1'>
                <label className='mt-4 textlabel'>Phone</label>
                <input type="text" className="form-control mt-1" placeholder="Enter Phone Number"
                  {...register('phone', { required: 'Phone is required' })} disabled={isViewMode} />
                {errors.phone && <p className='text-danger'>{errors.phone.message}</p>}
              </div>
            </div>
            <div className="col-12 col-md-6 mb-2">
              <div className='mb-1'>
                <label className='mt-4 textlabel'>Birth Date</label>
                <input type="date" className="form-control mt-1"
                  {...register('birthDate', { required: 'Birth Date is required' })} disabled={isViewMode} />
                {errors.birthDate && <p className='text-danger'>{errors.birthDate.message}</p>}
              </div>
            </div>
          </div>

          {!isViewMode && (
            <div className='text-center mt-4'>
              <button className='btn btn-warning  w-50 BtnSign updatebtn'>
                {isEditMode ? "Update" : "Save"}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}