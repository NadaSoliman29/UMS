import { CiBookmark } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { MdOutlineLogout } from "react-icons/md";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function SideBar() {
  let {userData}:any=useContext(AuthContext)
  let [collapsed, setCollapsed] = useState(false);
  let toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return ( 
    <div className="sideContainer vh-100">
      
      <Sidebar collapsed={collapsed} className="vh-100" >
    <div className="d-flex align-items-center p-2">
      <span onClick={toggleCollapsed} className="handelcaursoual">
        {collapsed ? (
          <FaArrowAltCircleRight size={25} />
        ) : (
          <FaArrowAltCircleLeft size={25} />
        )}
      </span>
      {!collapsed && <h6 className="UMS mb-0 ms-2">UMS</h6>}
    </div>

        {collapsed ? (
          <div className="text-center my-3">
             <h6 className="mt-2 mb-2">{userData?.firstName}</h6>
            <h6 className="admin text-warning">Admin</h6>
          </div> ) :
           ( <div className="text-center mb-3 mt-5">
            <img src={userData?.image} alt="profile" className="rounded-circle" />
            <h5 className="mt-2 mb-2">{userData?.firstName}{userData?.lastName}</h5>
            <h6 className="admin text-warning">Admin</h6>
          </div>
        )}
        <Menu>
          <MenuItem
            icon={<IoHomeOutline />}
            component={<Link to="/dashboard/Home" />}
          >
            
            Home
          </MenuItem>
          <MenuItem  icon={<CiBookmark />} component={<Link to="/dashboard/User-List" />}>  Users
          </MenuItem>

          <MenuItem  icon ={<LiaGraduationCapSolid/>}component={<Link to="/dashboard/Adduser" />} >
           Add User
          </MenuItem>

          <MenuItem icon={<RiMoneyDollarBoxLine />} component={<Link to="/dashboard/Profile" />}>
            Profile
          </MenuItem>

          <MenuItem className="logoutstyle" icon={<MdOutlineLogout />} component={<Link to=" " />}>
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
