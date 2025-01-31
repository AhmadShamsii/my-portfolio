// pages/about.tsx
"use client";

import Bankist from "@/components/Bankist";
import Mapty from "@/components/Mapty";
import Monstarz from "@/components/Monstarz";
import Nexters from "@/components/Nexters";
import Travelo from "@/components/Travelo";
import Wordplay from "@/components/Wordplay";
import Youfirst from "@/components/Youfirst";
import Zonebit from "@/components/Zonebit";

const Project = ({ params }: { params: { project: string } }) => {
  if (params?.project === "monstarz") {
    return <Monstarz />;
  } else if (params?.project === "wordplay") {
    return <Wordplay />;
  } else if (params?.project === "youfirst") {
    return <Youfirst />;
  } else if (params?.project === "zonebit") {
    return <Zonebit />;
  } else if (params?.project === "nexters") {
    return <Nexters />;
  } else if (params?.project === "travelo") {
    return <Travelo />;
  } else if (params?.project === "mapty") {
    return <Mapty />;
  } else if (params?.project === "bankist") {
    return <Bankist />;
  } else {
    return null; // or a default component
  }
};

export default Project;
