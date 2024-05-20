import { Link } from "react-router-dom";

export default function HeaderTop() {
    return (
      <div className="container py-5 flex justify-end">
 <div className="flex flex-row gap-5 items-center ">
       
        <nav className=" flex flex-row justify-between gap-3 ">
          <Link to="/">
            {" "}
            <button className="">Product Website</button>
          </Link>
          <Link to="/logout">
            <button>Logout</button>
          </Link>{" "}
          
        </nav>
      
      </div>
       </div>
    );
  }