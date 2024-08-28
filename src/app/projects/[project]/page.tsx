// pages/about.tsx
"use client";

import Monstarz from "@/components/Monstarz";
import Wordplay from "@/components/Wordplay";

const Project = ({ params }: { params: { project: string } }) => {
  if (params?.project === "monstarz") {
    return <Monstarz />;
  } else if (params?.project === "wordplay") {
    return <Wordplay />;
  }
  // else if (condition === "C") {
  //   return <ComponentC />;
  // } else if (condition === "D") {
  //   return <ComponentD />;
  // } else {
  //   return null; // or a default component
  // }
};

export default Project;
