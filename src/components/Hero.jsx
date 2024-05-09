import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Image1 from "../assets/New folder (2)/Facing_side.png";

const Hero = () => {
  return (
    <section className={`relative w-full py-40 h-30 mx-auto`}>
      <div
        className={` inset-1 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="flex items-center justify-center gap-8">
          <div>
            <h1 className={`${styles.heroHeadText} text-[aquamarine] `}>
              <span className="text-[65px]">&nbsp;&nbsp;&nbsp;Hi, I'm </span><span className="text-[aquamarine] text-[67px]"> &nbsp;&nbsp;Abdelbasset</span>
            </h1>
            <p className={`${styles.heroSubText} mt-4 text-white`}>
              &nbsp;&nbsp;&nbsp;&nbsp; I Build <span className="text-[aquamarine]">Network </span>Infrastructure <br className='sm:block hidden' />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Like Never Seen <span > Before !</span>
            </p>
          </div>
          <img src={Image1} className=" w-[300px] h-[483px] object-contain shadow-2xl animate-floating shadow-violet-700 rounded-full   right-10 flex justify-end items-end  "/>
        </div>
      </div>
      <div className=" shadow-2xl animate-floating  w-[1080px] h-[0px] object-cover  ">
                                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This Website Has Been Developed By Me .</p>
      </div>
      
      {/* LANDING PHOTO-------------------------------- */}

      {/* LANDING PHOTO---------------------------------- */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
