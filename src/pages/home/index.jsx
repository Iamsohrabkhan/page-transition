import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-3rem)] relative bg-main flex justify-center items-center">
      <Link to="/about">
        <motion.img
          src="https://images.unsplash.com/photo-1641288883869-c463bc6c2a58?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="  object-cover object-center"
          layoutId="main-pic"
          style={{
            width: "24rem",
            height: "24rem",
          }}
          transition={{
            layout: { duration: 0 },
          }}
        />
      </Link>
    </section>
  );
}
