

import { FaRegBell } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'

export default function NavBar() {
  return (
    <>
   <div className='navbar-fixed mb-2'>
  <div className="topbar d-flex align-items-center justify-content-between px-4 py-2">
    <div className="d-flex align-items-center ms-auto gap-3">
      
      <div className="position-relative search-container">
        <input type="text" className="form-control" placeholder="Search..." />
        <IoIosSearch className="search-icon" size={20} />
      </div>
      <FaRegBell size={20} className="bellicon" />
    </div>
  </div>
</div>

    
    
    </>
  )
}
