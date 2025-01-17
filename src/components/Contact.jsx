import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Information</h3>

        <div className="mt-12 flex flex-col gap-6 text-white">
          <p className="text-[18px] font-medium">
            📞 <span className="font-bold">Phone:</span> +998934734989
          </p>
          <p className="text-[18px] font-medium">
            ✉️ <span className="font-bold">Email:</span>{" "}
            maruffarrux2001@gmail.com
          </p>
          <p className="text-[18px] font-medium">
            💬 <span className="font-bold">Telegram:</span>{" "}
            <a
              href="https://t.me/farruh_developer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary"
            >
              farruh_developer
            </a>
          </p>
          <p className="text-[18px] font-medium">
            💻 <span className="font-bold">GitHub:</span>{" "}
            <a
              href="https://github.com/farruxuzbekistan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary"
            >
              farruxuzbekistan
            </a>
          </p>
          <p className="text-[18px] font-medium">
            📸 <span className="font-bold">Instagram:</span>{" "}
            <a
              href="https://www.instagram.com/farrux_muslim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary"
            >
              farrux_muslim
            </a>
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
