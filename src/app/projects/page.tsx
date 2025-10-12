"use client";

import Image from "next/image";

const ProjectSection = () => {
  const projects = [
    {
      name: "Leaf",
      description:
        "A collaborative sketch pad inspired by excalidraw and collaborative cursor inspired by Miro",
      logo: "/leaf.png",
      stack: "React, Tiptap, Yjs, Tailwind",
      link: "https://leaf-frontend.netlify.app/",
    },
    {
      name: "Notion Clone",
      description: "A collaborative note editor inspired by notion",
      logo: "/notion.svg",
      stack: "React, Tiptap, Yjs, Tailwind",
      link: "https://leaf-frontend.netlify.app/editor",
    },
    {
      name: "Buffer Clone",
      description:
        "A buffer app clone with working kanban board and event calender",
      logo: "/buffer.png",
      stack: "Next.js, Tailwind",
      link: "https://buffer-clone-tarun-29s-projects.vercel.app/start",
    },
    {
      name: "Linear Clone (WIP)",
      description: "A clone of Linear for issue tracking app",
      logo: "/linear.png",
      stack: "React, Tiptap, Tailwind",
      link: "#",
    },
  ];

  return (
    <>
      <div className="text-3xl mt-20">Projects</div>
      <div className="flex flex-col gap-5 mt-10">
        {projects.map((exp) => (
          <div
            key={exp.name}
            onClick={() => window.open(exp.link, "_blank")}
            className="flex cursor-pointer"
          >
            <Image src={exp.logo} alt={exp.name} width={80} height={80} />
            <div className="ml-5">
              <div className="text-xl font-medium">{exp.name}</div>
              <div>{exp.description}</div>
              <div>{exp.stack}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
