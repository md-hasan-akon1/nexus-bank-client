import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import useDesignation from "../../../../../Hooks/useDesignation";

const ButtonLeft = () => {
  const [expendService, setExpendService] = useState(false);

  // use defined ------------------------------------
  const {designation} = useDesignation();
  return (
    <div className="flex gap-6 font-semibold">
      <Link>Home</Link>
      <Link to="/about-details">About Us</Link>
      <div className="relative group">
        <Link className="flex gap-1 items-center">
          Services <FaAngleDown />
        </Link>
          <div className="absolute transform -translate-x-1/2 opacity-0 bg-white  rounded-md   w-40 p-4 transition-opacity duration-300 group-hover:opacity-100 z-30 left-20  flex flex-col space-y-3">
            <Link to="/nexus-accounts">Banking</Link>
            <Link to="/retail-loan">Loan</Link>
          </div>
      </div>
      <div className="relative group">
        {
          designation === "admin"? <Link to='/dashboard/analytics'>Dashboard</Link>:<Link to='/dashboard/account-overview'>Dashboard</Link>
        }
      </div>
      {/* <div className="relative group">
        <Link className="flex gap-1 items-center">
          Banking <FaAngleDown />
        </Link>
        <div className="absolute  transform -translate-x-1/2 opacity-0 bg-white  rounded-md   w-40 px-4 pb-4 pt-8  transition-opacity duration-300 group-hover:opacity-100 z-30 left-20  flex flex-col space-y-3">
        <Link>Digital Banking</Link>
        <Link>NRB Banking</Link>
      </div>
      </div> */}
      {/* <div className="relative group">
        <Link className="flex gap-1 items-center">
          loan <FaAngleDown />
        </Link>
        <div className="absolute  transform -translate-x-1/2 opacity-0 bg-white  rounded-md   w-40 px-4 pb-4 pt-8  transition-opacity duration-300 group-hover:opacity-100 z-30 left-20  flex flex-col space-y-3">
        <Link>Student loan</Link>
        <Link>Personal loan</Link>
        <Link>Business loan</Link>
      </div>
      </div> */}
      <Link to='/contact'>Contact</Link>
      <Link to='/blogs'>Blogs</Link>
      <Link to='/careers'>Careers</Link>
    </div>
  );
};

export default ButtonLeft;

// thats great