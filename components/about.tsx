"use client";

import React from "react";
import SectionHeading from "./sectionheading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-20 max-w-[45rem] text-center leading-8 sm:mb-16 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I completed my schooling at{" "}
        <span className="font-medium">
          National Higher Secondary School Vattoli .
        </span>{" "}
        After my schooling, I pursued a{" "}
        <span className="font-medium">Bachelor of Computer Applications</span>{" "}
        degree from
        <span className="font-medium">
          {" "}
          Acharya Bangalore Business School.
        </span>{" "}
        I've refined my skills through a robust computer science foundation and
        hands-on experience. My main focus is{" "}
        <span className="font-medium">in backend development</span>. I am also
        familiar with Docker, Kubernetes, and cloud computing platforms like AWS
        and GCP. I am always looking to learn new technologies. I am currently
        looking for a <span className="font-medium">full-time position</span> as
        a software Engineer.
      </p>
    </motion.section>
  );
}
