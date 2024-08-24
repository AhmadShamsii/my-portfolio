// pages/about.tsx
"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

import monstarzImg from "./../../../../public/monstarzImg.png";
import wordplay from "./../../../../public/wordplay.png";
import nexters from "./../../../../public/nexters.png";
import travelo from "./../../../../public/travelo.png";
import { useRouter } from "next/navigation";

import ProjectImage from "./components/projectImage";
import ProjectDetails from "./components/projectDetails";

const Project = ({ params }: { params: { project: string } }) => {
  const router = useRouter();

  const getImage = () => {
    if (params.project === "monstarz") return monstarzImg;
    else if (params.project === "wordplay") return wordplay;
    else if (params.project === "travelo") return travelo;
    else if (params.project === "nexters") return nexters;
    return monstarzImg;
  };

  return (
    <>
      <ProjectImage getImage={getImage()} />
      <ProjectDetails />
    </>
  );
};

export default Project;
