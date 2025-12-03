"use client";
import Image from "next/image";
import { Socials } from "./socials";

const experiences = [
  {
    company: "Medallia",
    role: "SDE2 - Frontend",
    period: "Jan 2024 - Present",
    logo: "/medallia.png",
    link: "https://www.medallia.com/",
  },
  {
    company: "Peoplebox YC(S 22)",
    role: "SDE - Fullstack",
    period: "Sep 2021 - Dec 2024",
    logo: "/pplbx.png",
    link: "https://www.peoplebox.ai/",
  },
];

const Experience = () => {
  return (
    <>
      <div className="text-3xl mt-15">Experience</div>
      <div className="flex flex-col gap-5 mt-10">
        {experiences.map((exp) => (
          <div
            onClick={() => {
              window.open(exp.link, "_blank");
            }}
            key={exp.company}
            className="flex cursor-pointer"
          >
            <Image src={exp.logo} alt={exp.company} width={80} height={80} />
            <div className="ml-5">
              <div className="text-xl font-medium">{exp.company}</div>
              <div>{exp.role}</div>
              <div>{exp.period}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const Intro = () => {
  return (
    <div className="mt-20 font-light leading-relaxed">
      <div className="text-3xl">Hi there! 👋</div>
      <div className="mt-10">
        {"I'm"} a frontend engineer who loves building fast, scalable, and
        delightful user experiences on the web. My work ranges from designing
        sleek interfaces to diving deep into complex engineering challenges —
        like exploring ProseMirror, real-time collaboration, and local-first
        applications. I enjoy tackling problems around scalability, performance,
        and developer experience. You can read more about my journey and
        projects on my about page.
      </div>
      <Socials />
      <Experience />
    </div>
  );
};
