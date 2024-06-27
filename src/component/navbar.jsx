import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto text-3xl font-semibold max-w-5xl flex justify-between items-center h-12">
      <Link to="/">Logo.</Link>
      <button className="">Menu</button>
    </nav>
  );
};

export default Navbar;
