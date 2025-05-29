

import { FaBell, FaRegBell, FaSearch } from 'react-icons/fa'
import { IoIosArrowDropleft, IoIosSearch } from 'react-icons/io'

export default function NavBar() {
  return (
    <>
    <div className='tablestyle'>
 <div className="topbar d-flex align-items-center justify-content-between px-4 py-2 ">
   <IoIosArrowDropleft size={22}  className="bellicon"  />
      <div className="d-flex align-items-center ms-auto gap-3">
        <div className="position-relative search-container">
          <input type="text" className="form-control "  placeholder="Search..." />
          <IoIosSearch className="search-icon" size={20} />
        </div>
        <FaRegBell  size={20} className="bellicon" />
      </div>
  </div>
  </div>
    
    
    </>
  )
}
