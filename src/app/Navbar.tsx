import { HiMenuAlt3 } from "react-icons/hi";
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetClose, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";

const Navbar = () => {
  return (
    <nav className=" select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, type: "easeIn" }}
        animate={{ opacity: 1, scale: 1, type: "easeIn" }}
        transition={{ duration: 0.8, delay: 0.5, type: "easeIn" }}
        className="flex items-start justify-center pt-10 pb-8 px-12"
      >
        <div className="w-full bg-zinc-400 h-[1px] gradient"></div>
      </motion.div>

      <div className="relative px-4 pt-4 text-center tracking-wider text-2xl text-white">
        <div className="absolute top-0 left-12 text-[3.5rem] font-extrabold text-left tracking-[1] leading-6 flex-col">
          <Link href="/" className="hover:text-zinc-300 transition ease-in-out translate-y-4">
            <motion.h1
              initial={{ opacity: 0, x: -15 }} // Start from left (-100px)
              animate={{ opacity: 1, x: 0 }} // Move to final position (0px)
              transition={{ duration: 0.8, type: "easeIn", delay: 0 }} // Add delay of 1 second
            >
              Jack Sheehy
            </motion.h1>
          </Link>
          <h2 className="text-lg mt-6 ml-2 leading-5  text-zinc-400 font-semibold tracking-[0.075rem]">
            <motion.div
              initial={{ opacity: 0, x: -17 }} // Start from left (-100px)
              animate={{ opacity: 1, x: 0 }} // Move to final position (0px)
              transition={{ duration: 0.9, type: "easeIn", delay: 0.2 }} // Add delay of 1 second
            >
              Business Computing
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }} // Start from left (-100px)
              animate={{ opacity: 1, x: 0 }} // Move to final position (0px)
              transition={{ duration: 1, type: "easeIn", delay: 0.3 }} // Add delay of 1 second
            >
              student at <span className=" ">TU Dublin</span>
            </motion.div>
          </h2>
        </div>
        <div className="absolute right-8 top-0 flex items-center z-10 hover-opacity">
          <Sheet>
            <SheetTrigger>
              <HiMenuAlt3 className="text-3xl hover:text-zinc-300 transition ease-in-out" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-black select-none">
              <SheetHeader className="flex flex-col justify-center h-full">
                <div className="flex flex-col justify-center gap-4 flex-1">
                  <Link href="/projects" className="text-white mr-4">
                    <SheetClose>
                      <SheetTitle className="text-4xl text-white hover-opacity">Projects</SheetTitle>
                    </SheetClose>
                  </Link>
                </div>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/indexdublin/" className="text-4xl text-white hover-opacity">
                    <SheetTitle className="text-4xl text-white hover-opacity">
                      <FiGithub />
                    </SheetTitle>
                  </a>
                  <a href="https://soundcloud.com/indexdublin" className="text-4xl text-white hover-opacity">
                    <SheetTitle className="text-4xl text-white hover-opacity">
                      <FiInstagram />
                    </SheetTitle>
                  </a>
                  <a href="https://www.facebook.com/indexdublin">
                    <SheetTitle className="text-4xl text-white hover-opacity">
                      <FiLinkedin />
                    </SheetTitle>
                  </a>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
