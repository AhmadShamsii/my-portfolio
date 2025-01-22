// pages/about.tsx
"use client";

import Monstarz from "@/components/Monstarz";
import Wordplay from "@/components/Wordplay";
import Youfirst from "@/components/Youfirst";

const Project = ({ params }: { params: { project: string } }) => {
  console.log('check')
  if (params?.project === "monstarz") {
    return <Monstarz />;
  } else if (params?.project === "wordplay") {
    return <Wordplay />;
  }
  else if (params?.project === "youfirst") {
    return <Youfirst />;
  } else {
    return null; // or a default component
  }
};

export default Project;
