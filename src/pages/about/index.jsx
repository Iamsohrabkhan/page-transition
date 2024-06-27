import { stagger } from "framer-motion";
import { useTransform } from "framer-motion";
import { useMotionValue } from "framer-motion";
import {
  motion,
  useAnimate,
  useMotionValueEvent,
  useScroll,
  cubicBezier,
} from "framer-motion";
import { useEffect, useRef } from "react";

const About = () => {
  const imgRef = useRef(null);
  const [scope, animate] = useAnimate();
  // const objectPosition = useMotionValue("20% 20%");
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start 0.75", "end start"],
  });
  const objectPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["20% 20%", "60% 60%"]
  );
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  useMotionValueEvent(scrollYProgress, "change", (event) => {
    console.log(event);
  });
  useEffect(() => {
    animate(
      "span",
      {
        y: ["100%", "0%"],
      },
      {
        duration: 0.35,
        type: "tween",
        ease: "easeOut",
        delay: stagger(0.025, {
          startDelay: 0.4,
          ease: "easeOut",
        }),
      }
    );
  }, []);

  return (
    <section>
      <div className="min-h-[calc(100vh-3rem)] relative bg-main flex justify-center items-center flex-col gap-12 container">
        <h1
          ref={scope}
          className="text-[12rem] font-semibold mt-36 overflow-clip  leading-[0.8]"
        >
          {"Sohrab Khan".split("").map((_, i) => (
            <span key={i} className="inline-block ">
              {_}
              {_ === " " ? <span className="inline-block mx-4"> </span> : ""}
            </span>
          ))}
        </h1>
        <motion.img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1641288883869-c463bc6c2a58?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className=" rounded-xl object-cover"
          layoutId="main-pic"
          style={{ width: "100%", height: "24rem",  objectPosition }}
          transition={{
            layout: { duration: 0.4, ease: "linear" },
            width: { duration: 0.2, ease: "linear" },
          }}
        />
      </div>
      <div className="container">

        <h2 className="text-9xl font-semibold">Bio</h2>
        <div className="grid grid-cols-2 gap-6 text-lg text-black">
          <p className="text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            maxime a ipsa iste sunt facere impedit, repudiandae, sint, rem omnis
            perferendis fugit voluptates dolorem. Perspiciatis eaque omnis modi
            porro corrupti quidem maiores dolor illo dolorem quibusdam alias
            eligendi, aut, obcaecati fugit nostrum itaque cum harum eos atque
            quod, quae aliquid? Amet mollitia consequatur facere expedita beatae
            magnam vitae doloremque omnis sed illo?
          </p>
          <p className="text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            maxime a ipsa iste sunt facere impedit, repudiandae, sint, rem omnis
            perferendis fugit voluptates dolorem. Perspiciatis eaque omnis modi
            porro corrupti quidem maiores dolor illo dolorem quibusdam alias
            eligendi, aut, obcaecati fugit nostrum itaque cum harum eos atque
            quod, quae aliquid? Amet mollitia consequatur facere expedita beatae
            magnam vitae doloremque omnis sed illo?
          </p>
        </div>
        <h2 className="text-9xl font-semibold">Skills</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eaque
          voluptas corporis earum facere. Placeat enim maiores aliquam cum
          saepe, consequuntur adipisci, sint odit inventore ducimus aperiam ex
          quo asperiores debitis suscipit officiis alias, perferendis doloremque
          praesentium reiciendis provident rerum accusamus. A corrupti, nemo
          neque earum tempore doloremque dicta voluptatibus, aliquid ea, sint
          quos magni quam!
        </p>
      </div>

      <footer className="container mx-auto text-center py-24  ">
        Created by{" "}
        <a
          className="underline"
          href="https://sohrabkhan.vercel.app/"
          target="_blank"
        >
          Sohrab Khan
        </a>{" "}
        ♥
      </footer>
    </section>
  );
};

export default About;
